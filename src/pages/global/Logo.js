import { memo } from "react";

function Logo(props) {
  console.log("logo is rendered!");
  return (
    <div className="logo" style={props.styles}>
      <div>M1 Tracker v2.0</div>
    </div>
  );
}

export default memo(Logo);
// export default Logo;
