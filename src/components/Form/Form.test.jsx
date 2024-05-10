import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onaylanmasına göre buton aktifliği", () => {
  render(<Form />);

  //gerekli elemanları cagır
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  //checbox tiklenmiş mi kontrol
  expect(checkbox).not.toBeChecked();
  //butonun disabled oldugunu komtrol et
  expect(button).toBeDisabled();
  //checboxxa tıkla
  fireEvent.click(checkbox);
  //buton aktif oldugunu kontrol ederiz
  expect(button).toBeEnabled();
  //checkboxa tıkla
  fireEvent.click(checkbox);
  //buton inaktif oldugunu kontrol et
  expect(button).toBeDisabled();
});

test("Butonun hover durumunna göre bildiirm görünür" , ()=> {
  //formu renderle
render( <Form/>)

  //gerekli elemanları al
const button= screen.getByRole("button");
const checkbox= screen.getByRole("checkbox");
const alert= screen.getByText(/size gerçekten/i);

  //checkboxu tikle
fireEvent.click(checkbox);

  //bildirimin ekramda olmadıgnı kontrol et
expect(alert).not.toBeVisible()

  //mousu botuna getir
  fireEvent.mouseEnter(button)

  //bildirim ekrana geldi mi kontrol et

expect(alert).toBeVisible();
  //mousu butomdam cek
fireEvent.mouseLeave(button)

  //bildirim ekranda yok mu kontrol et
  expect(alert).not.toBeVisible();
})