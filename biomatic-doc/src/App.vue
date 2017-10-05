<template>
  <div id="app">

    <header class="_bgcl-primary _cl-white _dp-f _fdrt-row _alit-ct">
      <div class="_fs-4">Biomatic UI</div>
    </header>

    <div class="_dp-f _fdrt-r">

      <div class="_pd-16px _bgcl-neutral-100 _w-256px">
        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-getting-start" type="checkbox" checked>
          <label for="accordion-getting-start"><strong>Getting Start</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <a href="#" class="bio-link -item">Getting Start</a>
            <a href="#" class="bio-link -item">Installation</a>
            <a href="#" class="bio-link -item">SCSS Variables</a>
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-components" type="checkbox" checked>
          <label for="accordion-components" class="_fw-500"><strong>Atomic</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <a href="./doc/atomic/atomic.html" class="bio-link -item">About Atomic</a>
            <router-link
              :to="{ name: 'AtomicBorder' }"
              class="bio-link -item"
              :active-class="'-active'">
              Border
            </router-link>
            <router-link
              :to="{ name: 'AtomicBoxPosition' }"
              class="bio-link -item"
              :active-class="'-active'">
              Box Position
            </router-link>
            <a href="./doc/atomic/box-size.html" class="bio-link -item">Box Size</a>
            <a href="./doc/atomic/color.html" class="bio-link -item">Color</a>
            <a href="./doc/atomic/margin.html" class="bio-link -item">Margin</a>
            <a href="./doc/atomic/padding.html" class="bio-link -item">Padding</a>
            <a href="./doc/atomic/typography.html" class="bio-link -item">Typography</a>
            <a href="./doc/atomic/float.html" class="bio-link -item">Float</a>
            <a href="./doc/atomic/cursor.html" class="bio-link -item">Cursor</a>
            <a href="./doc/atomic/display.html" class="bio-link -item">Display</a>
            <a href="./doc/atomic/background.html" class="bio-link -item">Background[WIP]</a>
            <!-- <a href="./doc/atomic/typography.html" class="bio-link -item">Flexbox</a> -->
            <!-- <a href="./doc/atomic/typography.html" class="bio-link -item">Image (อัน object fit อ่ะ)</a> -->
            <a href="./doc/atomic/opacity.html" class="bio-link -item">Opacity</a>
            <a href="./doc/atomic/image.html" class="bio-link -item">Image[WIP]</a>
            <a href="./doc/atomic/alignment.html" class="bio-link -item">Alignment[WIP]</a>
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-components" type="checkbox" checked>
          <label for="accordion-components" class="_fw-500"><strong>Components</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <a href="./doc/components/component.html" class="bio-link -item">About Component</a>
            <a href="./doc/components/accordion.html" class="bio-link -item">Accordion</a>
            <a href="./doc/components/breadcrumb.html" class="bio-link -item">Breadcrumb</a>
            <a href="./doc/components/button.html" class="bio-link -item">Button</a>
            <a href="./doc/components/card.html" class="bio-link -item">Card</a>
            <a href="./doc/components/form.html" class="bio-link -item">Form</a>
            <a href="./doc/components/message.html" class="bio-link -item">Message</a>
            <a href="./doc/components/progress.html" class="bio-link -item">Progress</a>
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-layouts" type="checkbox" checked>
          <label for="accordion-layouts" class="_fw-500"><strong>Layouts</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <a href="./doc/layouts/layout.html" class="bio-link -item">About Layout</a>
            <a href="#" class="bio-link -item">Container</a>
            <a href="#" class="bio-link -item">Responsive Grid</a>
          </div>
        </div>

        <div class="bio-accordion _mgbt-8px">
          <input id="accordion-utilities" type="checkbox" checked>
          <label for="accordion-utilities" class="_fw-500"><strong>Utilities</strong></label>
          <div class="bio-accordion-content _pdv-8px">
            <a href="./doc/utilities/utility.html" class="bio-link -item">About Utility</a>
            <a href="#" class="bio-link -item">Rise</a>
          </div>
        </div>
      </div>
      <div class="_pdh-64px _pdv-32px _f-1">
        <router-view style="max-width: 800px"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
