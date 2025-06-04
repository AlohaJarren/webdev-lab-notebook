## Reflection Document

### Reflection – 01-HTML Section

#### Were you able to complete the exercises on your own or did you use the videos or the solutions for help?

I was able to complete the exercises independently using the lecture slides, DevTools, and some light experimentation. Re-creating the layouts based on the snapshot helped reinforce the structure of valid HTML and how different elements behave in the browser.

#### How helpful did you find the exercises in this section? Was there one exercise that was particularly helpful?

These exercises were very helpful for building confidence with basic HTML syntax. The form exercise was especially useful — not only did it pull together a variety of input types, but it also made me think more carefully about accessibility and logical grouping using `<fieldset>` and `<label>` elements.

#### Was there something that you wish had been explained better?

It would’ve been helpful to have a bit more guidance on when to use `<section>` vs `<div>` in layout-based HTML, and maybe a deeper explanation of accessibility attributes like `aria-*` even at this early stage. But overall, the material was clear and straightforward.

#### Were there other exercises that might have helped you learn this week’s topic a little better?

An additional exercise involving anchor navigation — like linking sections within a page or between pages — could have tied everything together nicely. It would’ve offered some practice in thinking about flow and document navigation. That said, the four exercises we had were a great introduction to structural HTML.

### Reflection – 02-a11y Section

#### Were you able to complete the exercises on your own or did you use the videos or the solutions for help?

Yes, I was able to complete the accessibility improvements on my own by running a WAVE audit and cross-checking with the accessibility principles we went over in class. I relied on the structure from the HTML form we built earlier, but this time with much more intentional labeling and grouping.

#### How helpful did you find the exercises in this section? Was there one exercise that was particularly helpful?

Even though there was only one exercise, it was extremely helpful. It gave me a chance to revisit the form element and reinforce how much of accessibility depends on thoughtful semantics. Seeing how much impact something as simple as a missing `<label>` or `fieldset` can have was eye-opening.

#### Was there something that you wish had been explained better?

I would’ve liked more coverage on how screen readers actually parse forms. Maybe a quick demo or video showing how a non-accessible form behaves with assistive tech versus a properly structured one would’ve made the impact even more concrete.

#### Were there other exercises that might have helped you learn this week’s topic a little better?

A bonus challenge to "break and fix" accessibility (e.g. be given a broken page with several hidden issues) would’ve helped reinforce the skill. Also, including a test case with custom input styling or visually hidden labels would’ve helped deepen my practical understanding.

### Reflection – 03-CSS Section

#### Were you able to complete the exercises on your own or did you use the videos or the solutions for help?

Yes, I completed all of the exercises on my own through experimentation, reviewing lecture slides, and using DevTools to validate positioning and styles. I made sure each one reflected my own interpretation of the screenshots, especially in the later exercises where layout nuance and responsive behavior came into play.

#### How helpful did you find the exercises in this section? Was there one exercise that was particularly helpful?

This section was incredibly helpful for solidifying my understanding of selectors, the box model, positioning, and media queries. The `06-media-queries` exercise was especially useful — it brought everything together by requiring me to implement responsive layouts, test breakpoints across screen sizes, and write mobile-first styles. That one made the biggest difference for me in terms of practical front-end dev fluency.

#### Was there something that you wish had been explained better?

I think a brief breakdown of how pseudo-elements differ from pseudo-classes in terms of browser rendering would’ve helped in the `02-pseudo` exercise. Also, some clarification around stacking contexts and how z-index interacts with `position: relative` and `absolute` might’ve made the layout portions more intuitive when debugging overlaps.

#### Were there other exercises that might have helped you learn this week’s topic a little better?

Maybe an additional Flexbox or Grid-based version of the `04-layout` exercise would’ve been helpful as a modern complement to the float-based method. That could show how newer layout systems simplify what floats and margin hacks used to handle — and help reinforce why modern CSS is shifting that way.

### Reflection – 04-Flexbox Section

#### Were you able to complete the exercises on your own or did you use the videos or the solutions for help?

I was able to complete the Flexbox exercises independently by drawing on what I learned from class, browser DevTools inspection, and the official MDN Flexbox documentation. It took some trial and error to fine-tune the `flex-direction`, `wrap`, and `justify-content` values, but it felt like a good hands-on challenge.

#### How helpful did you find the exercises in this section? Was there one exercise that was particularly helpful?

The exercises were very helpful in making me visualize how `flex-flow`, `wrap-reverse`, and `align-items` behave when used in combination. Flex Container 3 in particular stood out—it required using `column-reverse wrap` along with `align-items: flex-end`, which really helped me see how axis behavior changes depending on direction. That’s something that sticks better through doing than just reading.

#### Was there something that you wish had been explained better?

I think a short summary on when to prefer Flexbox over Grid—especially for two-dimensional layouts—would have been helpful at this point in the course. Additionally, a breakdown of which Flexbox properties influence the _main axis_ vs the _cross axis_ could reinforce better mental models.

#### Were there other exercises that might have helped you learn this week’s topic a little better?

A small interactive debugging challenge—something like “Fix this broken Flexbox layout”—would’ve been great to practice reading and modifying existing layouts instead of just building from scratch. It could help develop a stronger eye for layout flaws and misused properties.

### Reflection: 05-CSS-Grid Section

#### Were you able to complete the exercises on your own or did you use the videos or the solutions for help?

I was able to complete all the exercises on my own by carefully observing the layout patterns and iteratively tweaking my grid properties. I did reference the screenshot examples frequently to match spacing and structure pixel-for-pixel, but didn’t rely on the videos or solution files for this section.

#### How helpful did you find the exercises in this section? Was there one exercise that was particularly helpful?

This section was super helpful for reinforcing how `grid-template-columns`, `grid-template-rows`, and `grid-area` all work together. The fourth layout in `01-grid.css`, where item 6 spans across the entire row, really solidified my understanding of combining row/column spans with named areas. It was like a mini Tetris challenge—and honestly pretty fun.

#### Was there something that you wish had been explained better?

It would have been helpful to get a quick breakdown on when to prefer `grid-template-areas` versus explicit column/row spans, especially in responsive designs. I got it eventually, but it took some trial and error to see how named areas elegantly scale across breakpoints compared to hard-coded spans.

#### Were there other exercises that might have helped you learn this week’s topic a little better?

Maybe a bonus grid puzzle challenge or a layout recreation without a template would’ve taken this up a notch. Something that requires both structural design thinking _and_ the use of `minmax`, `auto-fit`, or `fr` units would help solidify muscle memory for real-world UI layouts.
