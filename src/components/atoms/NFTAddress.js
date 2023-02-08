import { Typography } from '@mui/material'

export default function NFTAddress ({ address }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      gutterBottom
      >
        {`Địa chỉ: ${address}`}
    </Typography>
  )
}