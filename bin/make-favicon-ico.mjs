import fs from 'fs';

// A simple 32x32 ICO file with an uncompressed 32x32 32-bit RGBA BMP
const width = 32;
const height = 32;
const bpp = 32;
const imageSize = width * height * 4;
const headerSize = 40; // BITMAPINFOHEADER
const maskSize = Math.ceil((width * height) / 8);
const totalDataSize = headerSize + imageSize + maskSize;

// ICO header (6 bytes)
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // Reserved
icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
icoHeader.writeUInt16LE(1, 4); // 1 image

// ICO Directory Entry (16 bytes)
const icoEntry = Buffer.alloc(16);
icoEntry.writeUInt8(width, 0);       // Width
icoEntry.writeUInt8(height, 1);      // Height
icoEntry.writeUInt8(0, 2);           // Color count
icoEntry.writeUInt8(0, 3);           // Reserved
icoEntry.writeUInt16LE(1, 4);        // Color planes
icoEntry.writeUInt16LE(bpp, 6);      // Bits per pixel
icoEntry.writeUInt32LE(totalDataSize, 8); // Size of image data
icoEntry.writeUInt32LE(6 + 16, 12);  // Offset of image data (22)

// BITMAPINFOHEADER (40 bytes)
const bmih = Buffer.alloc(40);
bmih.writeUInt32LE(40, 0);          // biSize
bmih.writeInt32LE(width, 4);        // biWidth
bmih.writeInt32LE(height * 2, 8);   // biHeight (doubled for ICO mask)
bmih.writeUInt16LE(1, 12);          // biPlanes
bmih.writeUInt16LE(bpp, 14);        // biBitCount
bmih.writeUInt32LE(0, 16);          // biCompression = BI_RGB
bmih.writeUInt32LE(imageSize, 20);  // biSizeImage
bmih.writeInt32LE(0, 24);           // biXPelsPerMeter
bmih.writeInt32LE(0, 28);           // biYPelsPerMeter
bmih.writeUInt32LE(0, 32);          // biClrUsed
bmih.writeUInt32LE(0, 36);          // biClrImportant

// Pixel data: Deep Indigo / Violet background (#0F172A) with an elegant geometric glyph
const pixelData = Buffer.alloc(imageSize);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    // Check if inside rounded square
    const dx = Math.min(x, width - 1 - x);
    const dy = Math.min(y, height - 1 - y);
    const isCorner = dx < 3 && dy < 3 && (dx - 3) * (dx - 3) + (dy - 3) * (dy - 3) > 9;

    if (isCorner) {
      // transparent
      pixelData[idx] = 0;
      pixelData[idx + 1] = 0;
      pixelData[idx + 2] = 0;
      pixelData[idx + 3] = 0;
    } else {
      // #3B82F6 (Blue 500) to #6366F1 (Indigo 500) gradient
      const factor = (x + y) / (width + height);
      const r = Math.round(59 + factor * (99 - 59));
      const g = Math.round(130 + factor * (102 - 130));
      const b = Math.round(246 + factor * (241 - 246));
      
      // Blue channel first (BGRA format)
      pixelData[idx] = b;
      pixelData[idx + 1] = g;
      pixelData[idx + 2] = r;
      pixelData[idx + 3] = 255; // Alpha
    }
  }
}

// 1-bit transparency mask
const mask = Buffer.alloc(maskSize, 0);

const finalIco = Buffer.concat([icoHeader, icoEntry, bmih, pixelData, mask]);

fs.writeFileSync('favicon.ico', finalIco);
console.log('Created root favicon.ico successfully (' + finalIco.length + ' bytes)');

// Also place in suites that request relative favicon.ico
const suites = ['solum', 'vessa', 'tavola', 'strada', 'camber', 'nero', 'tend', 'vanta', 'kvist', 'cadra', 'gesso', 'ivora', 'kinby', 'ledge', 'mender', 'murmura', 'noria', 'portfolio', 'stride', 'corbel'];
for (const s of suites) {
  if (fs.existsSync(s)) {
    fs.writeFileSync(`${s}/favicon.ico`, finalIco);
    if (!fs.existsSync(`${s}/favicon.svg`)) {
      fs.copyFileSync('favicon.svg', `${s}/favicon.svg`);
    }
    if (!fs.existsSync(`${s}/apple-touch-icon.png`)) {
      fs.copyFileSync('apple-touch-icon.png', `${s}/apple-touch-icon.png`);
    }
  }
}
console.log('Synced icons across all suites!');
