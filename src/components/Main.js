import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import PageSearch from "./PageSearch";
import Layout from "./Layout";
import Footer from "./Footer";
import CopyRight from "./Copyright";


class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div
          className="n-w-tabs__popup-shadow i-bem"
          style={{
            display: "none"
          }}
        />
        <Tabs />
        <PageSearch />
        <Layout />
        <div
          className="n-settings-notifications-popup-opener"
          data-bem="{n-settings-notifications-popup-opener:}"
        />
        <div>
        </div>
        <div className="gallery-popup-container" />
        <div
          className="n-notification-center n-notification-center_visibility_no i-bem n-notification-center_js_inited"
          data-bem="{n-notification-center:}"
        />
        <div
          className="footer-market i-bem footer-market_js_inited"
          data-bem="{footer-market:{domainZone:by,route:market:list}}"
        >
          <div>
            <div
              className="footer-subscription-wrap i-bem footer-subscription-wrap_js_inited"
              data-bem="{footer-subscription-wrap:{type:ADVERTISING}}"
            >
              <div className="footer-market__content footer-market__content_type_subscription">
                <div className="footer-subscription-wrap__content footer-subscription" />
              </div>
            </div>
            <div className="footer-market__common footer-history">
              <div className="footer-market__content footer-history__content">
                <div
                  className="history-latest history-latest_visible_hidden i-bem history-latest_js_inited"
                  data-bem="{history-latest: {}}"
                >
                  <div
                    className="history-latest__carousel flex-grid flex-grid_lazy_yes flex-grid_row_1 i-bem flex-grid_js_inited"
                    data-bem="{flex-grid:{container:flex-grid__container,list:snippet-list,item:snippet-list__item,min-size:220, max:4, resizable:false, previous:pager-arrows__item_type_prev,next:pager-arrows__item_type_next,speed:500}}"
                  >
                    <div className="title title_size_22">Вы смотрели</div>
                    <div className="pager-arrows">
                      <span className="pager-arrows__item pager-arrows__item_type_prev i-bem pager-arrows__item_type_prev_js_inited">
                        <img
                          className="image"
                          src="./old/La6qi18Z8LwgnZdsAr1qy1GwCwo(1).gif"
                          alt="<"
                        />
                      </span>
                      <span className="pager-arrows__item pager-arrows__item_type_next i-bem pager-arrows__item_type_next_js_inited">
                        <img
                          className="image"
                          src="./old/La6qi18Z8LwgnZdsAr1qy1GwCwo(1).gif"
                          alt=">"
                        />
                      </span>
                    </div>
                    <div className="flex-grid__container snippet-list__container history-latest__list history-latest__list_state_loading i-bem history-latest__list_js_inited">
                      <div className="history-latest__spinner-area i-bem history-latest__spinner-area_js_inited">
                        <div className="spin2 spin2_progress_yes spin2_hidden_yes spin2_size_xs i-bem spin2_js_inited" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            <div className="footer-market__common footer-market__copyright">
              <div className="footer-market__column footer-market__column_center">
                <a
                  className="link footer-market__link footer-market__mobile-link n-smart-link i-bem n-smart-link_js_inited"
                  data-bem="{n-smart-link:{subscriptions:[filters]}}"
                  href="https://m.market.yandex.by/catalog--monitory/54539/list?hid=91052&suggest_text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&suggest=1&suggest_type=category&suggest_reqid=98254231674329551080140770196267&track=ftr_desktop_to_touch"
                >
                  Мобильная версия
                </a>
                <a
                  className="link footer-market__link"
                  href="https://stat.yandex.ru/stats.xml?ReportID=-225&ProjectID=47"
                >
                  Статистика
                </a>
                <a
                  className="link footer-market__link"
                  href="https://legal.yandex.by/market_termsofuse/"
                >
                  Пользовательское соглашение
                </a>
              </div>
              <CopyRight />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
