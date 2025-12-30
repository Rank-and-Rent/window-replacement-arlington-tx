# Image Gathering for Window Services
**Date:** 2025-12-26
**Project:** Window Replacement Arlington TX

## Required Images

All images must be:
- From Bing Images ONLY
- High quality (minimum 1280px width)
- NO watermarks
- NO stock photo watermarks
- Landscape or square orientation (width >= height)
- NO text overlays or branding
- Clean, professional photographs

---

## Window Type Image Searches

### 1. Double-Hung Windows
**Target filename:** `double-hung-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=double+hung+windows+exterior&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "double hung window installation residential"
- "double hung vinyl windows house exterior"
- "double hung replacement windows home"

**Quality criteria:**
- Clear view of double-hung window with both sashes visible
- Residential home exterior shot preferred
- No company logos or watermarks
- Professional quality photo

---

### 2. Single-Hung Windows
**Target filename:** `single-hung-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=single+hung+windows+exterior+home&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "single hung vinyl windows residential"
- "single hung replacement windows exterior"
- "single hung window installation house"

**Quality criteria:**
- Clear view of single-hung window on home exterior
- Should show typical residential application
- No watermarks or text overlays

---

### 3. Casement Windows
**Target filename:** `casement-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=casement+windows+exterior+residential&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "casement window open exterior view"
- "casement vinyl windows home"
- "casement replacement windows house exterior"

**Quality criteria:**
- Show casement window with crank mechanism visible or open position
- Residential exterior context
- High quality, no watermarks

---

### 4. Awning Windows
**Target filename:** `awning-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=awning+windows+exterior+home&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "awning window open exterior residential"
- "awning style windows house"
- "awning replacement windows exterior"

**Quality criteria:**
- Show awning window in open position (hinged at top)
- Residential application
- Clean, professional photo

---

### 5. Sliding Windows
**Target filename:** `sliding-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=sliding+windows+exterior+residential&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "horizontal sliding windows house exterior"
- "slider windows residential home"
- "sliding vinyl windows modern home"

**Quality criteria:**
- Clear view of horizontal sliding window
- Modern residential setting preferred
- No watermarks

---

### 6. Picture Windows
**Target filename:** `picture-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=picture+windows+large+exterior+home&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "picture window residential exterior"
- "large fixed picture windows house"
- "picture window installation home exterior"

**Quality criteria:**
- Large fixed window, non-operable
- Residential home exterior
- Shows maximum light/view benefits

---

### 7. Bay & Bow Windows
**Target filename:** `bay-bow-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=bay+window+exterior+residential+home&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "bay window house exterior"
- "bow window residential home"
- "bay window projecting exterior architecture"

**Quality criteria:**
- Clear view of bay or bow window projection from exterior
- Residential setting
- Shows architectural elegance

---

### 8. Special Shape Windows
**Target filename:** `special-shape-windows.jpg`
**Bing Search URL:** https://www.bing.com/images/search?q=specialty+shaped+windows+custom+home&qft=+filterui:imagesize-large&FORM=IRFLTR
**Alternative queries:**
- "arched windows residential exterior"
- "geometric custom windows house"
- "circular round windows home exterior"
- "specialty architectural windows"

**Quality criteria:**
- Unique geometric shape (arch, circle, triangle, octagon)
- Residential architectural context
- Custom/specialty appeal visible

---

## Download Instructions

### Manual Download Process:
1. Click each Bing search URL above
2. Browse results, avoiding:
   - Wikimedia Commons
   - Stock photo watermarks
   - Commercial real estate site watermarks (LoopNet, Zillow, etc.)
   - Images with date stamps or text overlays
   - Portrait-oriented images
3. Right-click image → "Save image as..."
4. Save to: `/Users/kategreenberg/Desktop/brandon/window/window-replacement-arlington-tx/public/windows/`
5. Use the exact target filename listed above

### Verification Checklist for Each Image:
- [ ] Image is from Bing Images
- [ ] No watermarks visible
- [ ] High quality (sharp, clear, minimum 1280px wide)
- [ ] Landscape or square orientation
- [ ] No text overlays or branding
- [ ] Appropriate to the window type
- [ ] File saved with correct name

---

## Implementation Notes

Once all images are downloaded:
1. Update `src/components/windows-section.tsx` to use local images instead of Unsplash URLs
2. Replace the `image` field for each window type with `/windows/{filename}`
3. Verify all images load correctly in the browser
4. Check responsive behavior on mobile devices

Example update:
```typescript
// Before:
image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600',

// After:
image: '/windows/double-hung-windows.jpg',
```

---

## Status Tracking

- [ ] Double-Hung Windows - `double-hung-windows.jpg`
- [ ] Single-Hung Windows - `single-hung-windows.jpg`
- [ ] Casement Windows - `casement-windows.jpg`
- [ ] Awning Windows - `awning-windows.jpg`
- [ ] Sliding Windows - `sliding-windows.jpg`
- [ ] Picture Windows - `picture-windows.jpg`
- [ ] Bay & Bow Windows - `bay-bow-windows.jpg`
- [ ] Special Shape Windows - `special-shape-windows.jpg`


