import React, {Component} from "react";

class CopyRight extends Component {
  render() {
    return (
        <div className="copyright">
        © 2018  ООО «
        <a
          className="link copyright__link"
          href="https://market.yandex.by/"
        >
          Яндекс.Маркет
        </a>
        »
      </div>
    )
  }
}

export default CopyRight;
