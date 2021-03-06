import React from "react";
import { Button, Input, Checkbox, Select, Radio } from "antd";

const hotManufactures = 'Acer, AOC, ASUS, BenQ, DELL, HP, Iiyama, LG, NEC, Philips, Samsung, Viewsonic'.split(", ")
const tailManufactures = 'Alienware, Azor, Eizo, Lenovo, MSI'.split(", ")
const manufactures = [ ...hotManufactures, ...tailManufactures].sort()
console.log(manufactures.sort())
// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const selectStyle = {width: '100%'}
const Option  = Select.Option
const OptGroup = Select.OptGroup
const RadioGroup = Radio.Group
const deliveries = {
  with:"с доставкой",
  without: "самовывоз",
  any: "любой",
}
const radioStyle = {display: 'block', height: '23px', lineHeight: '30px'}
// let oldLitera

const groupedManufactures = manufactures.reduce((accum, item) => {
  const litera = item[0]
  const list = accum[litera] || []
  list.push(item)
  accum[litera] = list 
  return accum  
}, {});


class SearchLayout2 extends React.Component {
  render() {
    return (
      <div className="search-layout">
        <div>
          <div
            className="_18Ke-OpxeG"
            data-d49f65c5="true"
            data-reactroot
            data-reactid={1}
          >
            <div className="uSBwpmLzLQ" data-e8e9edc5="true" data-reactid={2}>
              <div className="_1dg-mVVfwq" data-reactid={3}>
                <div
                  data-zone-name="minimap"
                  data-zone-data="{pageId:market:list,region:157,outletsCount:4}"
                  data-reactid={4}
                >
                  <div data-f80b03eb="true" data-reactid={5}>
                    <div
                      className="_2Uen9ecS3a"
                      data-9c5c5c8b="true"
                      data-reactid={6}
                    >
                      <span className="_3xtMbW8XL4" data-reactid={7}>
                        Магазины на карте
                      </span>
                    </div>
                    <div data-9d6dc3aa="true" data-reactid={8}>
                      <a
                        href="https://market.yandex.by/geo?nid=54539&suggestText=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&hid=91052"
                        className="_2qvOOvezty _19m_jhLgZR"
                        data-712821aa="true"
                        data-reactid={9}
                      >
                        <div className="_1wa1BfeBkk" data-reactid={10}>
                          <img
                          alt=""
                            src="./old/saved_resource"
                            className="PvnQESFJHu"
                            data-reactid={11}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_1dg-mVVfwq" data-reactid={13}>
                <div
                  className="SMIUZQVy8Y"
                  data-e66a5985="true"
                  data-reactid={14}
                >
                  <div
                    className="_2Uen9ecS3a"
                    data-9c5c5c8b="true"
                    data-reactid={15}
                  >
                    <span className="_3xtMbW8XL4" data-reactid={16}>
                      Категории
                    </span>
                  </div>
                  <ul
                    className="_2BLXswkhGO"
                    data-e66a5985="true"
                    data-reactid={17}
                  >
                    <li
                      className="_2HihpwObsk"
                      data-e66a5985="true"
                      data-reactid={18}
                    >
                      <a
                        className="_38YjhiFMWW"
                        href="https://market.yandex.by/catalog/54425/list?onstock=1&deliveryincluded=0&local-offers-first=0&text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&cvredirect=3&track=srch_ddl"
                        data-2f9fe585="true"
                        data-reactid={19}
                      >
                        <span className="" data-70f80245="true" data-reactid={20}>
                          Компьютерная техника
                        </span>
                      </a>
                      <ul
                        className="_2BLXswkhGO"
                        data-e66a5985="true"
                        data-reactid={21}
                      >
                        <li
                          className="_2HihpwObsk"
                          data-e66a5985="true"
                          data-reactid={22}
                        >
                          <a
                            className="_38YjhiFMWW"
                            href="https://market.yandex.by/catalog/58486/list?onstock=1&deliveryincluded=0&local-offers-first=0&text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&cvredirect=3&track=srch_ddl"
                            data-2f9fe585="true"
                            data-reactid={23}
                          >
                            <span
                              className=""
                              data-70f80245="true"
                              data-reactid={24}
                            >
                              Периферийные устройства компьютера
                            </span>
                          </a>
                          <ul
                            className="_2BLXswkhGO"
                            data-e66a5985="true"
                            data-reactid={25}
                          >
                            <li
                              className="_2HihpwObsk _3-af5SeCJi"
                              data-e66a5985="true"
                              data-reactid={26}
                            >
                              <a
                                href="/"
                                className="_38YjhiFMWW _3OOgSGfeZO"
                                data-2f9fe585="true"
                                data-reactid={27}
                              >
                                <span
                                  className=""
                                  data-70f80245="true"
                                  data-reactid={28}
                                >
                                  Мониторы
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span
                    className="_2BLXswkhGO _3-af5SeCJi"
                    data-e66a5985="true"
                    data-reactid={29}
                  >
                    <a
                      className="link link_theme_normal i-bem link_js_inited"
                      href="https://market.yandex.by/search?text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&cvredirect=0&track=redirbartree"
                      tabIndex={0}
                      data-reactid={30}
                    >
                      {}Все результаты поиска{}
                    </a>
                  </span>
                </div>
              </div>
              <div className="_1dg-mVVfwq" data-reactid={32}>
                <div
                  className="_1vMoBTNhsM"
                  data-6d8f6c05="true"
                  data-reactid={33}
                >
                  <div
                    className="_2Uen9ecS3a"
                    data-9c5c5c8b="true"
                    data-reactid={34}
                  />
                  <div className="_178jz2CyDL" data-reactid={35}>
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={36}
                    >
                      <fieldset
                        className="_38PayafmjD"
                        data-4b88e4e5="true"
                        data-reactid={37}
                      >
                        <legend className="babsHy47c5" data-reactid={38}>
                          Цена, б.p.
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={39}
                        >
                          <ul className="lih4lXS8EN" data-reactid={40}>
                            <li className="_3E2Wzu8o3H" data-reactid={41}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="from"
                                data-214865aa="true"
                                data-reactid={42}
                              >
                              <Input addonBefore='от' />
                              </p>
                            </li>
                            <li className="_3E2Wzu8o3H" data-reactid={46}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="to"
                                data-214865aa="true"
                                data-reactid={47}
                              >
                                <Input addonBefore='до' />
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="_2vOXvqbQ4f"
                          data-bccec8a7="true"
                          data-reactid={51}
                        >
                          <Checkbox>Цена с учетом доставки</Checkbox>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={56}>
                        {}
                      </div>
                    </div>
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={58}
                    >
                    {/*
                      <fieldset
                        data-autotest-id="onstock"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={59}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={60}>
                          В продаже
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={61}
                        >
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="onstock"
                            data-9d4e0d85="true"
                            data-reactid={62}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0412 \u043F\u0440\u043E\u0434\u0430\u0436\u0435"
                              id="onstock"
                              data-reactid={63}
                              defaultValue="on"
                              defaultChecked
                            />
                            <div className="LhMupC0dLR" data-reactid={64}>
                              <span
                                className="NVoaOvqe58 _1gAodJU0Dw"
                                data-reactid={65}
                              >
                                В продаже
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                    */}
                     <Checkbox><b>В продаже</b></Checkbox>
{/*                       <div className="_3vgfOcGSnv" data-reactid={66}>
                        {}
                      </div> */}
                    </div>
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={68}
                    >
                    
                      <fieldset
                        data-autotest-id={7893318}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={69}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={70}>
                          Производитель
                        </legend>
                        <ul
                          className="_2y67xS5HuR"
                          data-da31bdc5="true"
                          data-reactid={71}
                        >
                        <Select mode="multiple" style={selectStyle} placeholder='please select'>
                        {Object.entries(groupedManufactures).map(([litera, list]) => 
                        <OptGroup key={litera}  label={litera}>
                        {list.map((item) => <Option value={item}>{item}</Option>)}
                        </OptGroup>
                        )}

                        </Select>
{/*                         {manufactures.map(item => (<Option value={item}>{item}</Option>
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={79}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={80}
                        ><Checkbox>{item}</Checkbox></div></li>))} */}
                        </ul>


{/*                         <footer
                          className="_2XviVqx9xN"
                          data-da31bdc5="true"
                          data-reactid={156}
                        >
                          <a className="_2Wg9rE1HzR" data-reactid={157} href="/">
                            Показать всё
                          </a>
                        </footer> */}

                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={158}>
                        {}
                      </div>

                    </div>

                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={438}
                    >
                      <fieldset
                        className="_2qWuY12N6f"
                        data-779c2885="true"
                        data-reactid={439}
                      >
                        <legend className="_1nAu9jHf6S" data-reactid={440}>
                          Способ доставки
                        </legend>
                        <RadioGroup>
                          {Object.entries(deliveries).map(([value, title]) => 
                            <Radio style={radioStyle} value={value} key={value}>{title}</Radio>
                            )}
                          
                        </RadioGroup>
                        </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={460}>
                        {}
                      </div>
                    </div>
                  
                  {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={160}
                    >
                      <fieldset
                        data-autotest-id="filter-promo-or-discount"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={161}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={162}>
                          Скидки и акции
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={163}
                        >
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="filter-promo-or-discount"
                            data-9d4e0d85="true"
                            data-reactid={164}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0421\u043A\u0438\u0434\u043A\u0438 \u0438 \u0430\u043A\u0446\u0438\u0438"
                              id="filter-promo-or-discount"
                              data-reactid={165}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={166}>
                              <span
                                className="NVoaOvqe58 _1gAodJU0Dw"
                                data-reactid={167}
                              >
                                Скидки и акции
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={168}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={170}
                    >
                      <fieldset
                        data-autotest-id={15153047}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={171}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={172}>
                          Размер экрана
                        </legend>
                        <ul
                          className="_2y67xS5HuR"
                          data-da31bdc5="true"
                          data-reactid={173}
                        >
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={174}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={175}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153071"
                                data-9d4e0d85="true"
                                data-reactid={176}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 23.1-24"
                                  id="15153047_15153071"
                                  data-reactid={177}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={178}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={179}
                                  >
                                    23.1"-24"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={180}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={181}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153078"
                                data-9d4e0d85="true"
                                data-reactid={182}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 24.1-27"
                                  id="15153047_15153078"
                                  data-reactid={183}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={184}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={185}
                                  >
                                    24.1"-27"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={186}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={187}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153069"
                                data-9d4e0d85="true"
                                data-reactid={188}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 19.1-22"
                                  id="15153047_15153069"
                                  data-reactid={189}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={190}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={191}
                                  >
                                    19.1"-22"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={192}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={193}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153075"
                                data-9d4e0d85="true"
                                data-reactid={194}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 31-40"
                                  id="15153047_15153075"
                                  data-reactid={195}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={196}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={197}
                                  >
                                    31"-40"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={198}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={199}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153074"
                                data-9d4e0d85="true"
                                data-reactid={200}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 22.2-23"
                                  id="15153047_15153074"
                                  data-reactid={201}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={202}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={203}
                                  >
                                    22.2"-23"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer
                          className="_2XviVqx9xN"
                          data-da31bdc5="true"
                          data-reactid={204}
                        >
                          <a className="_2Wg9rE1HzR" data-reactid={205} href="/">
                            Показать ещё 5
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={206}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={208}
                    >
                      <fieldset
                        data-autotest-id={4913586}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={209}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={210}>
                          Макс. разрешение
                        </legend>
                        <ul
                          className="_2y67xS5HuR"
                          data-da31bdc5="true"
                          data-reactid={211}
                        >
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={212}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={213}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103913"
                                data-9d4e0d85="true"
                                data-reactid={214}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 1920x1080"
                                  id="4913586_12103913"
                                  data-reactid={215}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={216}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={217}
                                  >
                                    1920x1080
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={218}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={219}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103918"
                                data-9d4e0d85="true"
                                data-reactid={220}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 2560x1440"
                                  id="4913586_12103918"
                                  data-reactid={221}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={222}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={223}
                                  >
                                    2560x1440
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={224}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={225}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103921"
                                data-9d4e0d85="true"
                                data-reactid={226}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 3840x2160"
                                  id="4913586_12103921"
                                  data-reactid={227}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={228}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={229}
                                  >
                                    3840x2160
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={230}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={231}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103914"
                                data-9d4e0d85="true"
                                data-reactid={232}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 1920x1200"
                                  id="4913586_12103914"
                                  data-reactid={233}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={234}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={235}
                                  >
                                    1920x1200
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={236}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={237}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103903"
                                data-9d4e0d85="true"
                                data-reactid={238}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 1280x1024"
                                  id="4913586_12103903"
                                  data-reactid={239}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={240}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={241}
                                  >
                                    1280x1024
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer
                          className="_2XviVqx9xN"
                          data-da31bdc5="true"
                          data-reactid={242}
                        >
                          <a className="_2Wg9rE1HzR" data-reactid={243} href="/">
                            Показать всё
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={244}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={246}
                    >
                      <fieldset
                        data-autotest-id={4913588}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={247}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={248}>
                          Тип матрицы экрана
                        </legend>
                        <ul
                          className="_2y67xS5HuR"
                          data-da31bdc5="true"
                          data-reactid={249}
                        >
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={250}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={251}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103938"
                                data-9d4e0d85="true"
                                data-reactid={252}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT IPS"
                                  id="4913588_12103938"
                                  data-reactid={253}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={254}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={255}
                                  >
                                    TFT IPS
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={256}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={257}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103947"
                                data-9d4e0d85="true"
                                data-reactid={258}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT TN"
                                  id="4913588_12103947"
                                  data-reactid={259}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={260}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={261}
                                  >
                                    TFT TN
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={262}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={263}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103929"
                                data-9d4e0d85="true"
                                data-reactid={264}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT *VA"
                                  id="4913588_12103929"
                                  data-reactid={265}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={266}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={267}
                                  >
                                    TFT *VA
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={268}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={269}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103932"
                                data-9d4e0d85="true"
                                data-reactid={270}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT AH-IPS"
                                  id="4913588_12103932"
                                  data-reactid={271}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={272}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={273}
                                  >
                                    TFT AH-IPS
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={274}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={275}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103939"
                                data-9d4e0d85="true"
                                data-reactid={276}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT MVA"
                                  id="4913588_12103939"
                                  data-reactid={277}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={278}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={279}
                                  >
                                    TFT MVA
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={280}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={281}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103942"
                                data-9d4e0d85="true"
                                data-reactid={282}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT PLS"
                                  id="4913588_12103942"
                                  data-reactid={283}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={284}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={285}
                                  >
                                    TFT PLS
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={286}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={287}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103930"
                                data-9d4e0d85="true"
                                data-reactid={288}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT A-MVA"
                                  id="4913588_12103930"
                                  data-reactid={289}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={290}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={291}
                                  >
                                    TFT A-MVA
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer
                          className="_2XviVqx9xN"
                          data-da31bdc5="true"
                          data-reactid={292}
                        >
                          <a className="_2Wg9rE1HzR" data-reactid={293} href="/">
                            Показать ещё 4
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={294}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={296}
                    >
                      <fieldset
                        data-autotest-id={4913622}
                        className="_2ESDYRtKSQ"
                        data-7473e865="true"
                        data-reactid={297}
                      >
                        <legend className="_6Ev7l7PxvV" data-reactid={298}>
                          Макс. частота обновления кадров, Гц
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={299}
                        >
                          <ul className="_1DYevRkiWL" data-reactid={300}>
                            <li className="_1W_iTekL7P" data-reactid={301}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="from"
                                data-214865aa="true"
                                data-reactid={302}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1d02bPcWht"
                                  id="4913622from"
                                  name="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043E\u0442"
                                  placeholder={60}
                                  defaultValue
                                  data-reactid={303}
                                />
                                <label
                                  aria-label="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043E\u0442"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913622from"
                                  data-reactid={304}
                                >
                                  от
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043E\u0442"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={305}
                                />
                              </p>
                            </li>
                            <li className="_1W_iTekL7P" data-reactid={306}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="to"
                                data-214865aa="true"
                                data-reactid={307}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1f2usTwyAs"
                                  id="4913622to"
                                  name="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0434\u043E"
                                  placeholder={240}
                                  defaultValue
                                  data-reactid={308}
                                />
                                <label
                                  aria-label="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0434\u043E"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913622to"
                                  data-reactid={309}
                                >
                                  до
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0434\u043E"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={310}
                                />
                              </p>
                            </li>
                          </ul>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={311}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={313}
                    >
                      <fieldset
                        data-autotest-id={4913592}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={314}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={315}>
                          Соотношение сторон
                        </legend>
                        <ul
                          className="_2y67xS5HuR"
                          data-da31bdc5="true"
                          data-reactid={316}
                        >
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={317}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={318}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103953"
                                data-9d4e0d85="true"
                                data-reactid={319}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 16:9"
                                  id="4913592_12103953"
                                  data-reactid={320}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={321}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={322}
                                  >
                                    16:9
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={323}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={324}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103952"
                                data-9d4e0d85="true"
                                data-reactid={325}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 16:10"
                                  id="4913592_12103952"
                                  data-reactid={326}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={327}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={328}
                                  >
                                    16:10
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={329}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={330}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103954"
                                data-9d4e0d85="true"
                                data-reactid={331}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 21:9"
                                  id="4913592_12103954"
                                  data-reactid={332}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={333}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={334}
                                  >
                                    21:9
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={335}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={336}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103956"
                                data-9d4e0d85="true"
                                data-reactid={337}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 5:4"
                                  id="4913592_12103956"
                                  data-reactid={338}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={339}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={340}
                                  >
                                    5:4
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={341}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={342}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_15083005"
                                data-9d4e0d85="true"
                                data-reactid={343}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 32:9"
                                  id="4913592_15083005"
                                  data-reactid={344}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={345}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={346}
                                  >
                                    32:9
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer
                          className="_2XviVqx9xN"
                          data-da31bdc5="true"
                          data-reactid={347}
                        >
                          <a className="_2Wg9rE1HzR" data-reactid={348} href="/">
                            Показать ещё 2
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={349}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={351}
                    >
                      <fieldset
                        data-autotest-id={4913629}
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={352}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={353}>
                          Вход HDMI
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={354}
                        >
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor={4913629}
                            data-9d4e0d85="true"
                            data-reactid={355}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0412\u0445\u043E\u0434 HDMI"
                              id={4913629}
                              data-reactid={356}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={357}>
                              <span
                                className="NVoaOvqe58 _1gAodJU0Dw"
                                data-reactid={358}
                              >
                                Вход HDMI
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={359}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={361}
                    >
                      <fieldset
                        data-autotest-id={4913597}
                        className="_2ESDYRtKSQ"
                        data-7473e865="true"
                        data-reactid={362}
                      >
                        <legend className="_6Ev7l7PxvV" data-reactid={363}>
                          Время отклика, мс
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={364}
                        >
                          <ul className="_1DYevRkiWL" data-reactid={365}>
                            <li className="_1W_iTekL7P" data-reactid={366}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="from"
                                data-214865aa="true"
                                data-reactid={367}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1d02bPcWht"
                                  id="4913597from"
                                  name="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u043E\u0442"
                                  placeholder={1}
                                  defaultValue
                                  data-reactid={368}
                                />
                                <label
                                  aria-label="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u043E\u0442"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913597from"
                                  data-reactid={369}
                                >
                                  от
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u043E\u0442"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={370}
                                />
                              </p>
                            </li>
                            <li className="_1W_iTekL7P" data-reactid={371}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="to"
                                data-214865aa="true"
                                data-reactid={372}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1f2usTwyAs"
                                  id="4913597to"
                                  name="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u0434\u043E"
                                  placeholder={15}
                                  defaultValue
                                  data-reactid={373}
                                />
                                <label
                                  aria-label="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u0434\u043E"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913597to"
                                  data-reactid={374}
                                >
                                  до
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u0434\u043E"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={375}
                                />
                              </p>
                            </li>
                          </ul>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={376}>
                        {}
                      </div>
                    </div>
                    */}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={378}
                    >
                      <fieldset
                        data-autotest-id={14211207}
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={379}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={380}>
                          Игровой монитор
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={381}
                        >
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor={14211207}
                            data-9d4e0d85="true"
                            data-reactid={382}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0418\u0433\u0440\u043E\u0432\u043E\u0439 \u043C\u043E\u043D\u0438\u0442\u043E\u0440"
                              id={14211207}
                              data-reactid={383}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={384}>
                              <span
                                className="NVoaOvqe58 _1gAodJU0Dw"
                                data-reactid={385}
                              >
                                Игровой монитор
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={386}>
                        {}
                      </div>
                    </div>
                    */}
{/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={388}
                    >
                      <fieldset
                        data-autotest-id="manufacturer_warranty"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={389}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={390}>
                          Гарантия производителя
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={391}
                        >
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="manufacturer_warranty"
                            data-9d4e0d85="true"
                            data-reactid={392}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F"
                              id="manufacturer_warranty"
                              data-reactid={393}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={394}>
                              <span
                                className="NVoaOvqe58 _1gAodJU0Dw"
                                data-reactid={395}
                              >
                                Гарантия производителя
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={396}>
                        {}
                      </div>
                    </div>
*/}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={398}
                    >
                      <fieldset
                        className="_2uSu7TQsMO"
                        data-b8226845="true"
                        data-reactid={399}
                      >
                        <legend className="_2Ff0sb526M" data-reactid={400}>
                          Рейтинг магазина
                        </legend>
                        <ul className="_3HH8SRnp4A" data-reactid={401}>
                          <li
                            className="_2gBbJONjvk"
                            data-b8226845="true"
                            data-reactid={402}
                          >
                          
                          
                          <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={403}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="qrfrom_3"
                                data-5b15bb05="true"
                                data-reactid={404}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
                                  id="qrfrom_3"
                                  data-reactid={405}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={406}>
                                  <div
                                    className="_1FbxpCIr0K XNE5y9RjQT"
                                    data-reactid={407}
                                  >
                                    <div
                                      className="_27kJ3ORjYr"
                                      data-reactid={408}
                                    />
                                    <div
                                      className="_308ugYmRJI"
                                      data-reactid={409}
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                                        </li>

                          <li
                            className="_2gBbJONjvk"
                            data-b8226845="true"
                            data-reactid={410}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={411}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="qrfrom_4"
                                data-5b15bb05="true"
                                data-reactid={412}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
                                  id="qrfrom_4"
                                  data-reactid={413}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={414}>
                                  <div
                                    className="_1FbxpCIr0K _3RxxCpjiKz"
                                    data-reactid={415}
                                  >
                                    <div
                                      className="_27kJ3ORjYr"
                                      data-reactid={416}
                                    />
                                    <div
                                      className="_308ugYmRJI"
                                      data-reactid={417}
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_2gBbJONjvk"
                            data-b8226845="true"
                            data-reactid={418}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={419}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="qrfrom_-1"
                                data-5b15bb05="true"
                                data-reactid={420}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
                                  id="qrfrom_-1"
                                  data-reactid={421}
                                  defaultValue="on"
                                  defaultChecked
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={422}>
                                  <div
                                    className="_1FbxpCIr0K _3A2H6kwJcC"
                                    data-reactid={423}
                                  >
                                    <div
                                      className="_27kJ3ORjYr"
                                      data-reactid={424}
                                    />
                                    <div
                                      className="_308ugYmRJI"
                                      data-reactid={425}
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                          </li>
                          
                        </ul>
                      </fieldset>

                      <div className="_3vgfOcGSnv" data-reactid={426}>
                      </div>
                    </div>
                    */}
{/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={428}
                    >
                      <fieldset
                        data-autotest-id="free-delivery"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={429}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={430}>
                          Бесплатная доставка курьером
                        </legend>
                        <div
                          className="_16hsbhrgAf"
                          data-17df2f2a="true"
                          data-reactid={431}
                        >
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="free-delivery"
                            data-9d4e0d85="true"
                            data-reactid={432}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                              id="free-delivery"
                              data-reactid={433}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={434}>
                              <span
                                className="NVoaOvqe58 _1gAodJU0Dw"
                                data-reactid={435}
                              >
                                Бесплатная доставка курьером
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={436}>
                        {}
                      </div>
                    </div>
*/}
{/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={438}
                    >
                      <fieldset
                        className="_2qWuY12N6f"
                        data-779c2885="true"
                        data-reactid={439}
                      >
                        <legend className="_1nAu9jHf6S" data-reactid={440}>
                          Способ доставки
                        </legend>
                        <RadioGroup>
                          {Object.entries(deliveries).map(([value, title]) => 
                            <Radio style={radioStyle} value={value} key={value}>{title}</Radio>
                            )}
                          
                        </RadioGroup>
                        <ul className="_1rFLRYsqQb" data-reactid={441}>
                          <li
                            className="_3YKtoPKZka"
                            data-779c2885="true"
                            data-reactid={442}
                          >


                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={443}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="offer-shipping_delivery"
                                data-5b15bb05="true"
                                data-reactid={444}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"
                                  id="offer-shipping_delivery"
                                  data-reactid={445}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={446}>
                                  <span
                                    className="rCLpHJFFlJ"
                                    data-reactid={447}
                                  >
                                    С доставкой
                                  </span>
                                </div>
                              </label>
                            </div>
                            
                          </li>
                          <li
                            className="_3YKtoPKZka"
                            data-779c2885="true"
                            data-reactid={448}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={449}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="offer-shipping_pickup"
                                data-5b15bb05="true"
                                data-reactid={450}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"
                                  id="offer-shipping_pickup"
                                  data-reactid={451}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={452}>
                                  <span
                                    className="rCLpHJFFlJ"
                                    data-reactid={453}
                                  >
                                    Самовывоз
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_3YKtoPKZka"
                            data-779c2885="true"
                            data-reactid={454}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={455}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="offer-shipping_-1"
                                data-5b15bb05="true"
                                data-reactid={456}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"
                                  id="offer-shipping_-1"
                                  data-reactid={457}
                                  defaultValue="on"
                                  defaultChecked
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={458}>
                                  <span
                                    className="rCLpHJFFlJ"
                                    data-reactid={459}
                                  >
                                    Любой
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        
                        </ul>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={460}>
                        {}
                      </div>
                    </div>
  */}
{/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={462}
                    >
                      <fieldset
                        data-autotest-id="home_region"
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={463}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={464}>
                          Страна продавца
                        </legend>
                        <ul
                          className="_2y67xS5HuR"
                          data-da31bdc5="true"
                          data-reactid={465}
                        >
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={466}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={467}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="home_region_149"
                                data-9d4e0d85="true"
                                data-reactid={468}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"
                                  id="home_region_149"
                                  data-reactid={469}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={470}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={471}
                                  >
                                    Беларусь
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={472}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={473}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="home_region_225"
                                data-9d4e0d85="true"
                                data-reactid={474}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430 \u0420\u043E\u0441\u0441\u0438\u044F"
                                  id="home_region_225"
                                  data-reactid={475}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={476}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={477}
                                  >
                                    Россия
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={478}>
                      </div>
                    </div>
*/}
                  {/*  
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={480}
                    >
                      <fieldset
                        className="_3F0KYdeicF"
                        data-d5801345="true"
                        data-reactid={481}
                      >
                        <legend className="_2505xdN31K" data-reactid={482}>
                          Срок доставки курьером
                        </legend>
                        <ul className="_1Oc123Sp0Q" data-reactid={483}>
                          <li
                            className="_2TCO5ZPQgp"
                            data-d5801345="true"
                            data-reactid={484}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={485}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_0"
                                data-5b15bb05="true"
                                data-reactid={486}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_0"
                                  data-reactid={487}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={488}>
                                  <span
                                    className="rCLpHJFFlJ"
                                    data-reactid={489}
                                  >
                                    Сегодня
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_2TCO5ZPQgp"
                            data-d5801345="true"
                            data-reactid={490}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={491}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_1"
                                data-5b15bb05="true"
                                data-reactid={492}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_1"
                                  data-reactid={493}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={494}>
                                  <span
                                    className="rCLpHJFFlJ"
                                    data-reactid={495}
                                  >
                                    Завтра
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_2TCO5ZPQgp"
                            data-d5801345="true"
                            data-reactid={496}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={497}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_5"
                                data-5b15bb05="true"
                                data-reactid={498}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_5"
                                  data-reactid={499}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={500}>
                                  <span
                                    className="rCLpHJFFlJ"
                                    data-reactid={501}
                                  >
                                    До 5 дней
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_2TCO5ZPQgp"
                            data-d5801345="true"
                            data-reactid={502}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={503}
                            >
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_-1"
                                data-5b15bb05="true"
                                data-reactid={504}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_-1"
                                  data-reactid={505}
                                  defaultValue="on"
                                  defaultChecked
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={506}>
                                  <span
                                    className="rCLpHJFFlJ"
                                    data-reactid={507}
                                  >
                                    Любой
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={508}>
                      </div>
                    </div>
*/}
                    {/*
                    <div
                      className="_2Hue1bCg-N"
                      data-f3c53385="true"
                      data-reactid={510}
                    >
                      <fieldset
                        data-autotest-id="fesh"
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={511}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={512}>
                          Магазины
                        </legend>
                        <ul
                          className="_2y67xS5HuR"
                          data-da31bdc5="true"
                          data-reactid={513}
                        >
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={514}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={515}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_38535"
                                data-9d4e0d85="true"
                                data-reactid={516}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B 21vek.by"
                                  id="fesh_38535"
                                  data-reactid={517}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={518}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={519}
                                  >
                                    21vek.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={520}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={521}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_56478"
                                data-9d4e0d85="true"
                                data-reactid={522}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B AMD.by"
                                  id="fesh_56478"
                                  data-reactid={523}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={524}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={525}
                                  >
                                    AMD.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={526}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={527}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_380337"
                                data-9d4e0d85="true"
                                data-reactid={528}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B DEEL.BY"
                                  id="fesh_380337"
                                  data-reactid={529}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={530}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={531}
                                  >
                                    DEEL.BY
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={532}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={533}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_255884"
                                data-9d4e0d85="true"
                                data-reactid={534}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B imarket.by"
                                  id="fesh_255884"
                                  data-reactid={535}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={536}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={537}
                                  >
                                    imarket.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={538}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={539}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_47281"
                                data-9d4e0d85="true"
                                data-reactid={540}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B MMG.by"
                                  id="fesh_47281"
                                  data-reactid={541}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={542}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={543}
                                  >
                                    MMG.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={544}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={545}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_221610"
                                data-9d4e0d85="true"
                                data-reactid={546}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B NOVATEK"
                                  id="fesh_221610"
                                  data-reactid={547}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={548}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={549}
                                  >
                                    NOVATEK
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={550}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={551}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_45816"
                                data-9d4e0d85="true"
                                data-reactid={552}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B RAM.BY"
                                  id="fesh_45816"
                                  data-reactid={553}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={554}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={555}
                                  >
                                    RAM.BY
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={556}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={557}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_181298"
                                data-9d4e0d85="true"
                                data-reactid={558}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B SOCKET.BY"
                                  id="fesh_181298"
                                  data-reactid={559}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={560}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={561}
                                  >
                                    SOCKET.BY
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={562}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={563}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_46865"
                                data-9d4e0d85="true"
                                data-reactid={564}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B TTN.by"
                                  id="fesh_46865"
                                  data-reactid={565}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={566}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={567}
                                  >
                                    TTN.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={568}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={569}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_38395"
                                data-9d4e0d85="true"
                                data-reactid={570}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B ULTRA.by"
                                  id="fesh_38395"
                                  data-reactid={571}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={572}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={573}
                                  >
                                    ULTRA.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={574}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={575}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_476488"
                                data-9d4e0d85="true"
                                data-reactid={576}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B win7"
                                  id="fesh_476488"
                                  data-reactid={577}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={578}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={579}
                                  >
                                    win7
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li
                            className="_1-l0XiE_ze"
                            data-da31bdc5="true"
                            data-reactid={580}
                          >
                            <div
                              className="_16hsbhrgAf"
                              data-17df2f2a="true"
                              data-reactid={581}
                            >
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_223151"
                                data-9d4e0d85="true"
                                data-reactid={582}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u041C\u0443\u043B\u044C\u0442\u0438\u043A\u043E\u043C"
                                  id="fesh_223151"
                                  data-reactid={583}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={584}>
                                  <span
                                    className="NVoaOvqe58"
                                    data-reactid={585}
                                  >
                                    Мультиком
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer
                          className="_2XviVqx9xN"
                          data-da31bdc5="true"
                          data-reactid={586}
                        >
                          <a className="_2Wg9rE1HzR" data-reactid={587} href="/">
                            Показать всё
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={588}>
                        {}
                      </div>
                    </div>
                    {}*/}
                  </div>
                  
                  <div className="_3U2TeVBOWN" data-reactid={591}>
                    <div
                      className="_2Wdscr8iIC"
                      data-57ec50ea="true"
                      data-reactid={592}
                    >
                        <Button>Все фильтры</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchLayout2;
