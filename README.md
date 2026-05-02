# the philadelphia inquirer -- homepage replication
this project is a functional and responsive replication of the "The Philadelphia Inquirer" newspaper homepage (https://www.inquirer.com/)
the task was developed as part of a web development assignment focused on layout precision, responsiveness, and accessibility

## project goal
  the goal was to reproduce the homepage layout and core functionalities using modern web technologies, ensuring the output is:
    - responsive: seamlessly adapting to mobile, tablet, and desktop screens
    - semantic: built with proper HTML5 elements for SEO and structure
    - accessible: optimized to meet web accessibility standards

## technologies used
  html5: semantic structure
  css3 / Bootstrap 5: layout management (flexbox & grid), custom styling, and responsive breakpoints
  javascript: custom logic for interactive elements like the sticky navigation, search dropdowns, and mega menus

## features
  double navigation system: includes a primary navbar and a secondary "sticky" navbar that appears on scroll
  interactive dropdowns: custom-built menu and search bars for both desktop and mobile views
  responsive layout: Implemented using a combination of Bootstrap's grid system and custom CSS Flexbox for complex alignments
  visual feedback: active states for navigation icons with custom CSS pseudo-elements (the blue indicator triangles)

## accessibility & quality
  WAVE Evaluated... the markup has been audited using the WAVE (Web Accessibility Evaluation Tool) to ensure proper contrast, aria-labels, and semantic hierarchy

## note
  original web site was build in Tailwind, the replication was made as close as possible through Bootstrap (converting almost all the original attributes)

## getting started
  to run this project locally:
    1. clone the repo: git clone https://github.com/virginiapaolini/philly-ppm.git
    2. open index.html in your preferred browser
