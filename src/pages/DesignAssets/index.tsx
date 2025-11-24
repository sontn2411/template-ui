import {
  foodAruku,
  foodHashi,
  foodTako,
  foodTamanegi,
  mainAnago,
  mainHana,
  mainTako,
  mainTamanegi,
  mainUnni,
  playInu,
  playKi,
  playKirakiral,
  playKumo,
  playTaiyou,
} from '../../assets/index'

const dataArray = [
  {
    id: 1,
    name: 'Tako',
    image: mainTako,
    className: 'w-[138px] h-[151px]  tako-animate',
  },
  {
    id: 2,
    name: 'Unni',
    image: mainUnni,
    className: 'w-[340px] h-[200px]  tuni-animate',
  },
  {
    id: 3,
    name: 'Hana',
    className: 'w-[160px] h-[104px] hana-animate',
    image: mainHana,
  },
  {
    id: 4,
    name: 'Anago',
    className: 'w-[180px] h-[100px] anago-animate',
    image: mainAnago,
  },
  {
    id: 5,
    name: 'Tamanegi',
    className: 'w-[93px] h-[114px] tamanegi-animate ',
    image: mainTamanegi,
  },
  {
    id: 6,
    name: 'Food Hashi',
    className: 'w-[110px] h-[120px] food-Hashi-animate',
    image: foodHashi,
  },
  {
    id: 7,
    name: 'Food Tamanegi',
    className: 'w-[71px] h-[59px] food-Tamanegi-animate',
    image: foodTamanegi,
  },
  {
    id: 8,
    name: 'Food Tako',
    className: 'w-[82px] h-[74px] food-Tako-animate',
    image: foodTako,
  },
  {
    id: 9,
    name: 'Food Aruku',
    className: 'w-[372px] h-[77px] food-Aruku-animate',
    image: foodAruku,
  },
  {
    id: 10,
    name: 'Play Kumo',
    className: 'w-[196px] h-[52px] play-Kumi-animate',
    image: playKumo,
  },
  {
    id: 11,
    name: 'Play Kirakiral',
    className: 'w-[229px] h-[125px] play-Kirakiral-animate',
    image: playKirakiral,
  },
  {
    id: 12,
    name: 'Play Inu',
    className: 'w-[51px] h-[34px] play-inu-animate ',
    image: playInu,
  },
  {
    id: 13,
    name: 'Play Ki',
    className: 'w-[100px] h-[110px] play-ki-animate ',
    image: playKi,
  },
  {
    id: 12,
    name: 'Play taiyou',
    className: 'w-[71px] h-[70px] play-taiyou-animate ',
    image: playTaiyou,
  },
]

const PageDesignAssets = () => {
  return (
    <div className='flex flex-wrap gap-10'>
      {dataArray.map((item) => (
        <div key={item.id} className=''>
          <div
            className={`${item.className} bg-no-repeat`}
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        </div>
      ))}
    </div>
  )
}

export default PageDesignAssets
