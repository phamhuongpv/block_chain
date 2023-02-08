import { Typography } from '@mui/material'

export default function NFTUsesTo ({ usesTo }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      gutterBottom
      >
        {`Mục đích sử dụng: ${usesTo}`}
    </Typography>
  )
}