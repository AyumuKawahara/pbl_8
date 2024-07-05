export type Univ = {
  univ_id: number
  dep_id: number
  bunri: number
  univ_name: string
  dep: string
  desc: string
}

//bunri 文系0,理系1

export const univs: Univ[] = [
  // 医学部:1 理学部:2 工学部:3 薬学部:4 農学部:5
  // 情報学部:21 建築学部:22
  // 文学部:6 法学部:7 経済学部:8 外国語学部:9 商学部:10
  // 社会学部:11
  {
    univ_id: 1,
    dep_id: 1,
    bunri: 1,
    univ_name: '東京大学',
    dep: '理科III類',
    desc: '「生物学、化学、物理学を中心とする生命科学・物質科学・数理科学の基礎」を学びます.\n理学部・工学部・農学部に進学する学生の多い科類です.',
  },
  {
    univ_id: 1,
    dep_id: 2,
    bunri: 1,
    univ_name: '東京大学',
    dep: '理科II類',
    desc: '「生物学、化学、物理学を中心とする生命科学・物質科学・数理科学の基礎」を学びます.\n理学部・工学部・農学部に進学する学生の多い科類です.',
  },
  {
    univ_id: 1,
    dep_id: 2,
    bunri: 1,
    univ_name: '東京大学',
    dep: '理科I類',
    desc: '「数学、物理学、化学を中心とする数理科学・物質科学・生命科学の基礎」を学びます.\n理学部・工学部に進学する学生の多い科類です.',
  },
  {
    univ_id: 1,
    dep_id: 6,
    bunri: 0,
    univ_name: '東京大学',
    dep: '文科III類',
    desc: '「言語、思想、歴史を中心とする人文科学全般の基礎」を学びます.\n文学部・教育学部に進学する学生の多い科類です.',
  },
  {
    univ_id: 1,
    dep_id: 8,
    bunri: 0,
    univ_name: '東京大学',
    dep: '文科II類',
    desc: '「経済を中心とする社会科学全般の基礎」を学びます.\n経済学部に進学する学生の多い科類です.',
  },
  {
    univ_id: 1,
    dep_id: 7,
    bunri: 0,
    univ_name: '東京大学',
    dep: '文科I類',
    desc: '「法と政治を中心とする社会科学全般の基礎」を学びます.\n法学部に進学する学生の多い科類です.',
  },
  {
    univ_id: 2,
    dep_id: 2,
    bunri: 1,
    univ_name: '東京工業大学',
    dep: '理学院',
    desc: 'A',
  },
  {
    univ_id: 2,
    dep_id: 3,
    bunri: 1,
    univ_name: '東京工業大学',
    dep: '工学院',
    desc: 'A',
  },
  {
    univ_id: 2,
    dep_id: 3,
    bunri: 1,
    univ_name: '東京工業大学',
    dep: '物質理工学院',
    desc: 'A',
  },
  {
    univ_id: 2,
    dep_id: 21,
    bunri: 1,
    univ_name: '東京工業大学',
    dep: '情報理工学院',
    desc: 'A',
  },
  {
    univ_id: 2,
    dep_id: 3,
    bunri: 1,
    univ_name: '東京工業大学',
    dep: '生命理工学院',
    desc: 'A',
  },
  {
    univ_id: 2,
    dep_id: 22,
    bunri: 1,
    univ_name: '東京工業大学',
    dep: '環境・社会理工学院',
    desc: 'A',
  },
  {
    univ_id: 3,
    dep_id: 10,
    bunri: 0,
    univ_name: '一橋大学',
    dep: '商学部',
    desc: '3年次に商学科と経営学科を選択します.',
  },
  {
    univ_id: 3,
    dep_id: 8,
    bunri: 1,
    univ_name: '一橋大学',
    dep: '経済学部',
    desc: '経済理論・経済統計専攻,応用経済専攻,経済史・地域経済専攻,比較経済・地域開発専攻の4専攻体制を執っています.',
  },
  {
    univ_id: 3,
    dep_id: 7,
    bunri: 0,
    univ_name: '一橋大学',
    dep: '法学部',
    desc: '法学や国際関係論の研究教育を主に行っています.',
  },
  {
    univ_id: 3,
    dep_id: 11,
    bunri: 0,
    univ_name: '一橋大学',
    dep: '社会学部',
    desc: '社会学を筆頭とし,哲学,心理学など多岐にわたる分野の教育・研究を行っている.',
  },
  // {
  //   univ_id: 4,
  //   dep_id: 1,
  //   bunri: 1
  //   univ_name: '京都大学',
  //   dep: '医学部',
  //   desc: 'A',
  // },
  // {
  //   univ_id: 5,
  //   dep_id: 1,
  //   bunri: 1,
  //   univ_name: '大阪大学',
  //   dep: '医学部',
  //   desc: 'A',
  // },
  // {
  //   univ_id: 6,
  //   dep_id: 1,
  //   bunri: 1,
  //   univ_name: '神戸大学',
  //   dep: '医学部',
  //   desc: 'A',
  // },
  // {
  //   univ_id: 7,
  //   dep_id: 1,
  //   bunri: 1,
  //   univ_name: '東北大学',
  //   dep: '医学部',
  //   desc: 'A',
  // },
  // {
  //   univ_id: 8,
  //   dep_id: 1,
  //   bunri: 1,
  //   univ_name: '北海道大学',
  //   dep: '医学部',
  //   desc: 'A',
  // },
  // {
  //   univ_id: 9,
  //   dep_id: 1,
  //   bunri: 1,
  //   univ_name: '名古屋大学',
  //   dep: '医学部',
  //   desc: 'A',
  // },
  // {
  //   univ_id: 10,
  //   dep_id: 1,
  //   bunri: 1,
  //   univ_name: '九州大学',
  //   dep: '医学部',
  //   desc: 'A',
  // },
]
