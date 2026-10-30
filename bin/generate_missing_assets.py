import os
import subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter

pangat_dir = os.path.join(os.getcwd(), "pangat", "photos", "pangat", "dishes")
daksh_dir = os.path.join(os.getcwd(), "daksh", "photos", "154-portfolio", "reels")

os.makedirs(pangat_dir, exist_ok=True)
os.makedirs(daksh_dir, exist_ok=True)

try:
    font_title = ImageFont.truetype("segoeui.ttf", 36)
    font_cat = ImageFont.truetype("segoeuib.ttf", 18)
    font_badge = ImageFont.truetype("segoeui.ttf", 16)
    font_sub = ImageFont.truetype("segoeui.ttf", 22)
    font_daksh_title = ImageFont.truetype("segoeuib.ttf", 52)
    font_daksh_sub = ImageFont.truetype("segoeui.ttf", 26)
    font_daksh_badge = ImageFont.truetype("segoeuib.ttf", 20)
except Exception:
    font_title = font_cat = font_badge = font_sub = font_daksh_title = font_daksh_sub = font_daksh_badge = ImageFont.load_default()

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

dishes = [
    ("burrata", "Burrata & Heirloom Tomato", "STARTERS", "#C0392B", "#27AE60"),
    ("arancini", "Saffron Arancini", "STARTERS", "#D4AC0D", "#7D6608"),
    ("carpaccio", "Beef Carpaccio", "STARTERS", "#922B21", "#641E16"),
    ("bruschetta", "Tomato Bruschetta", "STARTERS", "#E74C3C", "#A93226"),
    ("cacio-e-pepe", "Cacio e Pepe", "PASTA", "#F1C40F", "#B7950B"),
    ("ragu", "Tagliatelle al Ragù", "PASTA", "#BA4A00", "#6E2C00"),
    ("vongole", "Spaghetti alle Vongole", "PASTA", "#BDC3C7", "#7F8C8D"),
    ("ravioli", "Pumpkin Ravioli", "PASTA", "#E67E22", "#A04000"),
    ("risotto", "Porcini Risotto", "MAINS", "#A0522D", "#5C2C16"),
    ("margherita", "Pizza Margherita", "PIZZA", "#E74C3C", "#27AE60"),
    ("diavola", "Pizza Diavola", "PIZZA", "#D35400", "#900C3F"),
    ("branzino", "Grilled Branzino", "MAINS", "#16A085", "#0E6251"),
    ("bistecca", "Bistecca, 400g", "MAINS", "#78281F", "#4A120E"),
    ("milanese", "Chicken Milanese", "MAINS", "#D4AC0D", "#B7950B"),
    ("tiramisu", "Tiramisù", "DESSERTS", "#5D4037", "#3E2723"),
    ("panna-cotta", "Vanilla Panna Cotta", "DESSERTS", "#F8BBD0", "#C2185B"),
    ("affogato", "Affogato", "DESSERTS", "#4E342E", "#271714"),
    ("spritz", "Aperol Spritz", "DRINKS", "#FF5722", "#E64A19"),
    ("negroni", "Negroni", "DRINKS", "#C2185B", "#880E4F"),
    ("red-wine", "Montepulciano d'Abruzzo", "DRINKS", "#4A148C", "#311B92")
]

print("Generating Pangat dishes...")
for slug, name, category, c1_hex, c2_hex in dishes:
    c1 = hex_to_rgb(c1_hex)
    c2 = hex_to_rgb(c2_hex)
    
    img = Image.new("RGB", (720, 720), (20, 20, 24))
    draw = ImageDraw.Draw(img)
    
    # Ambient radial gradient
    cx, cy = 360, 310
    for r in range(320, 0, -4):
        alpha = (320 - r) / 320.0
        r_col = int(20 + c1[0] * 0.35 * alpha)
        g_col = int(20 + c1[1] * 0.35 * alpha)
        b_col = int(24 + c1[2] * 0.35 * alpha)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(r_col, g_col, b_col))
    
    # Plate rim outer
    plate_r = 210
    draw.ellipse([cx - plate_r - 4, cy - plate_r - 4, cx + plate_r + 4, cy + plate_r + 4], fill=(12, 12, 15))
    draw.ellipse([cx - plate_r, cy - plate_r, cx + plate_r, cy + plate_r], fill=(35, 35, 42), outline=(80, 80, 95), width=2)
    
    # Plate inner bowl
    inner_r = 175
    draw.ellipse([cx - inner_r, cy - inner_r, cx + inner_r, cy + inner_r], fill=(26, 26, 32))
    
    # Dish center culinary accent
    dish_core_r = 120
    draw.ellipse([cx - dish_core_r, cy - dish_core_r, cx + dish_core_r, cy + dish_core_r], fill=c1, outline=c2, width=4)
    draw.ellipse([cx - 45, cy - 45, cx + 45, cy + 45], fill=c2)
    
    # Subtle ceramic gloss
    draw.arc([cx - plate_r + 15, cy - plate_r + 15, cx + plate_r - 15, cy + plate_r - 15], start=210, end=330, fill=(200, 200, 220), width=3)
    
    # Top watermark
    draw.text((cx, 55), "PANGAT · CUCINA ARTIGIANALE", fill=(160, 160, 180), font=font_badge, anchor="mm")
    
    # Category pill
    cat_bbox = draw.textbbox((0, 0), category, font=font_cat)
    cat_w = cat_bbox[2] - cat_bbox[0] + 28
    draw.rounded_rectangle([cx - cat_w//2, 545, cx + cat_w//2, 575], radius=15, fill=(45, 45, 55), outline=(100, 100, 120), width=1)
    draw.text((cx, 560), category, fill=(240, 240, 250), font=font_cat, anchor="mm")
    
    # Dish Name
    draw.text((cx, 615), name, fill=(255, 255, 255), font=font_title, anchor="mm")
    draw.text((cx, 660), "Authentic Handcrafted Recipe", fill=(140, 140, 160), font=font_sub, anchor="mm")
    
    # Save 720x720
    full_path = os.path.join(pangat_dir, f"{slug}.jpg")
    img.save(full_path, "JPEG", quality=92)
    
    # Save thumbnail 240x240
    thumb = img.resize((240, 240), Image.Resampling.LANCZOS)
    sm_path = os.path.join(pangat_dir, f"{slug}-sm.jpg")
    thumb.save(sm_path, "JPEG", quality=90)

print(f"Generated {len(dishes)} dish image pairs in {pangat_dir}")

# Daksh Reels
reels = [
    ("meniscus", "Meniscus", "Liquid Bottom Navigation", "#38BDF8"),
    ("lucid", "Lucid", "Liquid Glass Segmented Bar", "#A855F7"),
    ("sigil", "Sigil", "Sealing Code Field", "#F59E0B"),
    ("quarto", "Quarto", "Folding Boxes Matrix", "#EC4899"),
    ("parachute", "Parachute", "Animated Download Button", "#10B981"),
    ("quench", "Quench", "Fluid Submit Button", "#6366F1")
]

print("Generating Daksh component reels & posters...")
for slug, name, desc, accent_hex in reels:
    accent = hex_to_rgb(accent_hex)
    w, h = 450, 800
    poster = Image.new("RGB", (w, h), (10, 10, 14))
    draw = ImageDraw.Draw(poster)
    
    # Background subtle glow
    cx, cy = w // 2, 360
    for r in range(240, 0, -4):
        a = (240 - r) / 240.0
        r_c = int(10 + accent[0] * 0.25 * a)
        g_c = int(10 + accent[1] * 0.25 * a)
        b_c = int(14 + accent[2] * 0.25 * a)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(r_c, g_c, b_c))
        
    # Mockup phone card
    card_box = [45, 120, w - 45, h - 180]
    draw.rounded_rectangle(card_box, radius=24, fill=(18, 18, 24), outline=(50, 50, 65), width=2)
    
    # Internal component preview wireframe
    draw.rounded_rectangle([75, 160, w - 75, 230], radius=14, fill=(28, 28, 38), outline=accent, width=2)
    draw.text((w // 2, 195), "DAKSH UI COMPONENT", fill=accent, font=font_daksh_badge, anchor="mm")
    
    # Center interactive simulation visual
    draw.ellipse([cx - 70, cy - 70, cx + 70, cy + 70], outline=accent, width=4)
    draw.ellipse([cx - 40, cy - 40, cx + 40, cy + 40], fill=accent)
    
    # Slider bar mockup
    draw.rounded_rectangle([80, 480, w - 80, 492], radius=6, fill=(35, 35, 48))
    draw.rounded_rectangle([80, 480, 220, 492], radius=6, fill=accent)
    
    # Bottom labels
    draw.text((w // 2, h - 130), name, fill=(255, 255, 255), font=font_daksh_title, anchor="mm")
    draw.text((w // 2, h - 75), desc, fill=(150, 150, 170), font=font_daksh_sub, anchor="mm")
    
    poster_path = os.path.join(daksh_dir, f"{slug}.jpg")
    poster.save(poster_path, "JPEG", quality=92)
    
    # Generate 2-second looping MP4 with ffmpeg
    mp4_path = os.path.join(daksh_dir, f"{slug}.mp4")
    cmd = [
        "ffmpeg", "-y", "-loop", "1", "-i", poster_path,
        "-c:v", "libx264", "-t", "2", "-pix_fmt", "yuv420p",
        "-vf", "scale=450:800", "-r", "30", mp4_path
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

print(f"Generated {len(reels)} posters and MP4s in {daksh_dir}")
print("All missing assets created successfully!")

