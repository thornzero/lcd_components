# LCD Components Design System

A simple and elegant vanilla HTML, CSS, and JavaScript component toolkit for building modern web interfaces.

## Overview

This design system provides a comprehensive set of styled HTML elements and components with consistent spacing, typography, and interaction patterns. Built with vanilla technologies for maximum compatibility and minimal dependencies.

## Features

- 🎨 **Complete UI Components** - All standard HTML elements styled consistently
- 📏 **Precise Spacing System** - 9-point spacing scale with visual indicators
- 🎯 **Responsive Design** - Mobile-first approach with flexible layouts
- ⚡ **Interactive Components** - Accordion, Modal, Form validation with vanilla JS
- 🔧 **CSS Custom Properties** - Easy theming and customization
- 📱 **Accessibility First** - Semantic HTML and keyboard navigation
- 🌙 **Dark Theme Support** - Built-in dark mode capability

## File Structure

```
lcd_components/
├── index.html      # Complete component showcase
├── styles.css      # All component styles and utilities
├── script.js       # Interactive functionality
└── README.md       # This documentation
```

## Design Tokens

### Spacing Scale
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-5`: 1.25rem (20px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-10`: 2.5rem (40px)
- `--space-12`: 3rem (48px)

### Typography Scale
- `--text-xs`: 0.75rem (12px)
- `--text-sm`: 0.875rem (14px)
- `--text-base`: 1rem (16px)
- `--text-lg`: 1.125rem (18px)
- `--text-xl`: 1.25rem (20px)
- `--text-2xl`: 1.5rem (24px)
- `--text-3xl`: 2rem (32px)
- `--text-4xl`: 2.5rem (40px)

### Color Palette
- **Primary**: `#3b82f6` (Blue)
- **Secondary**: `#6b7280` (Gray)
- **Success**: `#10b981` (Green)
- **Danger**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)
- **Info**: `#06b6d4` (Cyan)

## Component Categories

### 1. Typography
- Headings (H1-H6) with consistent sizing
- Paragraph text with optimal line height
- Text formatting (bold, italic, underline, etc.)
- Lists (ordered, unordered, definition)
- Blockquotes and citations
- Code blocks and inline code

### 2. Form Elements
- Text inputs (text, email, password, number, date)
- Select dropdowns
- Radio buttons and checkboxes
- Textareas
- Form validation and error states
- Consistent focus states and transitions

### 3. Buttons & Links
- Button variants (primary, secondary, outline, ghost, danger)
- Button sizes (small, medium, large)
- Disabled states
- Link styles (standard, subtle, bold)
- Hover and active states

### 4. Layout Components
- Card containers with headers and bodies
- Data tables with hover states
- CSS Grid system for responsive layouts
- Flexbox utilities

### 5. Media Elements
- Responsive images
- Rounded avatars
- Figure and caption elements

### 6. Interactive Components
- Accordion/Collapsible content
- Modal dialogs
- Progress bars and meters
- Notification system
- Form validation feedback

## Usage Examples

### Basic Button
```html
<button class="btn btn-primary">Click Me</button>
```

### Form Group
```html
<div class="form-group">
  <label for="email">Email Address</label>
  <input type="email" id="email" placeholder="your@email.com">
</div>
```

### Card Component
```html
<div class="card">
  <div class="card-header">
    <h4>Card Title</h4>
  </div>
  <div class="card-body">
    <p>Card content goes here</p>
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Accordion
```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      <span>Section Title</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>Content goes here</p>
    </div>
  </div>
</div>
```

## JavaScript Functionality

### Accordion
- Click to expand/collapse sections
- Automatic closing of other sections
- Icon rotation animation

### Modal
- Open/close functionality
- Click outside to close
- Escape key to close
- Body scroll prevention

### Form Validation
- Real-time validation feedback
- Error message display
- Email format validation
- Required field validation

### Notification System
- Success, error, warning, and info notifications
- Auto-dismiss after 5 seconds
- Manual close button

## Customization

### Using CSS Custom Properties
```css
:root {
  --primary: #your-color;
  --space-4: 1.2rem;
  --font-family: 'Your Font', sans-serif;
}
```

### Responsive Breakpoints
- Mobile-first design
- Single breakpoint at 768px
- Flexible grid system

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with minimal polyfills)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **CSS**: ~15KB minified
- **JavaScript**: ~8KB minified
- **Total**: ~23KB for complete design system
- Zero external dependencies
- Optimized for fast loading

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Form labels and associations
- Keyboard navigation support
- Focus indicators
- ARIA attributes where needed
- Color contrast compliance

## Getting Started

1. Download or clone the repository
2. Open `index.html` in your browser
3. Copy the HTML structure and CSS/JS files to your project
4. Customize the CSS variables to match your brand
5. Build your interface using the component examples

## Best Practices

- Use semantic HTML elements
- Follow the spacing scale for consistency
- Test with keyboard navigation
- Validate forms before submission
- Use appropriate heading hierarchy
- Keep color contrast ratios above 4.5:1

## Contributing

This is a reference implementation. Feel free to:
- Modify for your needs
- Add new components
- Improve accessibility
- Optimize performance
- Submit improvements

## License

This design system is provided as-is for educational and reference purposes. Feel free to use and modify as needed for your projects. 