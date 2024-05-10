import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toppings from '.';

test('sosları ekleme ve cıkarma işlenkerşnin toplam fiyata olan etkisis', async ()=> {
    const user= userEvent.setup();

    //bileşen, renderla
    render( <Toppings/>)

    //toplam spanı al
    const total =screen.getByTestId('total');

    //bütün sos checkboxlarını al
    const toppings =await screen.findAllByRole('checkbox')

    //toplam sıfır mı kontrol et
    expect(total.textContent).toBe('0')

    //bütün checkboxlar tiklenmediğini kontrol et
   toppings.forEach((i)=>expect(i).not.toBeChecked());

   //checkboxlardan birini tikle
   await user.click(toppings[0]);

   //toplam alan 3 mü kontrol et
   expect(total.textContent).toBe('3');

   //checkboxlardan birini tikle
   await user.click(toppings[4]);

   //toplam alan 6 mı kontrol ert
   expect(total.textContent).toBe('6');

   //tiklenenlerden birini kaldır
   await user.click(toppings[4]);

   //toplam alan 3 mü kontrol et
   expect(total.textContent).toBe('3');

   //tiklenenlerden digerini kaldır 
await user.click(toppings[0]);

   //toplam alan sıfır mı kontrol et
   expect(total.textContent).toBe('0');
})