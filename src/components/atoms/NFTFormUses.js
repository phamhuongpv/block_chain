import { Typography } from '@mui/material'

export default function NFTFormUses ({ formUses }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      gutterBottom
      >
        {`Hình thức sử dụng: ${formUses}`}
    </Typography>
  )
}