# ANGI — Features

## Completed Features

### Layout & Navigation
- [x] Sticky header with backdrop blur, centered ANGI logo
- [x] Desktop: Shop dropdown, About link (left), Contact + icons (right)
- [x] Mobile: Hamburger menu with full-screen overlay
- [x] Announcement bar ("Free Shipping on Orders Above ₹1,999")
- [x] Footer with shop links, company links, newsletter signup, social icons (Instagram, X)
- [x] Responsive design — mobile (2-col), tablet (3-col), desktop (4-col)

### Homepage
- [x] Full-screen hero with product image background and ANGI branding
- [x] Whitespace separation between hero and content sections
- [x] Edge-to-edge collection cards (Tamil T-Shirts, Identity T-Shirts, Hoodies, Polo T-Shirts, Keychains)
- [x] Category-sectioned product grids with headings and "View All" links
- [x] Brand story section (dark background)
- [x] Newsletter signup section

### Collections Page (`/collections/[category]`)
- [x] Category tabs navigation (All, Tamil T-Shirts, Identity T-Shirts, Hoodies, Polo T-Shirts, Keychains)
- [x] Sort dropdown (Newest, Price Low-High, Price High-Low)
- [x] Filter panel (size, price range)
- [x] Edge-to-edge 4-column product grid with 1px gaps
- [x] Product count display

### Product Card
- [x] 3:4 aspect ratio product images
- [x] Hover zoom effect (1.03x scale, 700ms ease-out)
- [x] Quick-add button on hover (+ icon)
- [x] Product name (font-medium, 11px), price, color info
- [x] Sale badge with strikethrough compare price
- [x] Category badges (Best Seller, New, Limited)

### Product Detail Page (`/product/[slug]`)
- [x] Full-bleed product image (left), sticky product info (right)
- [x] Breadcrumb navigation
- [x] Color selector with active state
- [x] Size selector with size guide link
- [x] Quantity picker (+/-)
- [x] "Add to Bag" button
- [x] Shipping info line
- [x] Accordion: Product Details, Shipping & Returns
- [x] "You May Also Like" related products grid

### Cart
- [x] Cart drawer (slide-in from right) on add-to-cart
- [x] Cart page with item list, quantity controls, remove button
- [x] Order summary with subtotal, shipping calculation, total
- [x] Free shipping threshold logic (₹1,999)
- [x] Empty cart state with CTA
- [x] Cart context (React Context API) for state management

### About Page
- [x] Full-bleed hero with "Our Story" heading
- [x] Brand story content from brandfolio
- [x] Values section (Authenticity, Identity, Culture)
- [x] Identity sub-brand section
- [x] Craftsmanship details (cotton GSM, print techniques, finishes)

### Contact Page
- [x] Contact form (name, email, subject dropdown, message)
- [x] Contact info (email, phone, location)
- [x] Business hours
- [x] Social links

### Account Page
- [x] Sign in form (email, password)
- [x] Forgot password link
- [x] Create account button

## Planned Features (Zoho Commerce Integration)

- [ ] Real product data from Zoho Commerce API
- [ ] Persistent cart (server-side)
- [ ] Checkout flow with payment processing
- [ ] User authentication & accounts
- [ ] Order tracking
- [ ] Inventory management
- [ ] Search functionality
- [ ] Wishlist
- [ ] Product reviews
- [ ] Size guide modal
- [ ] Multiple product images per product
- [ ] SEO metadata per page
- [ ] Analytics integration

## Design System

| Element | Spec |
|---|---|
| Logo font | font-extralight, tracking-[0.5em] |
| Section headings | 12px, tracking-[0.2em], uppercase, font-light |
| Product name | 11px, font-medium |
| Price | 11px, font-medium |
| Labels | 9-10px, tracking-[0.15-0.2em], uppercase, text-[#bbb] |
| Body text | 11-13px, text-[#888], font-light |
| Primary color | #111111 |
| Muted text | #999999 |
| Light text | #bbbbbb / #cccccc |
| Borders | #f0f0f0 |
| Background | #ffffff |
| Product image bg | #f7f7f7 |
| Grid gaps | 1px with #f0f0f0 background |
| Transitions | 300-700ms, ease-out |
| Icon strokeWidth | 1.5 |
