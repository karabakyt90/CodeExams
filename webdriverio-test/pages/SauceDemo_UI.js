class TestDemo {

  get userName() { return $("#user-name"); }

  get password() { return $("#password") }

  get logingBtn() { return $("[className = 'btn_action']") }

  get dropdown() { return $("[className='product_sort_container']") }

  get productsTitle1() { return $("#item_2_title_link"); }

  get productsTitle2() { return $("#item_1_title_link"); }

  get first_name() { return $("#first-name"); }

  get last_name() { return $("#last-name"); }

  get postalcode() { return $("#postal-code"); }

  get getItem1() { return $("#item_1_title_link"); }

  get getItem2() { return $("#item_4_title_link"); }

  get totalprice() { return $("[className = 'summary_total_label]"); }

  get finish() { return $("[linkText='FINISH']"); }

  get removebutton() { return $("[xpath='(//*[@class='btn_secondary cart_button'])[1]']"); }

  get continueShopping() { return $("[xpath='(//*[@class='btn_secondary'])[1]']"); }

  get checkout() { return $("[xpath=(//*[text()='CHECKOUT']"); }

  get item1() { return $("(xpath=//*[@class='btn_primary btn_inventory'])[1]"); }

  get item2() { return $("(xpath=//*[@class='btn_primary btn_inventory'])[2]") ;}

  get continue1() { return $("(xpath=//*[@class='btn_primary cart_button']"); }


}


export default new TestDemo();