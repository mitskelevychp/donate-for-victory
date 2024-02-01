import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Form, Field, ErrorMessage, Formik,
} from "formik";
import { object, string } from "yup";
import CartItem from "./CartItem";
import { FormButton } from "../../components/button/Button";
import { NEW_CART_URL, MAKE_ORDERS } from "../../endpoints/endpoints";
import { resetCart } from "../../redux/actions/cartActions";
import { deleteCart } from "../../api/updateCart";
import styles from "./Cart.module.scss";

function LoginModalPurchase() {
  return (
    <div className={styles.loginModalPurchase}>
      Покупка оформлена!
    </div>
  );
}


function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, "0")}${currentDate.getDate().toString().padStart(2, "0")}`;
  const orderNumber = `52-${formattedDate}`;
  const isCartEmpty = cartItems.length === 0;
  const dispatch = useDispatch();
  const isUserLoggedIn = localStorage.getItem("userLogin") || null;
  const [openForm, setOpenForm] = useState(false);
  const [showLoginModalPurchase, setShowLoginModalPurchase] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const timerRef = useRef();

  function promptPurchase() {
    setShowLoginModalPurchase(true);
    timerRef.current = setTimeout(() => {
      setShowLoginModalPurchase(false);
    }, 2000);
  }
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  async function getCartFromServer() {
    try {
      const response = await axios.get(NEW_CART_URL);
      return response.data;
    } catch (err) {
      console.error("Помилка при отриманні даних:", err);
      return null;
    }
  }

  const showForm = async () => {
    setOpenForm(true);
  };

  const handlePurchase = async (firstName = "", lastName = "", phone = "", email = "", region = "", city = "", address = "", postal = "", addressNp = "") => {
    if (isUserLoggedIn !== null) {
      try {
        const cartData = await getCartFromServer();
        if (cartData !== null) {
          const { _id: customerId } = cartData.customerId;
          const newOrder = {
            customerId,
            deliveryAddress: {
              region,
              city,
              address,
              postal,
              addressNp,
            },
            canceled: false,
            email,
            firstName,
            lastName,
            mobile: phone,
            letterSubject: "Дякуємо за покупку та весок на підтримку ЗСУ!",
            letterHtml: `<h1>Ваше замовлення прийнято. Номер замовлення - ${orderNumber}.</h1><p>Ми переможемо!</p>`,
          };
  
          axios
            .post(MAKE_ORDERS, newOrder)
            .then((response) => {
              if (response.status === 200) {
                localStorage.setItem("Cart", JSON.stringify([]));
                dispatch(resetCart());
                deleteCart();
                setOpenForm(false);
                promptPurchase();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (error) {
        console.error("Помилка при вході:", error);
      }
    } else {
      try {
        const cartData = JSON.parse(localStorage.getItem("Cart")) || null;
        if (cartData !== null) {
          const productsForOrder = cartData.map((item) => ({
            product: {
              category: item.category,
              date: item.date,
              enabled: item.enabled,
              itemNo: item.itemNo,
              name: item.name,
              // eslint-disable-next-line no-underscore-dangle
              _id: item._id,
              quantity: item.quantity,
              size: item.selectedSize,
              currentPrice: item.currentPrice,
            },
            cartQuantity: item.cartQuantity,
          }));
          const newOrder = {
            products: productsForOrder,
            deliveryAddress: {
              region,
              city,
              address,
              postal,
              addressNp,
            },
            canceled: false,
            firstName,
            lastName,
            email,
            mobile: phone,
            letterSubject: "Дякуємо за покупку та весок на підтримку ЗСУ!",
            letterHtml: `<h1>Ваше замовлення прийнято. Номер замовлення - ${orderNumber}.</h1><p>Ми переможемо!</p>`,
          };
  
          axios
            .post(MAKE_ORDERS, newOrder)
            .then((response) => {
              if (response.status === 200) {
                localStorage.setItem("Cart", JSON.stringify([]));
                dispatch(resetCart());
                setOpenForm(false);
                promptPurchase();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (error) {
        console.error("Помилка при вході:", error);
      }
    }
  };

  const validationSchema = object().shape({
    firstName: string()
      .required("Поле 'Ім'я' є обов'язковим для заповнення")
      .matches(/[a-zA-Zа-яА-ЯіІїЇ'єЄ]/, "Дозволені символи для ім'я a-z, A-Z, а-я, А-Я")
      .min(2, "Ім'я має містити від 2 до 25 символів")
      .max(25, "Ім'я має містити від 2 до 25 символів"),
    lastName: string()
      .required("Поле 'Прізвище' є обов'язковим для заповнення")
      .matches(/[a-zA-Zа-яА-ЯіІїЇ'єЄ]/, "Дозволені символи для ім'я a-z, A-Z, а-я, А-Я")
      .min(2, "Ім'я має містити від 2 до 25 символів")
      .max(25, "Ім'я має містити від 2 до 25 символів"),
    phone: string()
      .required("Поле 'Телефон' обов'язковим для заповнення")
      .matches(/\d{3}\d{2}\d{2}\d{2}/, "Некорректний формат телефонного номера"),
    email: string()
      .email("Некорректний формат електронної адреси")
      .required("Поле 'email' є обов'язковим для заповнення"),
    region: string()
      .matches(/[a-zA-Zа-яА-ЯіІїЇ'єЄ]/, "Дозволені символи для ім'я a-z, A-Z, а-я, А-Я"),
    city: string()
      .matches(/[a-zA-Zа-яА-ЯіІїЇ'єЄ]/, "Дозволені символи для прізвища a-z, A-Z, а-я, А-Я"),
    address: string()
      .matches(/[a-zA-Zа-яА-ЯіІїЇ'єЄ]/, "Дозволені символи для прізвища a-z, A-Z, а-я, А-Я"),
    postal: string()
      .matches(/[0-9]/, "Дозволені символи для пароля: 0-9"),
  });

  
  return (
    <div className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Кошик</h1>
      <p className={styles.cardsSectionText}>Ваші замовлення</p>
      {/* eslint-disable-next-line max-len */}
      { showLoginModalPurchase && <LoginModalPurchase onClose={() => setShowLoginModalPurchase(false)} /> }
      {/* eslint-disable-next-line max-len */}
      {isCartEmpty ? <p className={!showLoginModalPurchase ? styles.cartEmpty : styles.hidden}>Ваш кошик порожній</p>
        : (
          <>
            <div className={styles.cardsListWrapper}>
              {cartItems.map((item) => (
                // eslint-disable-next-line no-underscore-dangle
                <CartItem key={item._id} item={item} />
              ))}
            </div>
            <div className={styles.totalPriceWrapper}>
              <div className={styles.totalPrice}>
                <p>Всього на суму:</p>
                <p>
                  {cartItems.reduce((total, item) => {
                    const price = parseFloat(item.currentPrice);
                    const quantity = parseInt(item.cartQuantity, 10);
                    const sum = total + (price * quantity);
                    return sum;
                  }, 0).toFixed(2)}
                  &nbsp;грн
                </p>
              </div>
            </div>
            <FormButton
              text="Оформити замовлення"
              padding="10px"
              onClick={showForm}
              className={openForm ? styles.hidden : styles.buttonStyle}
            />
          </>
        )}
      <div className={openForm && !isCartEmpty ? styles.formSectionWrapper : styles.hidden}>
        <div className={styles.formWrapper}>
          <h1 className={styles.headline}>Оформлення замовлення</h1>
          <p className={`${styles.text} ${styles.headlineText}`}>Заповніть форму</p>
          <p className={`${styles.textForm}`}>Ваші контактні дані</p>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              region: "",
              city: "",
              address: "",
              postal: "",
              addressNp: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              handlePurchase(
                values.firstName,
                values.lastName,
                values.phone,
                values.email,
                values.region,
                values.city,
                values.address,
                values.postal,
                values.addressNp,
              );
              setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >

            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.dataCustomerWrapper}>
                  <div className={styles.nameCustomer}>
                    <Field name="firstName">
                      {({ field, meta }) => (
                        <input
                          {...field}
                          id="firstName"
                          // eslint-disable-next-line max-len
                          className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                          placeholder="Ім'я"
                        />
                      )}
                    </Field>
                    <Field name="lastName">
                      {({ field, meta }) => (
                        <input
                          {...field}
                          id="lastName"
                          // eslint-disable-next-line max-len
                          className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                          placeholder="Прізвище"
                        />
                      )}
                    </Field>
                    <Field name="phone">
                      {({ field, meta }) => (
                        <input
                          {...field}
                          id="phone"
                          // eslint-disable-next-line max-len
                          className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                          placeholder="Телефон"
                        />
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, meta }) => (
                        <input
                          {...field}
                          id="email"
                          // eslint-disable-next-line max-len
                          className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                          placeholder="email"
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <p className={`${styles.textForm}`}>Дані для доставлення</p>
                <div className={styles.deliverySection}>
                  <div>
                    <input
                      type="radio"
                      id="shop"
                      value="shop"
                      checked={selectedOption === "shop"}
                      onChange={handleChange}
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="shop" className={styles.text}>Самовивіз з магазину</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="courier"
                      value="courier"
                      checked={selectedOption === "courier"}
                      onChange={handleChange}
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="courier" className={styles.text}>Кур&apos;єр на зазначену адресу</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="np"
                      value="np"
                      checked={selectedOption === "np"}
                      onChange={handleChange}
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="option3" className={styles.text}>Самовивіз з Нової Пошти</label>
                  </div>
                </div>
                <div className={styles.adressWrapper}>
                  {selectedOption === "shop" && <div className={styles.shopAdres}>Адреса магазину: м. Київ, вул. Незалежность 11 а</div>}
                  {selectedOption === "courier" && (
                    <div>
                      <Field name="region">
                        {({ field, meta }) => (
                          <input
                            {...field}
                            id="region"
                            // eslint-disable-next-line max-len
                            className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                            placeholder="Область"
                          />
                        )}
                      </Field>
                      <Field name="city">
                        {({ field, meta }) => (
                          <input
                            {...field}
                            id="city"
                            // eslint-disable-next-line max-len
                            className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                            placeholder="Населений пункт"
                          />
                        )}
                      </Field>
                      <Field name="address">
                        {({ field, meta }) => (
                          <input
                            {...field}
                            id="address"
                            // eslint-disable-next-line max-len
                            className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                            placeholder="Адреса (вулиця, будинок, квартира)"
                          />
                        )}
                      </Field>
                      <Field name="postal">
                        {({ field, meta }) => (
                          <input
                            {...field}
                            id="postal"
                            // eslint-disable-next-line max-len
                            className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                            placeholder="Поштовий індекс"
                          />
                        )}
                      </Field>
                    </div>
                  )}
                  {selectedOption === "np" && (
                    <Field name="addressNp">
                      {({ field, meta }) => (
                        <input
                          {...field}
                          id="addressNp"
                          // eslint-disable-next-line max-len
                          className={meta.touched && meta.error ? styles.inputAttention : styles.input}
                          placeholder="Місто та № відділення Нової Пошти"
                        />
                      )}
                    </Field>
                  )}
                </div>

                <div className={styles.errorsWrapper}>
                  <ErrorMessage name="firstName" component="p" className={styles.textAttention} />
                  <ErrorMessage name="lastName" component="p" className={styles.textAttention} />
                  <ErrorMessage name="phone" component="p" className={styles.textAttention} />
                  <ErrorMessage name="email" component="p" className={styles.textAttention} />
                  <ErrorMessage name="region" component="p" className={styles.textAttention} />
                  <ErrorMessage name="city" component="p" className={styles.textAttention} />
                  <ErrorMessage name="address" component="p" className={styles.textAttention} />
                  <ErrorMessage name="postal" component="p" className={styles.textAttention} />
                </div>

                <div className={styles.buttonWrapper}>
                  <FormButton
                    type="submit"
                    disabled={isSubmitting}
                    text="Придбати"
                    padding="10px"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Cart;
