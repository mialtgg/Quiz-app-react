const questions = [
    {
      question: "React nedir ve neden tercih edilir?",
      options: [
        "Bir arka uç (backend) framework'üdür ve veritabanı işlemleri için kullanılır.",
        "Bir CSS kütüphanesidir ve stil yönetimi için kullanılır.",
        "Bir JavaScript kütüphanesidir ve kullanıcı arayüzleri oluşturmak için kullanılır.",
        "Bir veri tabanı yönetim sistemidir ve veri depolama için kullanılır."
      ],
      answer: "Bir JavaScript kütüphanesidir ve kullanıcı arayüzleri oluşturmak için kullanılır."
    },
    {
      question: "JSX nedir?",
      options: [
        "JavaScript ile HTML'in birleşimi olan bir sözdizimidir.",
        "CSS stillerini yönetmek için kullanılan bir dil.",
        "Veritabanı sorguları yazmak için kullanılan bir araç.",
        "Sunucu tarafında çalışan bir programlama dili."
      ],
      answer: "JavaScript ile HTML'in birleşimi olan bir sözdizimidir."
    },
    {
      question: "React'te 'props' nedir ve ne işe yarar?",
      options: [
        "Bileşenlerin kendi içinde yönetilen durumudur.",
        "Bileşenlere dışarıdan aktarılan ve bileşenin davranışını etkileyen verilerdir.",
        "CSS stillerini tanımlamak için kullanılır.",
        "Sunucuya istek göndermek için kullanılan bir fonksiyondur."
      ],
      answer: "Bileşenlere dışarıdan aktarılan ve bileşenin davranışını etkileyen verilerdir."
    },
    {
      question: "React Event Handlers neden kullanılır?",
      options: [
        "Bileşenlerin stilini değiştirmek için.",
        "Kullanıcı etkileşimlerine cevap vermek için.",
        "Veritabanı işlemlerini gerçekleştirmek için.",
        "Sunucu tarafı render işlemlerini yönetmek için."
      ],
      answer: "Kullanıcı etkileşimlerine cevap vermek için."
    },
    {
      question: "React Synthetic Event nedir?",
      options: [
        "Tarayıcılar arası uyumluluk sağlayan React'ın kendi olay sistemidir.",
        "Gerçek DOM olaylarının doğrudan kullanılmasıdır.",
        "Sunucu tarafında gerçekleşen olaylardır.",
        "CSS animasyonlarını yönetmek için kullanılır."
      ],
      answer: "Tarayıcılar arası uyumluluk sağlayan React'ın kendi olay sistemidir."
    },
    {
      question: "React'te 'map' fonksiyonu ne amaçla kullanılır?",
      options: [
        "Dizileri dolaşarak her bir öğe için bileşen oluşturmak için.",
        "Veritabanı bağlantısı kurmak için.",
        "CSS stillerini uygulamak için.",
        "Sunucuya veri göndermek için."
      ],
      answer: "Dizileri dolaşarak her bir öğe için bileşen oluşturmak için."
    },
    {
      question: "React'te 'key' prop'u neden önemlidir?",
      options: [
        "Bileşenlerin benzersiz tanımlayıcılarla takip edilmesini sağlar.",
        "Bileşenlerin stilini değiştirmek için kullanılır.",
        "Sunucuya istek göndermek için gereklidir.",
        "Veritabanı işlemlerini yönetir."
      ],
      answer: "Bileşenlerin benzersiz tanımlayıcılarla takip edilmesini sağlar."
    },
    {
      question: "Styled Components içinde 'props' ne için kullanılır?",
      options: [
        "Dinamik stiller oluşturmak için.",
        "Veritabanı bağlantıları kurmak için.",
        "Sunucu tarafı işlemleri yönetmek için.",
        "Bileşenlerin yaşam döngüsünü kontrol etmek için."
      ],
      answer: "Dinamik stiller oluşturmak için."
    },
    {
      question: "React Fragment nedir?",
      options: [
        "Birden fazla elementi sarmalarken ekstra bir DOM öğesi oluşturmadan gruplamayı sağlar.",
        "CSS stillerini yönetmek için kullanılan bir yöntemdir.",
        "Veritabanı işlemlerini gerçekleştirmek için kullanılır.",
        "Sunucu tarafı render işlemlerini optimize eder."
      ],
      answer: "Birden fazla elementi sarmalarken ekstra bir DOM öğesi oluşturmadan gruplamayı sağlar."
    },
    {
      question: "React Hooks nedir ve ne için kullanılır?",
      options: [
        "React'ta class bileşenlerinin yerini alan ve state yönetimini sağlayan fonksiyonlardır.",
        "CSS stillerini yönetmek için kullanılan kütüphanedir.",
        "Sunucu tarafı işlemlerini gerçekleştiren modüldür.",
        "Veritabanı bağlantılarını yöneten araçtır."
      ],
      answer: "React'ta class bileşenlerinin yerini alan ve state yönetimini sağlayan fonksiyonlardır."
    },
    {
      question: "Hangi Hook state yönetimi için kullanılır?",
      options: [
        "useEffect",
        "useState",
        "useContext",
        "useRef"
      ],
      answer: "useState"
    },
    {
      question: "React Portal nedir?",
      options: [
        "React bileşenlerini DOM hiyerarşisi dışında bir yere render etme yöntemidir.",
        "Veritabanı bağlantılarını yönetmek için kullanılır.",
        "CSS stillerini dinamik olarak değiştiren bir araçtır.",
        "Sunucu tarafı render işlemlerini optimize eden bir yöntemdir."
      ],
      answer: "React bileşenlerini DOM hiyerarşisi dışında bir yere render etme yöntemidir."
    },
    {
      question: "Custom Hooks nedir?",
      options: [
        "Kullanıcı tarafından tanımlanan ve tekrar kullanılabilir Hook fonksiyonlarıdır.",
        "CSS stillerini yönetmek için kullanılan özel fonksiyonlardır.",
        "Veritabanı işlemlerini gerçekleştiren özel modüllerdir.",
        "Sunucu tarafı işlemlerini yöneten araçlardır."
      ],
      answer: "Kullanıcı tarafından tanımlanan ve tekrar kullanılabilir Hook fonksiyonlarıdır."
    },
    {
      question: "Higher Order Components (HOC) nedir?",
      options: [
        "Başka bir bileşeni argüman olarak alan ve yeni bir bileşen döndüren fonksiyonlardır.",
        "CSS stillerini yönetmek için kullanılan yöntemdir.",
        "Veritabanı işlemlerini gerçekleştiren araçlardır.",
        "Sunucu tarafı render işlemlerini optimize eden modüllerdir."
      ],
      answer: "Başka bir bileşeni argüman olarak alan ve yeni bir bileşen döndüren fonksiyonlardır."
    },
    {
      question: "React Lifecycle nedir?",
      options: [
        "React bileşenlerinin oluşturulması, güncellenmesi ve yok edilmesi süreçlerini tanımlayan aşamalardır.",
        "CSS animasyonlarını yönetmek için kullanılan bir terimdir.",
        "Veritabanı bağlantı süreçlerini tanımlar.",
        "Sunucu tarafı işlemlerinin yaşam döngüsünü ifade eder."
      ],
      answer: "React bileşenlerinin oluşturulması, güncellenmesi ve yok edilmesi süreçlerini tanımlayan aşamalardır."
    },
    {
      question: "React Context API nedir ve neden kullanılır?",
      options: [
        "Bileşenler arasında global düzeyde veri paylaşımını sağlayan bir yapıdır.",
        "CSS stillerini dinamik olarak değiştirmek için kullanılır.",
        "Veritabanı işlemlerini yönetmek için kullanılan bir API'dir.",
        "Sunucu tarafı render işlemlerini optimize eder."
      ],
      answer: "Bileşenler arasında global düzeyde veri paylaşımını sağlayan bir yapıdır."
    },
    {
      question: "Prop drilling nedir?",
      options: [
        "Verinin çok sayıda ara bileşen üzerinden geçerek alt bileşenlere iletilmesi sürecidir.",
        "CSS stillerini yönetmek için kullanılan bir tekniktir.",
        "Veritabanı bağlantılarını optimize eden bir yöntemdir.",
        "Sunucu tarafı işlemlerini hızlandırmak için kullanılır."
      ],
      answer: "Verinin çok sayıda ara bileşen üzerinden geçerek alt bileşenlere iletilmesi sürecidir."
    },
    {
      question: "CSR (Client-Side Rendering) ve SSR (Server-Side Rendering) arasındaki temel fark nedir?",
      options: [
        "CSR, içeriği tarayıcıda; SSR ise içeriği sunucuda render eder.",
        "CSR, sunucu performansını artırır; SSR ise tarayıcı performansını artırır.",
        "CSR, sadece statik siteler için kullanılır; SSR ise dinamik siteler için kullanılır.",
        "CSR ve SSR arasında hiçbir fark yoktur."
      ],
      answer: "CSR, içeriği tarayıcıda; SSR ise içeriği sunucuda render eder."
    },
    {
      question: "Virtual DOM nedir ve nasıl çalışır?",
      options: [
        "Gerçek DOM'un hafif ve verimli bir kopyasıdır; değişiklikler önce Virtual DOM'da yapılır ve sonra gerçek DOM'a yansıtılır.",
        "Tarayıcıların kullandığı standart DOM yapısıdır.",
        "Sunucuda çalışan ve render işlemlerini yöneten bir modüldür.",
        "CSS stillerini dinamik olarak değiştiren bir araçtır."
      ],
      answer: "Gerçek DOM'un hafif ve verimli bir kopyasıdır; değişiklikler önce Virtual DOM'da yapılır ve sonra gerçek DOM'a yansıtılır."
    },
    {
      question: "React Router nedir ve neden kullanılır?",
      options: [
        "React uygulamalarında farklı URL'lere göre farklı bileşenlerin render edilmesini sağlayan bir kütüphanedir.",
        "CSS stillerini yönetmek için kullanılır.",
        "Veritabanı işlemlerini gerçekleştiren bir araçtır.",
        "Sunucu tarafı render işlemlerini optimize eder."
      ],
      answer: "React uygulamalarında farklı URL'lere göre farklı bileşenlerin render edilmesini sağlayan bir kütüphanedir."
    },
    {
      question: "Redux nedir ve neden tercih edilir?",
      options: [
        "JavaScript uygulamaları için öngörülebilir bir state yönetim kütüphanesidir.",
        "CSS stillerini dinamik olarak değiştirmek için kullanılır.",
        "Veritabanı bağlantılarını yönetmek için kullanılan bir araçtır.",
        "Sunucu tarafı işlemlerini hızlandıran bir modüldür."
      ],
      answer: "JavaScript uygulamaları için öngörülebilir bir state yönetim kütüphanesidir."
    },
    {
      question: "Redux Toolkit nedir ve neden tercih edilir?",
      options: [
        "Redux ile state yönetimini daha kolay ve verimli hale getiren bir araçtır.",
        "CSS animasyonlarını yönetmek için kullanılır.",
        "Veritabanı işlemlerini optimize eden bir kütüphanedir.",
        "Sunucu tarafı render işlemlerini basitleştiren bir modüldür."
      ],
      answer: "Redux ile state yönetimini daha kolay ve verimli hale getiren bir araçtır."
    },
    {
      question: "React 'dispatch' fonksiyonu ne için kullanılır?",
      options: [
        "Redux store'a action göndermek için kullanılır.",
        "CSS stillerini değiştirmek için kullanılır.",
        "Veritabanı sorguları yapmak için kullanılır.",
        "Sunucu tarafı işlemlerini başlatmak için kullanılır."
      ],
      answer: "Redux store'a action göndermek için kullanılır."
    }
  ];
  
  export default questions;
  