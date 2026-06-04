import re

css_path = 'css/style.css'

with open(css_path, 'r') as f:
    content = f.read()

# 1. Remove LAYOUT WRAPPERS block
content = re.sub(r'/\* =+ *\n *LAYOUT WRAPPERS *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# 2. Remove HERO SECTION block
content = re.sub(r'/\* =+ *\n *HERO SECTION *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# 3. Remove COURSE CATALOG block
content = re.sub(r'/\* =+ *\n *COURSE CATALOG *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# 4. Remove FEATURES block
content = re.sub(r'/\* =+ *\n *FEATURES *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# 5. Remove SCHEDULE block
content = re.sub(r'/\* =+ *\n *SCHEDULE *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# 6. Remove TESTIMONIALS block
content = re.sub(r'/\* =+ *\n *TESTIMONIALS *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# 7. Remove FAQ block
content = re.sub(r'/\* =+ *\n *FAQ *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# 8. Remove FOOTER block
content = re.sub(r'/\* =+ *\n *FOOTER *\n *=+ \*/\n.*?(?=\n/\* =+)', '', content, flags=re.DOTALL)

# Insert new typography and component overrides before STATE CLASSES
custom_css = """
/* ============================================================
   TYPOGRAPHY & COMPONENT OVERRIDES (Bootstrap 5)
   ============================================================ */
.font-display { font-family: var(--font-display) !important; }
.font-heading { font-family: var(--font-heading) !important; }
.font-body { font-family: var(--font-body) !important; }
.tracking-wider { letter-spacing: 0.1em; }
.transition-smooth { transition: all var(--transition-smooth) !important; }

.course-card-hover { position: relative; overflow: hidden; }
.course-card-hover::before {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px;
  background: var(--color-primary); transform: scaleX(0); transform-origin: left; transition: transform var(--transition-smooth);
}
.course-card-hover:hover { transform: translateY(-5px); border-color: #555 !important; }
.course-card-hover:hover::before { transform: scaleX(1); }

.slider-btn:hover { color: var(--color-primary) !important; }

/* Keep Bootstrap Accordion transparent */
.accordion-item { background: transparent !important; }

"""

content = content.replace('/* ============================================================\n   STATE CLASSES', custom_css + '/* ============================================================\n   STATE CLASSES')

# Also fix the responsive mobile nav links to be full screen
mobile_nav_css = """
  #main-nav.is-open .nav-links {
    display: flex !important;
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100vh;
    background: #111;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
"""
content = content.replace('.nav-links {\n    display: none;\n    position: fixed;\n    top: 0; left: 0; width: 100%; height: 100vh;\n    background: #111;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    z-index: 100;\n  }', mobile_nav_css)

with open(css_path, 'w') as f:
    f.write(content)

print("CSS refactored successfully.")
