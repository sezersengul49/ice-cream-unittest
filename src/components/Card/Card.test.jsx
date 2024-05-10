import { render, screen } from "@testing-library/react";
import Card from "./index";
import userEvent from "@testing-library/user-event";

const item = {
  id: "123",
  name: "Vanilla",
  imagePath: "/images/vanilla.png",
};
//prop olarak veri alan bir bileşeni test ederken aldıgı propların benzerini göndermemiz gerekiyor
test("Miktar baslık ve fotograf gelen propa göre ekrana basılır", () => {
  render(<Card 
    item={item} 
  
    amount={5} />);
//miktar spanını cagır
   const amount= screen.getByTestId('amount')

   //miktar 5 mi kontrol et
   expect(amount.textContent).toBe('5')

   //vanilla yazısı ekrana geldi mi
   screen.getByText('Vanilla')

   //resmi al
const image= screen.getByAltText('çeşit-resim')

   //src degeri gönderilen propa göre mi kontrol et
expect(image).toHaveAttribute('src', '/images/vanilla.png')

});



test("butonlara tıklanınca fonksiyonlar dogru parametrelerle cagrılır",async ()=>{

const user= userEvent.setup();
//asil fonksiyonlar yerine test fonksiyonları gönderecegiz
const addMockFn= jest.fn();
const clearMockFn= jest.fn()

render ( <Card
item={item}
amount={0}
addToBasket={addMockFn}
clearFromBasket= {clearMockFn}
/>)
//butonları al
const addBtn= screen.getByRole('button', {name: /ekle/i});
const clearBtn= screen.getByRole('button', {name: /sıfırla/i});


//ekle butonuna tıkla
await user.click(addBtn)

//addToBasket fonsksiyonu dogru parametleri alıp calıstı mı
expect(addMockFn).toHaveBeenCalledWith(item);

//sıfırla butonuna tıkla
await user.click(clearBtn)

//clearFromBasket fonsksiyonu dogru parametleri alıp calıstı mı
expect(clearMockFn).toHaveBeenCalledWith(item.id);

})