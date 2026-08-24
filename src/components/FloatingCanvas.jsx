import React, { useEffect, useRef } from 'react';

const FloatingCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track mouse for parallax & hover physics
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Floating Object Definitions
    const keyLabels = ['Ctrl', 'Shift', 'Tab', 'Enter', 'Python', 'AI', 'Data', 'SQL', 'Git', '{ }', '< >', '9.1', 'REVA', 'B.Tech', 'EDA', 'ML'];
    const mathSymbols = ['∑', 'λ', 'π', 'σ', '∂', 'f(x)', '∫', '∆'];

    const items = [];

    // Create 3D Keyboard Keys
    const keyCount = width < 768 ? 12 : 22;
    for (let i = 0; i < keyCount; i++) {
      items.push({
        type: 'key',
        label: keyLabels[i % keyLabels.length],
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2, // scale depth
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        rot: (Math.random() - 0.5) * 0.2,
        rotSpeed: (Math.random() - 0.5) * 0.005,
        w: 54 + (keyLabels[i % keyLabels.length].length > 4 ? 24 : 0),
        h: 42,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Create Translucent Paper Sheets
    const paperCount = width < 768 ? 4 : 8;
    for (let i = 0; i < paperCount; i++) {
      items.push({
        type: 'paper',
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        rot: (Math.random() - 0.5) * 0.4,
        rotSpeed: (Math.random() - 0.5) * 0.002,
        w: 110 + Math.random() * 60,
        h: 140 + Math.random() * 70,
        lines: Math.floor(Math.random() * 4) + 3,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Create Math & Stat Particles
    const mathCount = width < 768 ? 8 : 16;
    for (let i = 0; i < mathCount; i++) {
      items.push({
        type: 'math',
        symbol: mathSymbols[i % mathSymbols.length],
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 16 + Math.random() * 12,
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Parallax offsets
      const offsetX = (mouse.x - width / 2) * 0.03;
      const offsetY = (mouse.y - height / 2) * 0.03;

      items.forEach((item) => {
        // Natural float physics
        item.x += item.vx + Math.sin(time + item.phase) * 0.2;
        item.y += item.vy + Math.cos(time + item.phase) * 0.2;
        if (item.rotSpeed) item.rot += item.rotSpeed;

        // Screen wrap
        if (item.x < -100) item.x = width + 100;
        if (item.x > width + 100) item.x = -100;
        if (item.y < -100) item.y = height + 100;
        if (item.y > height + 100) item.y = -100;

        // Mouse repelling force
        const dx = item.x - (mouse.x - offsetX * item.z * 10);
        const dy = item.y - (mouse.y - offsetY * item.z * 10);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          item.x += (dx / dist) * force * 3;
          item.y += (dy / dist) * force * 3;
        }

        const renderX = item.x + offsetX * item.z * 15;
        const renderY = item.y + offsetY * item.z * 15;

        ctx.save();
        ctx.translate(renderX, renderY);
        ctx.rotate(item.rot || 0);

        if (item.type === 'paper') {
          // Draw Translucent Paper Sheet with depth
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowBlur = 20 * item.z;
          ctx.shadowOffsetY = 10 * item.z;

          // Glass Paper Body
          ctx.fillStyle = `rgba(255, 255, 255, ${0.02 + item.z * 0.025})`;
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 + item.z * 0.08})`;
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.roundRect(-item.w / 2, -item.h / 2, item.w, item.h, 8);
          ctx.fill();
          ctx.stroke();

          // Subtle Code / Text Lines on Paper
          ctx.fillStyle = `rgba(99, 102, 241, ${0.12 + item.z * 0.15})`;
          for (let l = 0; l < item.lines; l++) {
            const lineWidth = (item.w - 30) * (l % 2 === 0 ? 0.8 : 0.5);
            ctx.fillRect(-item.w / 2 + 15, -item.h / 2 + 20 + l * 18, lineWidth, 4);
          }

          // Top right folded corner effect
          ctx.beginPath();
          ctx.moveTo(item.w / 2 - 14, -item.h / 2);
          ctx.lineTo(item.w / 2, -item.h / 2 + 14);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 + item.z * 0.1})`;
          ctx.stroke();

        } else if (item.type === 'key') {
          // Draw 3D Floating Keycap
          const kw = item.w * item.z;
          const kh = item.h * item.z;

          // Key Shadow & Glow
          ctx.shadowColor = item.label === 'AI' || item.label === 'Python' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(0, 0, 0, 0.5)';
          ctx.shadowBlur = 12 * item.z;
          ctx.shadowOffsetY = 6 * item.z;

          // 3D Key Base Bottom
          ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
          ctx.beginPath();
          ctx.roundRect(-kw / 2, -kh / 2 + 3, kw, kh, 6);
          ctx.fill();

          // Key Top Surface Gradient
          const keyGrad = ctx.createLinearGradient(0, -kh / 2, 0, kh / 2);
          if (item.label === 'AI' || item.label === 'Python' || item.label === 'Data') {
            keyGrad.addColorStop(0, `rgba(30, 41, 59, ${0.9 * item.z})`);
            keyGrad.addColorStop(1, `rgba(15, 23, 42, ${0.9 * item.z})`);
          } else {
            keyGrad.addColorStop(0, `rgba(24, 32, 48, ${0.75 * item.z})`);
            keyGrad.addColorStop(1, `rgba(11, 15, 23, ${0.85 * item.z})`);
          }

          ctx.fillStyle = keyGrad;
          ctx.strokeStyle = item.label === 'AI' || item.label === '9.1' 
            ? 'rgba(56, 189, 248, 0.4)' 
            : 'rgba(255, 255, 255, 0.12)';
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.roundRect(-kw / 2, -kh / 2, kw, kh - 2, 6);
          ctx.fill();
          ctx.stroke();

          // Key Text Label
          ctx.fillStyle = item.label === 'AI' || item.label === 'Python' 
            ? '#38bdf8' 
            : item.label === '9.1' 
            ? '#10b981' 
            : `rgba(226, 232, 240, ${0.7 + item.z * 0.3})`;
          ctx.font = `600 ${Math.max(10, Math.floor(13 * item.z))}px "JetBrains Mono", monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.label, 0, -1);

        } else if (item.type === 'math') {
          // Draw Math & Data Science Particles
          ctx.fillStyle = `rgba(148, 163, 184, ${0.15 + item.z * 0.2})`;
          ctx.font = `${Math.floor(item.size * item.z)}px "JetBrains Mono", monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(item.symbol, 0, 0);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};

export default FloatingCanvas;
