(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"3Z9Z":function(e,a,i){"use strict";var t=i("wx14"),r=i("zLVn"),n=i("TSYQ"),o=i.n(n),s=i("q1tI"),l=i.n(s),m=i("vUet"),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,a){var i=e.bsPrefix,n=e.className,s=e.noGutters,d=e.as,c=void 0===d?"div":d,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),g=Object(m.a)(i,"row"),b=g+"-cols",f=[];return u.forEach((function(e){var a,i=p[e];delete p[e];var t="xs"!==e?"-"+e:"";null!=(a=null!=i&&"object"===typeof i?i.cols:i)&&f.push(""+b+t+"-"+a)})),l.a.createElement(c,Object(t.a)({ref:a},p,{className:o.a.apply(void 0,[n,g,s&&"no-gutters"].concat(f))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},"6xyR":function(e,a,i){"use strict";var t=i("wx14"),r=i("zLVn"),n=i("TSYQ"),o=i.n(n),s=i("q1tI"),l=i.n(s),m=i("vUet"),u=i("YdCC"),d=function(e){return l.a.forwardRef((function(a,i){return l.a.createElement("div",Object(t.a)({},a,{ref:i,className:o()(a.className,e)}))}))},c=i("Wzyw"),p=l.a.forwardRef((function(e,a){var i=e.bsPrefix,n=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,c=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(m.a)(i,"card-img");return l.a.createElement(d,Object(t.a)({ref:a,className:o()(s?p+"-"+s:p,n)},c))}));p.displayName="CardImg",p.defaultProps={variant:null};var g=p,b=d("h5"),f=d("h6"),h=Object(u.a)("card-body"),y=Object(u.a)("card-title",{Component:b}),k=Object(u.a)("card-subtitle",{Component:f}),P=Object(u.a)("card-link",{Component:"a"}),v=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),I=Object(u.a)("card-footer"),S=Object(u.a)("card-img-overlay"),j=l.a.forwardRef((function(e,a){var i=e.bsPrefix,n=e.className,u=e.bg,d=e.text,p=e.border,g=e.body,b=e.children,f=e.as,y=void 0===f?"div":f,k=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),P=Object(m.a)(i,"card"),v=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:P+"-header"}}),[P]);return l.a.createElement(c.a.Provider,{value:v},l.a.createElement(y,Object(t.a)({ref:a},k,{className:o()(n,P,u&&"bg-"+u,d&&"text-"+d,p&&"border-"+p)}),g?l.a.createElement(h,null,b):b))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=g,j.Title=y,j.Subtitle=k,j.Body=h,j.Link=P,j.Text=v,j.Header=w,j.Footer=I,j.ImgOverlay=S;a.a=j},JI6e:function(e,a,i){"use strict";var t=i("wx14"),r=i("zLVn"),n=i("TSYQ"),o=i.n(n),s=i("q1tI"),l=i.n(s),m=i("vUet"),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,a){var i=e.bsPrefix,n=e.className,s=e.as,d=void 0===s?"div":s,c=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(m.a)(i,"col"),g=[],b=[];return u.forEach((function(e){var a,i,t,r=c[e];if(delete c[e],"object"===typeof r&&null!=r){var n=r.span;a=void 0===n||n,i=r.offset,t=r.order}else a=r;var o="xs"!==e?"-"+e:"";a&&g.push(!0===a?""+p+o:""+p+o+"-"+a),null!=t&&b.push("order"+o+"-"+t),null!=i&&b.push("offset"+o+"-"+i)})),g.length||g.push(p),l.a.createElement(d,Object(t.a)({},c,{ref:a,className:o.a.apply(void 0,[n].concat(g,b))}))}));d.displayName="Col",a.a=d},nHUW:function(e,a,i){"use strict";i.r(a);var t=i("q1tI"),r=i.n(t),n=i("7vrA"),o=i("3Z9Z"),s=i("JI6e"),l=i("6xyR"),m=i("wx14"),u=i("zLVn"),d=i("TSYQ"),c=i.n(d),p=i("vUet"),g=r.a.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,n=e.children,o=e.aspectRatio,s=Object(u.a)(e,["bsPrefix","className","children","aspectRatio"]),l=Object(p.a)(i,"embed-responsive"),d=r.a.Children.only(n);return r.a.createElement("div",Object(m.a)({ref:a},s,{className:c()(l,t,o&&l+"-"+o)}),r.a.cloneElement(d,{className:c()(d.props.className,l+"-item")}))}));g.defaultProps={aspectRatio:"1by1"};var b=g,f=r.a.createElement,h=function(e){var a=e.data;return f(s.a,{md:"4",sm:"1",className:"my-3 p-0"},a.image?f(l.a,{border:"light",className:"m-0"},f(l.a.Img,{variant:"top",src:a.image}),f(l.a.Body,{className:"text-center py-4"},f(l.a.Title,{className:"black"}," ",a.title," "),f(l.a.Text,{className:"black2"},a.tools))):f(l.a,{border:"light",className:"m-0"},f(b,{aspectRatio:"16by9"},a.embed),f(l.a.Body,{className:"text-center py-4"},f(l.a.Title,{className:"black"}," ",a.title," "),f(l.a.Text,{className:"black2"},a.tools))))},y=r.a.createElement,k={apps:[{id:1,title:"Sistem Informasi Pengajuan Perbaikan Sarana TI",image:"img/apps/SIPPTI.jpg",tools:"HTML,CSS,Javascript,PHP,MYSQL,CodeIgniter",category:"apps",description:"sistem informasi untuk membantu proses pengawasan data pengajuan perbaikan sarana TI di lingkungan Rumah Sakit Saiful Anwar Malang",url:"https/github.com/hanifrfd/SIPPTI"},{id:2,title:"Sistem Informasi Flora dan Fauna TNTBTS",image:"img/apps/TNBTS.jpg",tools:"HTML,CSS,Javascript,PHP,MYSQL,CodeIgniter",category:"apps",description:"Sistem informasi pelaporan data flora dan fauna di Taman Nasional Bromo Tengger Semeru",url:"https/github.com/hanifrfd/SistemInformasiFloraDanFauna"},{id:3,title:"MovieBot",image:"img/apps/MovieBot.jpg",tools:"HTML,CSS,Javascript,ReactJS",category:"apps",description:"Web untuk berbagi informasi seputar film, menyajikan informasi film yang saat ini dan akan tayang. Dan bisa mencari film-film yang sudah ditayangkan ",url:"https/moviebot.netlify.com"},{id:4,title:"Webqu - Portfolio Website",image:"img/apps/Webqu.jpg",tools:"HTML,CSS,Javascript,ReactJS",category:"apps",description:"Portfolio Website untuk menyimpan portfolio dari Hanif Rafidi",url:"https/webqu.netlify.com"}],ui:[{id:1,title:"Dashboard UI - Dashboard",image:"img/ui/dashboard.jpg",tools:"Adobe XD, Affinity Designer",category:"ui",description:"UI design untuk dashboard sistem keuangan atau manajemen, terdiri dari sidebar, grafik, dan tabel untuk menampilkan data",url:"https/github.com/hanifrfd/SIPPTI"},{id:2,title:"MovieBox - Landing Page",image:"img/ui/moviebox.jpg",tools:"Figma, Adobe Illustrator, Adobe Photoshop",category:"ui",description:"UI design untuk website berbagi film, menampilkan header yang menarik perhatian serta warna merah yang melambangkan red carpet sehingga suasana seperti menerima pengghargaan di Hollywood",url:"https/github.com/hanifrfd/SistemInformasiFloraDanFauna"},{id:3,title:"My Furniture - Landing Page",image:"img/ui/myfurniture.jpg",tools:"Figma, Adobe Illustrator, Adobe Photoshop",category:"ui",description:"UI design untuk website e-commerce furniture, tampilan putih dan warna kayu memberikan kesan elegan. Dan memiliki kesan futuristik",url:"https/moviebot.netlify.com"},{id:4,title:"Kids Clothing - UI Header",image:"img/ui/kids.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"Header ui design untuk sebuah e-commerce toko baju anak-anak",url:"https/webqu.netlify.com"},{id:5,title:"College Website - Landing Page",image:"img/ui/univ.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"UI design untuk landing page website sebuah universitas, warna biru memberikan kesan kecerdasan dan keilmuan",url:"https/webqu.netlify.com"},{id:6,title:"RIO DE Janeiro Beach Website - Landing Page",image:"img/ui/beach.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"Landing page untuk website kota Rio de Janeiro, memberikan informasi seputar pantai yang dapat dikunjungi di kota tersebut. Warna biru, kuning, dan hijau berasal dari bendera negara brazil",url:"https/webqu.netlify.com"},{id:7,title:"Freelance Portfolio Web - Landing Page",image:"img/ui/freelancer.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"Landing page untuk website portfolio seorang freelancer, informasi seputar freelancer dari jasa hingga kontak yang dapat dihubungi",url:"https/webqu.netlify.com"}],video:[{id:1,title:"Simple Video Ad",image:"",url:"https/github.com/hanifrfd/SIPPTI",tools:"Adobe Premiere Pro",category:"video",embed:y("iframe",{class:"port-img embed-responsive-item",src:"https://www.youtube.com/embed/vuc5th1mpW0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},{id:2,title:"Skate Video Ad",image:"",url:"https/github.com/hanifrfd/SIPPTI",tools:"Adobe After Effect, Adobe Premiere Pro",category:"video",embed:y("iframe",{class:"port-img embed-responsive-item",src:"https://www.youtube.com/embed/6ZgVxmyJolw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},{id:3,title:"Yoga Class Ad",image:"",url:"https/github.com/hanifrfd/SIPPTI",tools:"Adobe After Effects, Adobe Premiere Pro",category:"video",embed:y("iframe",{class:"port-img embed-responsive-item",src:"https://www.youtube.com/embed/5yJxfTt_MEc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}],all:[{id:1,title:"Sistem Informasi Pengajuan Perbaikan Sarana TI",image:"img/apps/SIPPTI.jpg",tools:"HTML,CSS,Javascript,PHP,MYSQL,CodeIgniter",category:"apps",description:"sistem informasi untuk membantu proses pengawasan data pengajuan perbaikan sarana TI di lingkungan Rumah Sakit Saiful Anwar Malang",url:"https/github.com/hanifrfd/SIPPTI"},{id:2,title:"Sistem Informasi Flora dan Fauna TNTBTS",image:"img/apps/TNBTS.jpg",tools:"HTML,CSS,Javascript,PHP,MYSQL,CodeIgniter",category:"apps",description:"Sistem informasi pelaporan data flora dan fauna di Taman Nasional Bromo Tengger Semeru",url:"https/github.com/hanifrfd/SistemInformasiFloraDanFauna"},{id:3,title:"MovieBot",image:"img/apps/MovieBot.jpg",tools:"HTML,CSS,Javascript,ReactJS",category:"apps",description:"Web untuk berbagi informasi seputar film, menyajikan informasi film yang saat ini dan akan tayang. Dan bisa mencari film-film yang sudah ditayangkan ",url:"https/moviebot.netlify.com"},{id:4,title:"Webqu - Portfolio Website",image:"img/apps/Webqu.jpg",tools:"HTML,CSS,Javascript,ReactJS",category:"apps",description:"Portfolio Website untuk menyimpan portfolio dari Hanif Rafidi",url:"https/webqu.netlify.com"},{id:1,title:"Dashboard UI - Dashboard",image:"img/ui/dashboard.jpg",tools:"Adobe XD, Affinity Designer",category:"ui",description:"UI design untuk dashboard sistem keuangan atau manajemen, terdiri dari sidebar, grafik, dan tabel untuk menampilkan data",url:"https/github.com/hanifrfd/SIPPTI"},{id:2,title:"MovieBox - Landing Page",image:"img/ui/moviebox.jpg",tools:"Figma, Adobe Illustrator, Adobe Photoshop",category:"ui",description:"UI design untuk website berbagi film, menampilkan header yang menarik perhatian serta warna merah yang melambangkan red carpet sehingga suasana seperti menerima pengghargaan di Hollywood",url:"https/github.com/hanifrfd/SistemInformasiFloraDanFauna"},{id:3,title:"My Furniture - Landing Page",image:"img/ui/myfurniture.jpg",tools:"Figma, Adobe Illustrator, Adobe Photoshop",category:"ui",description:"UI design untuk website e-commerce furniture, tampilan putih dan warna kayu memberikan kesan elegan. Dan memiliki kesan futuristik",url:"https/moviebot.netlify.com"},{id:4,title:"Kids Clothing - UI Header",image:"img/ui/kids.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"Header ui design untuk sebuah e-commerce toko baju anak-anak",url:"https/webqu.netlify.com"},{id:5,title:"College Website - Landing Page",image:"img/ui/univ.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"UI design untuk landing page website sebuah universitas, warna biru memberikan kesan kecerdasan dan keilmuan",url:"https/webqu.netlify.com"},{id:6,title:"RIO DE Janeiro Beach Website - Landing Page",image:"img/ui/beach.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"Landing page untuk website kota Rio de Janeiro, memberikan informasi seputar pantai yang dapat dikunjungi di kota tersebut. Warna biru, kuning, dan hijau berasal dari bendera negara brazil",url:"https/webqu.netlify.com"},{id:7,title:"Freelance Portfolio Web - Landing Page",image:"img/ui/freelancer.jpg",tools:"Figma, Adobe Illustrator",category:"ui",description:"Landing page untuk website portfolio seorang freelancer, informasi seputar freelancer dari jasa hingga kontak yang dapat dihubungi",url:"https/webqu.netlify.com"},{id:1,title:"Simple Video Ad",image:"",url:"https/github.com/hanifrfd/SIPPTI",tools:"Adobe Premiere Pro",category:"video",embed:y("iframe",{class:"port-img embed-responsive-item",src:"https://www.youtube.com/embed/vuc5th1mpW0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},{id:2,title:"Skate Video Ad",image:"",url:"https/github.com/hanifrfd/SIPPTI",tools:"Adobe After Effect, Adobe Premiere Pro",category:"video",embed:y("iframe",{class:"port-img embed-responsive-item",src:"https://www.youtube.com/embed/6ZgVxmyJolw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},{id:3,title:"Yoga Class Ad",image:"",url:"https/github.com/hanifrfd/SIPPTI",tools:"Adobe After Effects, Adobe Premiere Pro",category:"video",embed:y("iframe",{class:"port-img embed-responsive-item",src:"https://www.youtube.com/embed/5yJxfTt_MEc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}]},P=r.a.createElement;a.default=function(){var e=Object(t.useState)("all"),a=e[0],i=e[1],r=function(e){return e===a?"blue":""};return P(n.a,{className:"pt-5 px-0 py-3 mb-5",fluid:!0},P(o.a,{className:"mx-0 px-0"},P(s.a,{md:"12",className:"justify-content-center mb-4"},P("h2",{className:"black py-5 text-center"},"Portfolio"),P(o.a,{className:"justify-content-center black2 py-2"},P("h5",{id:"all",className:"menu-link font-18 font-medium px-3 "+r("all"),onClick:function(){return i("all")}},"ALL"),P("h5",{id:"apps",className:"menu-link font-18 font-medium px-3 "+r("apps"),onClick:function(){return i("apps")}},"APPS"),P("h5",{id:"ui",className:"menu-link font-18 font-medium px-3 "+r("ui"),onClick:function(){return i("ui")}},"UI DESIGN"),P("h5",{id:"video",className:"menu-link font-18 font-medium px-3 "+r("video"),onClick:function(){return i("video")}},"VIDEO GRAPHIC"))),P(o.a,{className:"mx-0 px-0 justify-content-center"},k[a].map((function(e,a){return P(h,{key:a,data:e})})))),P("style",{text:"text/css"},"\n                .menu-link{\n                    cursor: pointer\n                }\n                .menu-link:hover{\n                    color: #92C5F3\n                }\n            "))}}}]);