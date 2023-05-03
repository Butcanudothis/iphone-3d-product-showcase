import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebGiViewer = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const canvasContainerRef = useRef(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      setPreviewMode(true);
      canvasContainerRef.current.style.pointerEvents = "all";
      props.contentRef.current.style.opacity = 0;
      gsap.to(positionRef, {
        x: 13.04,
        y: 2.01,
        z: 2.29,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      });
      gsap.to(targetRef, {
        x: 0.11,
        y: 0.0,
        z: 0.0,
        duration: 2,
      });

      viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    },
  }));

  const memoizedScrollAnimation = useCallback((position, target, onUpdate,isMobile) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, onUpdate, isMobile);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    setViewerRef(viewer);
    const isMobile = mobileAndTabletCheck();
    setIsMobile(isMobile);

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    setCameraRef(camera);
    setPositionRef(position);
    setTargetRef(target);

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    await manager.addFromPath("scene14-black.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({
      controlsEnabled: false,
    });

    if (isMobile) {
      position.set(13.04, 2.01, 2.29);
      target.set(0.11, 1.0, 0.0);
      props.contentRef.current.className = "mobile-or-tablet";
    }
    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memoizedScrollAnimation(position, target, onUpdate,isMobile);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  const handleExit = useCallback(() => {
    canvasContainerRef.current.style.pointerEvents = "none";
    props.contentRef.current.style.opacity = 1;
    viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    setPreviewMode(false);
    gsap
      .to(positionRef, {
        x: -0.0247695367,
        y: !isMobile ?7.4853469649:9,
        z: !isMobile ?-3.4901875041:-4.1,
        scrollTrigger: {
          trigger: ".display-section",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
          },
      });
      gsap.to(targetRef, {
        x: 0,
        y:!isMobile ? 1.9029907227:0.78,
        z: 0,
        scrollTrigger: {
          trigger: ".display-section",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
      });
  }, [canvasContainerRef, viewerRef, positionRef, targetRef, cameraRef]);

  return (
    <div ref={canvasContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
      {previewMode && (
        <button className="button" onClick={handleExit}>
          Back
        </button>
      )}
    </div>
  );
});

export default WebGiViewer;
