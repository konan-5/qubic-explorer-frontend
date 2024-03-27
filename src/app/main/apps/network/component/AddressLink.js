import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function AddressLink(props) {
  const { value, tickValue } = props;

  return (
    <Typography
      className="text-14 leading-20 font-space text-primary-40 break-all"
      component={Link}
      to={`/network/address/${value}?tick=${tickValue}`}
      role="button"
    >
      {value}
    </Typography>
  );
}
export default AddressLink;
