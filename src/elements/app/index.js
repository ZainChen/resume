import { define, WeElement } from 'omi'
import head from './image/1.png'
import school from './image/2.jpg'
import '../app-intro'
import 'omiu'

define('my-app', class extends WeElement {
  css = require('./_index.css')

  name = 'Omi'

  clickHandler = () => {
    this.name = 'Omio'
    this.update()
  }

  render() {
    return (
      <div class="app">
        <div class="fx-top"></div>
        <div class="fx-bottom"></div>
        <div class="all">
          <div class="picture-top">
            <div class="p-left"></div>
            <div class="p-right"></div>
          </div>
          <div class="picture-top1"></div>
          <div class="text1-speak">
            <h3 title="I'm fond of participating in AlloyTeam">AlloyTeam，我想加入你们！</h3>
            <p>　　前辈：<br/>　　您好！<br/>
          　　非常高兴您能抽出宝贵的时间来看我的简历。很想加入AlloyTeam团队，作为一块“金属”融入到AlloyTeam团队中。虽然现在的我是一块几乎全是杂质的金属，甚至可能都算不上金属，但很确定自己生出了一个念头，一个打算付出自己全部努力去达到的念头：融入AlloyTeam团队！哪怕自己现在是块非金属，也坚信一定能通过某种方法让自己成为一种具有金属特征的物质，融入到合金中。
          <br/>　　合金相对于普通金属之所以能更强，不仅是因为它是众多好的物质、技术和才华的集合体。更重要的是合金内部各种物质的相互影响力，这种力量决定了合金的一切，合金里的所有物质都在这种力量下变得更好更强大。希望自己也成为那份力量的源泉和受益者，在自己水平和能力提高的同时，为团队的发展付出自己所有的力量，并以努力、虚心、耐心、积极、主动、好学、热心、诚实等态度在团队度过每一天。
          <br/>　　希望通过这份简历，能使您对我有一个更全面更深入的了解。希望能得到一个机会，成为团队一员，有机会以无比的热情和勤奋的工作回报您的知遇之恩。
          <br/>　　最后，希望AlloyTeam团队越来越强大！
          <br/>　　[自荐人：陈志振]</p>
          </div>
          <div class="text2-jl1">
            <h3>我的简历</h3>
          </div>
          <div class="text2-jl2">
            <div class="img1"><img src={head} alt="" /></div>
            <h4>陈志振</h4>
            <p>Web前端开发工程师</p>
            <p class="t2p1">期望工资：15K</p>
          </div>
          <div class="text2-jl3">
            <div class="lb"><div class="ft">个人信息</div></div>
            <p>　　     电话：15707950645
              <br/>　　 Q Q：2384439266
              <br/>　　 邮箱：2384439266@qq.com
              <br/>　　 居住：深圳市南山区
              <br/>　　 GitHub：<a href="https://github.com/ZainChen" target="_blank">https://github.com/ZainChen</a>
              <br/>　　 个人网站：<a href="https://zainzy.com" target="_blank">https://zainzy.com</a>
              <br/>　　 博客园：<a href="https://www.cnblogs.com/chenzhiyin" target="_blank">https://www.cnblogs.com/chenzhiyin</a>
            </p>
          </div>
          <div class="text2-jl3">
            <div class="lb"><div class="ft">教育背景</div></div>
            <div class="tj3nr">
              <div class="tj3nr-left"><img src={school} alt="" /></div>
              <div class="tj3nr-right">
                <p>宜春学院</p>
                <p class="tj3nr-zy">计算机计应用技术（大专）&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2014.09-2017.07</p>
              </div>
            </div>
          </div>
          <div class="text2-jl3">
            <div class="lb"><div class="ft">荣誉奖项</div></div>
            <p>　　     1> 2016.03.20第七届蓝桥杯全国软件专业人才大赛(省赛)一等奖 
              <br/>　　 2> 2016.05.29第七届蓝桥杯全国软件专业人才大赛(国赛)二等奖 
              <br/>　　 3> 2017.03.25第八届蓝桥杯全国软件专业人才大赛(省赛)一等奖 
              <br/>　　 4> 2017.05.27第八届蓝桥杯全国软件专业人才大赛(国赛)一等奖
            </p>
          </div>
          <div class="text2-jl3">
            <div class="lb"><div class="ft">自我评价</div></div>
            <p>　　     活泼开朗，豁达乐观，积极进取，善于沟通，有很强的团队合作意识，学习能力强，逻辑能力强。
              <br/>　　 有非常好的代码习惯，能够编写出高效高性能的可维护性代码。
              <br/>　　 非常热爱前端，特别好学，超喜欢在前端领域折腾。
            </p>
          </div>
          <div class="text2-jl3">
            <div class="lb"><div class="ft">个人技能</div></div>
            <p>　　     ●熟悉的知识点：</p>
            <p>　　     　　     Omi部分生态、HTML/HTML5、CSS/CSS3、JavaScript、jQuery、nodejs、npm、Webpack、Bootstrap、PHP、MySQL、C/C++、算法(排序、动态规划、DFS、字符串匹配相关算法等)、数据结构、MFC、Python、服务器环境搭建(nginx、Apache、IIS)、搭建git和svn服务端</p>
            <br/>
            <p>　　     ●了解的知识点：</p>
            <p>　　     　　     WebGL、Angularjs、Ajax、白鹭引擎、Objective-C、QT、C#</p>
            <br/>
            <p>　　     ●常用开发工具：</p>
            <p>　　     　　     vscode、vs2015、sublime、svn、git、Sourcetree、Everything、PuTTY、Beyond Compare等</p>
          </div>
          <div class="text2-jl3">
            <div class="lb"><div class="ft">工作经验</div></div>
            <p>　　     深圳市朗仁科技有限公司&ensp;&ensp;&ensp;&ensp;2017.7-2019.3&ensp;&ensp;&ensp;&ensp;软件工程师
              <br/>　　 负责公司诊断软件中日产车型模块开发和维护。
              <br/>　　 
            </p>
          </div>
          <div class="text2-jl3">
            <div class="lb"><div class="ft">项目经验</div></div>
            <h4><div class="tj3k"></div>项目一  创意拼图游戏（部分展示）</h4>
            <p class="xmjy">
              项目网址：<a href="https://zainchen.github.io/czyPuzzle/" target="_blank">https://zainchen.github.io/czyPuzzle/</a>
        <br/>开发周期：2016.8.9-2016.8.23
        <br/>开发工具：Sublime Text 3
        <br/>项目技术：HTML、css、JavaScript
        <br/>功能亮点： 
        <br/>　　1>  简洁美观的界面搭配
        <br/>　　2>  可选择动态图片拼凑    
        <br/>　　3>  鼠标触摸翻译和语音功能
        <br/>（PS：PC端效果最佳，未做响应式布局处理）
        <br/>责任描述：整个网站为自己独立完成
            </p>
            <div class="xmxian"></div>
            <h4><div class="tj3k"></div>项目二  Leida团队电影活动随机座位安排</h4>
            <p class="xmjy">
              项目网址：<a href="https://zainchen.github.io/LeidaMovie/" target="_blank">https://zainchen.github.io/LeidaMovie/</a>
        <br/>开发周期：2016.12.09-2016.12.10
        <br/>开发工具：Sublime Text 3
        <br/>项目技术：HTML、css、JavaScript
        <br/>功能亮点： 
        <br/>　　1>  创意排版 
        <br/>　　2>  动画随机分配效果
        <br/>（PS：PC端效果最佳，未做响应式布局处理）
        <br/>责任描述：整个网站为自己独立完成
            </p>
            <div class="xmxian"></div>
            <h4><div class="tj3k"></div>项目三  手机端电影收藏网站</h4>
            <p class="xmjy">
              项目网址：<a href="https://zainchen.github.io/PhoneMovie/" target="_blank">https://zainchen.github.io/PhoneMovie/</a>
        <br/>开发周期：2016.10.24-2016.10.26
        <br/>开发工具：Sublime Text 3
        <br/>项目技术：HTML、css、JavaScript、jquery、Bootstrap、angularjs
        <br/>功能亮点： 
        <br/>　　1>  界面简洁美观
        <br/>　　2>  用户栏有中英文切换功能
        <br/>　　3>  可在线看电影 
        <br/>（PS：手机端效果最佳，未做响应式布局处理） 
        <br/>责任描述：整个网站为自己独立完成
            </p>
            <div class="xmxian"></div>
            <h4><div class="tj3k"></div>项目四  Bootstrap响应式页面</h4>
            <p class="xmjy">
              项目网址：<a href="https://zainchen.github.io/Bootstrap/" target="_blank">https://zainchen.github.io/Bootstrap/</a>
        <br/>开发周期：2016.09.20-2016.09.27
        <br/>开发工具：Sublime Text 3
        <br/>项目技术：HTML、css、JavaScript、jquery、Bootstrap
        <br/>功能亮点： 
        <br/>　　1>  简约大方 
        <br/>　　2>  同时兼容手机端和pc端显示器的各种分辨率
        <br/>　　3>  右下角回到顶部按键按下后可加速置顶
        <br/>（PS：响应式布局，同时支持手机浏览） 
        <br/>责任描述：整个网站为自己独立完成
            </p>
            <div class="xmxian"></div>
            <h4><div class="tj3k"></div>项目五  小米官网首页</h4>
            <p class="xmjy">
              项目网址：<a href="https://zainchen.github.io/MI/" target="_blank">https://zainchen.github.io/MI/</a>
        <br/>开发周期：2016.09.20-2016.12.23
        <br/>开发工具：Sublime Text 3
        <br/>项目技术：HTML、css、JavaScript
        <br/>功能亮点： 
        <br/>　　1>  比官网更炫酷的轮播图效果 
        <br/>　　2>  菜单栏有展开动画
        <br/>（PS：PC端效果最佳，未做响应式布局处理） 
        <br/>责任描述：整个网站为自己独立完成
            </p>
          </div>
          <div class="text1-speak">
          </div>
          <div class="picture-bottom">
            <div class="p-left"></div>
            <div class="p-right"></div>
          </div>
        </div>
      </div>
    )
  }
})
