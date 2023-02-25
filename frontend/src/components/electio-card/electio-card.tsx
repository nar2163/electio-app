import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export interface ElectioCardProps {
  cardTitle: string
  imgSrc?: string
  textContent?: string[]
  children?: JSX.Element
}

export const ElectioCard: React.FC<ElectioCardProps> = ({
  cardTitle,
  imgSrc,
  textContent,
  children,
}: ElectioCardProps) => {
  return (
    <Card>
      {imgSrc && (
        <CardMedia
          sx={{ height: '30rem', objectFit: 'overflow' }}
          image={imgSrc}
          title="main-card-title"
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          So what exactly is Electio?
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        {children}
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
