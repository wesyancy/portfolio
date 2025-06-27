import React, { useState, useRef, useEffect } from 'react';
import './backgrounder.css';

const Backgrounder = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [bgColor, setBgColor] = useState<string>('#000000');
    const [bgWidth, setBgWidth] = useState<number>(1800);
    const [bgHeight, setBgHeight] = useState<number>(1169);

    // Store original image size/aspect ratio
    const [imgNaturalWidth, setImgNaturalWidth] = useState<number | null>(null);
    const [imgNaturalHeight, setImgNaturalHeight] = useState<number | null>(
        null
    );
    const [imgWidth, setImgWidth] = useState<number>(800);
    const [imgHeight, setImgHeight] = useState<number>(600);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    // Draw background and image on canvas when relevant state changes
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            ctx.clearRect(0, 0, bgWidth, bgHeight);

            // Draw background
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, bgWidth, bgHeight);

            if (imageSrc) {
                const img = imgRef.current;
                if (img && img.complete) {
                    ctx.drawImage(
                        img,
                        (bgWidth - imgWidth) / 2,
                        (bgHeight - imgHeight) / 2,
                        imgWidth,
                        imgHeight
                    );
                }
            }
        }
    }, [imageSrc, bgColor, bgWidth, bgHeight, imgWidth, imgHeight]);

    // Handle image load: get its natural size & initialize
    const handleImgLoad = () => {
        const img = imgRef.current;
        if (img) {
            setImgNaturalWidth(img.naturalWidth);
            setImgNaturalHeight(img.naturalHeight);

            // Initialize the edit controls with natural size, if desired:
            setImgWidth(
                img.naturalWidth < bgWidth ? img.naturalWidth : bgWidth
            );
            setImgHeight(
                img.naturalHeight < bgHeight ? img.naturalHeight : bgHeight
            );
        }
    };

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (ev: ProgressEvent<FileReader>) {
                setImageSrc(ev.target?.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // Whenever one dimension changes, recalculate the other, maintaining aspect ratio
    const handleImgWidthChange = (val: number) => {
        if (imgNaturalWidth && imgNaturalHeight) {
            const aspect = imgNaturalHeight / imgNaturalWidth;
            setImgWidth(val);
            setImgHeight(Math.round(val * aspect));
        }
    };
    const handleImgHeightChange = (val: number) => {
        if (imgNaturalWidth && imgNaturalHeight) {
            const aspect = imgNaturalWidth / imgNaturalHeight;
            setImgHeight(val);
            setImgWidth(Math.round(val * aspect));
        }
    };

    // Download the Canvas Image
    const handleDownload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'composed-image.png';
        link.href = url;
        link.click();
    };

    return (
        <div className="backgrounder-master-div">
            <label>
                Upload image:
                <input
                    className="photo-upload"
                    type="file"
                    accept="image/jpeg, image/jpg, image/png"
                    onChange={handleFileChange}
                />
            </label>
            <div>
                <label>
                    Choose a background color:
                    <input
                        type="color"
                        className="input"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Background Width:
                    <input
                        type="number"
                        className="input"
                        value={bgWidth}
                        min={imgWidth}
                        onChange={(e) => setBgWidth(Number(e.target.value))}
                    />
                </label>
                <label>
                    Background Height:
                    <input
                        type="number"
                        className="input"
                        value={bgHeight}
                        min={imgHeight}
                        onChange={(e) => setBgHeight(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Image Width:
                    <input
                        type="number"
                        className="input"
                        value={imgWidth}
                        min={1}
                        max={bgWidth}
                        onChange={(e) =>
                            handleImgWidthChange(Number(e.target.value))
                        }
                        disabled={!imageSrc}
                    />
                </label>
                <label>
                    Image Height:
                    <input
                        type="number"
                        className="input"
                        value={imgHeight}
                        min={1}
                        max={bgHeight}
                        onChange={(e) =>
                            handleImgHeightChange(Number(e.target.value))
                        }
                        disabled={!imageSrc}
                    />
                </label>
                <button
                    onClick={() => {
                        if (imgNaturalWidth && imgNaturalHeight) {
                            const targetHeight = Math.round(bgHeight * 0.8);
                            const newWidth = Math.round(targetHeight * (imgNaturalWidth / imgNaturalHeight));
                            setImgHeight(targetHeight);
                            setImgWidth(newWidth);
                        }
                    }}
                    disabled={!imageSrc}
                    style={{ marginLeft: 8 }}
                >
                    Fit Image
                </button>
            </div>
            <div>
                <canvas
                    ref={canvasRef}
                    width={bgWidth}
                    height={bgHeight}
                    style={{
                        border: '1px solid #aaa',
                        maxWidth: '75svw',
                        maxHeight: '70svh',
                        display: 'block',
                        margin: '16px 0',
                    }}></canvas>
                {/* Hidden image as offscreen resource */}
                {imageSrc && (
                    <img
                        ref={imgRef}
                        src={imageSrc}
                        alt="uploaded"
                        style={{ display: 'none' }}
                        onLoad={handleImgLoad}
                    />
                )}
            </div>
            <button onClick={handleDownload} disabled={!imageSrc}>
                Download Image
            </button>
            <button
                onClick={() => {
                    setImageSrc(null);
                    setImgNaturalWidth(null);
                    setImgNaturalHeight(null);
                    setImgWidth(800);
                    setImgHeight(600);
                }}
                disabled={!imageSrc}
                style={{ marginLeft: 8 }}>
                Clear Image
            </button>
        </div>
    );
};

export default Backgrounder;
