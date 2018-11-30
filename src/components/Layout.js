import React from "react";
import FilterPanel from "./FilterPanel";
import SearchResultsNormal from "./SearchResultsNormal";
import SearchLayout2 from "./SearchLayout2";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout layout_type_maya">
        <FilterPanel />
        <div className="layout layout_type_search i-bem">
          <SearchResultsNormal />
          <SearchLayout2 />
        </div>
      </div>
    );
  }
}

export default Layout;
