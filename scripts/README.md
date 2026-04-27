# Image Generation Scripts

This directory contains scripts to generate Open Graph and social media preview images for your portfolio.

## 🖼️ Generated Images

The script generates three types of images:

1. **og-image.png** (1200x630) - Main Open Graph image for homepage
2. **og-404.png** (1200x630) - Open Graph image for 404 page  
3. **twitter-card.png** (1200x600) - Twitter/X card image

## 🚀 Usage

### Manual Generation
```bash
# Generate all images
npm run generate-images

# Or run directly
node scripts/generate-og-images.js
```

### Automatic Generation
Images are automatically generated before each build:
```bash
npm run build  # This will run generate-images first
```

## 🎨 Design System

All generated images follow your portfolio's design system:

- **Background**: `#111111` (black)
- **Primary Text**: `#EAEAEA` (light gray)
- **Accent Color**: `#B89A4A` (gold)
- **Secondary Text**: `#A0A0A0` (medium gray)
- **Font**: Inter/system fonts
- **Typography**: Matches your portfolio's hierarchy

## 📋 Features

- **Consistent Branding**: Matches your portfolio design exactly
- **SEO Optimized**: Proper dimensions for all social platforms
- **Automated**: Runs before builds to ensure images are always up-to-date
- **Responsive Text**: Uses clamp() for scalable typography
- **Visual Elements**: Subtle patterns and accents for visual interest

## 🔧 Customization

To customize the images, edit `generate-og-images.js`:

1. **Change text content**: Update the HTML templates in each function
2. **Modify styling**: Edit the CSS within each HTML template
3. **Add new images**: Create new functions following the existing pattern
4. **Update dimensions**: Change viewport and clip settings

## 📱 Social Media Specs

The generated images meet the requirements for:

- **Facebook**: 1200x630 (og-image.png)
- **Twitter/X**: 1200x600 (twitter-card.png)  
- **LinkedIn**: 1200x630 (og-image.png)
- **Discord**: 1200x630 (og-image.png)
- **Slack**: 1200x630 (og-image.png)

## 🛠️ Dependencies

The script automatically installs `puppeteer` if not present. No manual installation required.

## 📂 Output Location

All images are saved to the `public/` directory:
```
public/
├── og-image.png      # Main homepage image
├── og-404.png        # 404 page image
└── twitter-card.png  # Twitter card image
```

## 🔍 Verification

After generation, you can test your images with:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## 💡 Tips

1. **Run after content changes**: Regenerate images when you update your bio or description
2. **Check file sizes**: Images should be under 1MB for optimal loading
3. **Test on mobile**: Preview how images look on different devices
4. **Update regularly**: Keep images fresh with your latest projects

## 🐛 Troubleshooting

**Puppeteer installation issues?**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Images not updating?**
```bash
# Clear Next.js cache
rm -rf .next
npm run generate-images
npm run build
```

**Permission errors?**
```bash
# Make script executable (Unix/Mac)
chmod +x scripts/generate-og-images.js
```