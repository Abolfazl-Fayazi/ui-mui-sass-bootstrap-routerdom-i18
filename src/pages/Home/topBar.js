import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "../../assets/sass/Home/topBar.scss";

////////////////////////////////////////////////////////////////////////

const TopBar = () => {
  return (
    <div className="wrapper">
      <LocalShippingIcon
        className="truck_icon"
        size="large"
        edge="start"
        color="inherit"
      ></LocalShippingIcon>
      <Typography className="sentence" variant="overline">
        free shipping on orders of $50 Oor more
      </Typography>
      <Link href="#" className="details" variant="caption" color="#999">
        Details
      </Link>
    </div>
  );
};

export default TopBar;
