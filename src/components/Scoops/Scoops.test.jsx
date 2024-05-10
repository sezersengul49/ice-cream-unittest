import { fireEvent, render,screen } from "@testing-library/react"
import Scoops from "."
import userEvent from '@testing-library/user-event'

//find methodu apı dan veri alınca bekleyince kullanılır.

test('API den alınan veriler icin ekrana kartlar basılır' , async()=> {
render( <Scoops/>);

//ekrana  basılan resimleri al
const images = await  screen.findAllByAltText('çeşit-resim');

//gelen kartların sayısı 1 den büyük veya eşit mi

expect(images.length).toBeGreaterThanOrEqual(1)
})

test('Çeşitlerin ekleme ve sıfırlama özellikleri toplam fiyatı etkiler',async() => {
  const user=  userEvent.setup();

    //bileşeni ekrana bas
render( <Scoops/>);

    //bütün ekleme ve sfırılama butonlarını cagır
const addButtons= await screen.findAllByRole('button', {name:/ekle/i})
const delButtons= await screen.findAllByRole('button', {name:/sıfırla/i})

    //toplam fiyat elementini cagır
const total=screen.getByTestId('total')

    //toplam fıyat sıfır mı kontrol et
expect(total.textContent).toBe('0')

//ekle butonlarından birine tıkla
 await user.click(addButtons[0])

//toplam fiyat 20 mi kontrol et 
expect(total.textContent).toBe('20')

//ekle butonlarından birine daha cift tıkla 
await user.dblClick(addButtons[2])

//toplam fiyat 60 mı
expect(total.textContent).toBe('60')


//ilk ekleneni kaldır
await user.click(delButtons[0])

//toplam fiyat 40 mı kontrol et
expect(total.textContent).toBe('40')


//ikinci ekleneni kaldır
await user.click(delButtons[2]);

//toplam fiyat sıfır mı kontrol et
expect(total.textContent).toBe('0');
})