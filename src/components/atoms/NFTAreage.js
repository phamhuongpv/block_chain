import { Typography } from '@mui/material'

export default function NFTAreage ({ areage }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      gutterBottom
      >
        {`Diện tích: ${areage} mét vuông`}
    </Typography>
  )
}