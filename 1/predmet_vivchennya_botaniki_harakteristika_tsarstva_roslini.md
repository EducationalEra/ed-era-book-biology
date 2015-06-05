Предмет вивчення ботаніки. Характеристика царства Рослини.
==========================================================


<div id="example1">
  <div id="twitter" data-url="http://sharrre.com/" data-text="Make your sharing widget with Sharrre (jQuery Plugin)" data-title="Tweet"></div>
  <div id="facebook" data-url="http://sharrre.com/" data-text="Make your sharing widget with Sharrre (jQuery Plugin)" data-title="Like"></div>
  <div id="googleplus" data-url="http://sharrre.com/" data-text="Make your sharing widget with Sharrre (jQuery Plugin)" data-title="+1"></div>
</div>
<script>
$('#twitter').sharrre({
  share: {
    twitter: true
  },
  enableHover: false,
  enableTracking: true,
  buttons: { twitter: {via: '_JulienH'}},
  click: function(api, options){
    api.simulateClick();
    api.openPopup('twitter');
  }
});
$('#facebook').sharrre({
  share: {
    facebook: true
  },
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('facebook');
  }
});
$('#googleplus').sharrre({
  share: {
    googlePlus: true
  },
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('googlePlus');
  }
});
</script>
<style type="text/css">
  #example1{
    float:left;
    margin:0 27% 0 27%;
  }
  .sharrre{
    margin:55px 0 0 50px;
    float:left;
  }
  .sharrre .box a:hover{
    text-decoration:none;
  }
  .sharrre .count {
    color:#525b67;
    display:block;
    font-size:18px;
    font-weight:bold;
    line-height:40px;
    height:40px;
    position:relative;
    text-align:center;
    width:70px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    border:1px solid #b2c6cc;
    background: #fbfbfb; /* Old browsers */
    background: -moz-linear-gradient(top, #fbfbfb 0%, #f6f6f6 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fbfbfb), color-stop(100%,#f6f6f6)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #fbfbfb 0%,#f6f6f6 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #fbfbfb 0%,#f6f6f6 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #fbfbfb 0%,#f6f6f6 100%); /* IE10+ */
    background: linear-gradient(top, #fbfbfb 0%,#f6f6f6 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fbfbfb', endColorstr='#f6f6f6',GradientType=0 ); /* IE6-9 */
  }
  .sharrre .count:before, .sharrre .count:after {
  	content:'';
  	display:block;
  	position:absolute;
  	left:49%;
  	width:0;
  	height:0;
  }
  .sharrre .count:before {
  	border:solid 7px transparent;
  	border-top-color:#b2c6cc;
  	margin-left:-7px;
  	bottom: -14px;
  }
  .sharrre .count:after {
  	border:solid 6px transparent;
  	margin-left:-6px;
  	bottom:-12px;
  	border-top-color:#fbfbfb;
  }
  .sharrre .share {
    color:#FFFFFF;
    display:block;
    font-size:12px;
    font-weight:bold;
    height:30px;
    line-height:30px;
    margin-top:8px;
    padding:0;
    text-align:center;
    text-decoration:none;
    width:70px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
  }
  #twitter .share {
    text-shadow: 1px 0px 0px #0077be;
    filter: dropshadow(color=#0077be, offx=1, offy=0);
    border:1px solid #0075c5;
    background: #26c3eb;
    background: -moz-linear-gradient(top, #26c3eb 0%, #26b3e6 50%, #00a2e1 51%, #0080d6 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#26c3eb), color-stop(50%,#26b3e6), color-stop(51%,#00a2e1), color-stop(100%,#0080d6)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #26c3eb 0%,#26b3e6 50%,#00a2e1 51%,#0080d6 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #26c3eb 0%,#26b3e6 50%,#00a2e1 51%,#0080d6 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #26c3eb 0%,#26b3e6 50%,#00a2e1 51%,#0080d6 100%); /* IE10+ */
    background: linear-gradient(top, #26c3eb 0%,#26b3e6 50%,#00a2e1 51%,#0080d6 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#26c3eb', endColorstr='#0080d6',GradientType=0 ); /* IE6-9 */
    box-shadow: 0 1px 4px #DDDDDD, 0 1px 0 #5cd3f1 inset;
  }
  #facebook .share {
    text-shadow: 1px 0px 0px #26427e;
    filter: dropshadow(color=#26427e, offx=1, offy=0);
    border:1px solid #24417c;
    background: #5582c9; /* Old browsers */
    background: -moz-linear-gradient(top, #5582c9 0%, #33539a 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#5582c9), color-stop(100%,#33539a)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #5582c9 0%,#33539a 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #5582c9 0%,#33539a 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #5582c9 0%,#33539a 100%); /* IE10+ */
    background: linear-gradient(top, #5582c9 0%,#33539a 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5582c9', endColorstr='#33539a',GradientType=0 ); /* IE6-9 */
    box-shadow: 0 1px 4px #DDDDDD, 0 1px 0 #80a1d6 inset;
  }
  #googleplus .share {
    text-shadow: 1px 0px 0px #222222;
    filter: dropshadow(color=#222222, offx=1, offy=0);
    border:1px solid #262626;
    background: #6d6d6d; /* Old browsers */
    background: -moz-linear-gradient(top, #6d6d6d 0%, #434343 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#6d6d6d), color-stop(100%,#434343)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #6d6d6d 0%,#434343 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #6d6d6d 0%,#434343 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #6d6d6d 0%,#434343 100%); /* IE10+ */
    background: linear-gradient(top, #6d6d6d 0%,#434343 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d6d6d', endColorstr='#434343',GradientType=0 ); /* IE6-9 */
    box-shadow: 0 1px 4px #DDDDDD, 0 1px 0 #929292 inset;
  }
</style>




<div class="popup" style="background-image: url('http://metroui.org.ua/images/css-logo.png');">
  <div id="youtube-logo">
  </div>
</div>


<div class="eoz-wrap">
<span class="eoz">Означення</span>
<div class="eoz-text">
<b>Ботанiка</b> – наука про рослини, яка дослiджує їх будову, процеси
життєдiяльностi, iндивiдуальний та iсторичний розвиток, взаємозв’язок iз навколишнiм середовищем.
</div>
</div>

Серед напрямів ботаніки розрізняють такі:

-   Морфологія, анатомія та фізіологія рослин;

-   Систематика рослин;

-   Палеоботаніка (досліджує рештки викопних рослин);

-   Геоботаніка (досліджує рослинність Землі).

«Батьком» ботаніки вважається **Теофраст**.<br/>
Для більшості представників царства Рослини характерні певні риси, за
якими ці організми виокремили в окреме царство. Отже, **ознаки,
характерні для Рослин:**

1.  **Автотрофне живлення** (див.п.1). Ця властивість стосується більшості рослин, хоча
    трапляються й паразитичні організми, які живляться гетеротрофно.
    *Рослини синтезують органічні речовини та виділяють кисень під час
    фотосинтезу з вуглекислого газу й води.* Фотосинтез відбувається у
    хлоропластах – різновиді пластид (пластиди – це органели, властиві
    рослинним клітинам).
2.  **Необмежений ріст**.
3.  **Клітинна стінка з целюлози.** Клітинна стінка оточує клітини не тільки рослин, а й грибів і
    бактерій, вона є надмембранною структурою. Однак у клітинній стінці
    грибів міститься інший вуглевод – хітин, а в бактерій – муреїн.
    Целюлоза – вуглевод, характерний саме для рослин. Він надає клітинам
    пружності та сталої форми.
4.  **Запасаюча речовина – крохмаль.** Поживні речовини в різних організмів запасаються у вигляді різних
    вуглеводів. В клітинах рослин запасаються зерна крохмалю.

<!--
<div>
{% modalYoutube %}https://www.youtube.com/embed/OQJSRqhJ-Ow|
<img class="shake" src="../Oval 1.png" width="100"/>
|<a href="https://study.ed-era.com/courses/EdEra/B101/03.11.2014/about?_ga=1.41955744.469818367.1423866830"><button class="but">Переглянути курс!</button></a>{% endmodalYoutube %}
</div>
-->


<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
    <question text="">
        <p>Вірним є твердження:</p>
        <answer>Рослини запасають глікоген</answer>
        <answer correct>Рослини ростуть без обмежень </answer>
        <answer>Фотосинтез властивий лише паразитичним рослинам</answer>
        <answer>Клітинна стінка в рослин містить хітин і целюлозу</answer>
    <explanation>
    <span>Пояснення</span><br/>
    Рослини запасають не глікоген, а крохмаль. Необмежений ріст – характерна особливість царства Рослини. Фотосинтез властивий усім рослинам, окрім паразитичних. Клітинна стінка в рослин містить целюлозу, а не хітин.</explanation>
    </question>
</quiz>
