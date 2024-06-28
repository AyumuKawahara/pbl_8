export type Univ = {
  univ_id: number
  dep_id: number
  bunkei: number
  rikei: number
  univ_name: string
  dep: string
}

export const univs: Univ[] = [
  // 医学部:1
  {
    univ_id: 1,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '東京大学',
    dep: '理科III類',
  },
  {
    univ_id: 1,
    dep_id: 2,
    bunkei: 0,
    rikei: 100,
    univ_name: '東京大学',
    dep: '理科II類',
  },
  {
    univ_id: 2,
    dep_id: 0,
    bunkei: 0,
    rikei: 100,
    univ_name: '東京工業大学',
    dep: 'あ',
  },
  {
    univ_id: 3,
    dep_id: 0,
    bunkei: 0,
    rikei: 40,
    univ_name: '一橋大学',
    dep: 'あ',
  },
  {
    univ_id: 4,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '京都大学',
    dep: '医学部',
  },
  {
    univ_id: 5,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '大阪大学',
    dep: '医学部',
  },
  {
    univ_id: 6,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '神戸大学',
    dep: '医学部',
  },
  {
    univ_id: 7,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '東北大学',
    dep: '医学部',
  },
  {
    univ_id: 8,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '北海道大学',
    dep: '医学部',
  },
  {
    univ_id: 9,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '名古屋大学',
    dep: '医学部',
  },
  {
    univ_id: 10,
    dep_id: 1,
    bunkei: 0,
    rikei: 100,
    univ_name: '九州大学',
    dep: '医学部',
  },
]

export const usr = [{ bunkei: 50, rikei: 50 }]
// bunkei:文系度，rikei:理系度
