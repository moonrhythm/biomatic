<template>
  <div id="box-model" class="_pdt-16px">

    <h1 class="_mgv-16px">
      <a href="#position" class="bio-link -primary"><strong>#</strong></a>
      &nbsp;&nbsp;Position
    </h1>

    <p class="_mgbt-32px">
      Class มีสองส่วนคือ กำหนดรูปแบบ position และกำหนดค่าของ Position ทิศต่างๆ
      (Left, Rignt, Top และ Bottom) ของ Element
    </p>

    <p class="_mgbt-32px">
      สำหรับ Position Base คือ <code class="_cl-accent">._pst</code>
      และ Value คือ ตัวย่อของชื่อ Position
    </p>

    <p class="_mgbt-32px">
      สำหรับค่า Position ของด้านต่างๆ Base คือ <code class="_cl-accent">._t</code>
      <code class="_cl-accent">._bt</code> <code class="_cl-accent">._l</code>
      <code class="_cl-accent">._r</code>
      และ Value คือ ค่าในหน่วยต่างๆ
    </p>

    <table class="bio-table _mgbt-64px">
      <thead>
        <tr>
          <th class="_w-1px">Base</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>
              <code class="_cl-accent">._pst</code>
            </p>
          </td>
          <td>
            <p>
              static: <code class="_cl-accent">stt</code> <br>
              relative: <code class="_cl-accent">rlt</code> <br>
              absolute: <code class="_cl-accent">asl</code> <br>
              fixed: <code class="_cl-accent">f</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <code class="_cl-accent">._l</code>,
              <code class="_cl-accent">._r</code>,
              <code class="_cl-accent">._t</code>,
              <code class="_cl-accent">._bt</code>
            </p>
          </td>
          <td>
            <p class="_mgbt-8px">
              <strong>Pixel Value: </strong>
              <code class="_cl-accent">0px</code>
              <code class="_cl-accent">1px</code>
              <code class="_cl-accent">2px</code>
              <code class="_cl-accent">4px</code>
              <code class="_cl-accent">8px</code>
              <code class="_cl-accent">16px</code>
              <code class="_cl-accent">32px</code>
              <code class="_cl-accent">64px</code>
              <code class="_cl-accent">128px</code>
              <code class="_cl-accent">256px</code>
            </p>
            <p class="_mgbt-8px">
              <strong>Percentage Value: </strong>
              <code class="_cl-accent">50pct</code>
            </p>
            <p>
              <strong>Other Value: </strong>
              <code class="_cl-accent">auto</code>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Position</h2>
    <h3 class="_mgbt-8px">ตัวอย่างการใช้งาน</h3>
    <pre class="_mgbt-64px"><code class="language-markup">&lt;!-- Markup --&gt;
&lt;div class="_pst-stt"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt"&gt;&lt;/div&gt;
&lt;div class="_pst-asl"&gt;&lt;/div&gt;
&lt;div class="_pst-f"&gt;&lt;/div&gt;</code></pre>


    <h2>Left</h2>

    <h3 class="_mgbt-8px">ตัวอย่างการใช้งาน</h3>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Markup --&gt;
&lt;div class="_pst-rlt _l-1px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-2px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-4px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-8px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-16px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-32px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-64px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _l-50pct"&gt;&lt;/div&gt;</code></pre>

    <div class="u-panel _mgbt-64px">
      <div class="_bgcl-neutral-300 _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-1px"><small>._l-1px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-2px"><small>._l-2px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-4px"><small>._l-4px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-8px"><small>._l-8px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-16px"><small>._l-16px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-32px"><small>._l-32px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-64px"><small>._l-64px</small></div>
      </div>
      <div class="_bgcl-neutral-300">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _l-50pct"><small>._l-50pct</small></div>
      </div>
    </div>

    <h2>Right</h2>

    <h3 class="_mgbt-8px">ตัวอย่างการใช้งาน</h3>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Markup --&gt;
&lt;div class="_pst-rlt _r-1px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-2px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-4px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-8px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-16px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-32px"&gt;&lt;/div&gt;
&lt;div class="_pst-rlt _r-64px"&gt;&lt;/div&gt;</code></pre>

    <div class="u-panel _mgbt-64px">
      <div class="_bgcl-neutral-300 _tal-r _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _r-1px"><small>._r-1px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _tal-r _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _r-2px"><small>._r-2px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _tal-r _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _r-4px"><small>._r-4px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _tal-r _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _r-8px"><small>._r-8px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _tal-r _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _r-16px"><small>._r-16px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _tal-r _mgbt-4px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _r-32px"><small>._r-32px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _tal-r">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _r-64px"><small>._r-64px</small></div>
      </div>
    </div>


    <h2>Top</h2>

    <h3 class="_mgbt-8px">ตัวอย่างการใช้งาน</h3>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Markup --&gt;
&lt;div class="_t-1px"&gt;&lt;/div&gt;
&lt;div class="_t-2px"&gt;&lt;/div&gt;
&lt;div class="_t-4px"&gt;&lt;/div&gt;
&lt;div class="_t-8px"&gt;&lt;/div&gt;
&lt;div class="_t-16px"&gt;&lt;/div&gt;
&lt;div class="_t-32px"&gt;&lt;/div&gt;
&lt;div class="_t-64px"&gt;&lt;/div&gt;</code></pre>

    <div class="u-panel _mgbt-64px">
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _t-1px"><small>._t-1px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _t-2px"><small>._t-2px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _t-4px"><small>._t-4px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _t-8px"><small>._t-8px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _t-16px"><small>._t-16px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _t-32px"><small>._t-32px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _t-64px"><small>._t-64px</small></div>
      </div>
    </div>

    <h2>Bottom</h2>

    <h3 class="_mgbt-8px">ตัวอย่างการใช้งาน</h3>
    <pre class="_mgbt-16px"><code class="language-markup">&lt;!-- Markup --&gt;
&lt;div class="_bt-1px"&gt;&lt;/div&gt;
&lt;div class="_bt-2px"&gt;&lt;/div&gt;
&lt;div class="_bt-4px"&gt;&lt;/div&gt;
&lt;div class="_bt-8px"&gt;&lt;/div&gt;
&lt;div class="_bt-16px"&gt;&lt;/div&gt;
&lt;div class="_bt-32px"&gt;&lt;/div&gt;
&lt;div class="_bt-64px"&gt;&lt;/div&gt;</code></pre>

    <div class="u-panel _mgbt-64px">
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-1px"><small>._bt-1px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-2px"><small>._bt-2px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-4px"><small>._bt-4px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-8px"><small>._bt-8px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-16px"><small>._bt-16px</small></div>
      </div>
      <div class="_bgcl-neutral-300 _mgbt-64px">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-32px"><small>._bt-32px</small></div>
      </div>
      <div class="_bgcl-neutral-300">
        <div class="_bgcl-warning _dp-ilb _pst-rlt _bt-64px"><small>._bt-64px</small></div>
      </div>
    </div>

  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style>

</style>
