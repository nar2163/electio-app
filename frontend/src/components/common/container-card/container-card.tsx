import * as React from 'react'

export interface ContainerCardProps {
  children: React.ReactNode
  hoverable?: boolean
  noInnerBorders?: boolean
  style?: {
    backgroundColor: string
    borderColor: string
    marginTop?: string
  }
}

export const ContainerCard: React.FC<ContainerCardProps> = ({
  children,
  hoverable,
  noInnerBorders,
  style,
}) => {
  return noInnerBorders ? <div>{children}</div> : <div>{children}</div>
}
