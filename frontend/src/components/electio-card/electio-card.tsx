import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export interface ElectioCardProps {
  cardTitle?: string
  imgSrc?: string
  textContent?: string[]
  footerButtons?: JSX.Element[]
  children?: JSX.Element
}

export const ElectioCard: React.FC<ElectioCardProps> = ({
  cardTitle,
  imgSrc,
  textContent,
  footerButtons,
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
      <CardContent sx={{ textAlign: 'left' }}>
        {cardTitle && (
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
        )}
        {textContent && (
          <Typography variant="body2" color="text.secondary">
            {textContent}
          </Typography>
        )}
      </CardContent>
      <CardActions>{children}</CardActions>
      <CardActions>
        <CardContent sx={{ justifyContent: 'center' }}>
          {footerButtons &&
            footerButtons.map((button) => {
              return button
            })}
        </CardContent>
      </CardActions>
    </Card>
  )
}
