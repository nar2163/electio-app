import * as React from 'react'

import { ContainerCard } from '../container-card'

export enum ActionButtonType {
  Continue = 'Continue',
  Close = 'Close',
}
export interface ContentPanelItemProps {
  children: React.ReactNode
  actionButton?: ActionButtonType
  onClick?: (panelData: string) => void
  noInnerBorder?: boolean
}

export const ContentPanelItem: React.FC<ContentPanelItemProps> = ({
  children,
  actionButton,
  onClick,
  noInnerBorder,
}: ContentPanelItemProps) => {
  return noInnerBorder ? (
    <ContainerCard noInnerBorders={true}>
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          overflow: 'hidden',
          contain: 'content',
        }}
      >
        <div style={{ width: '100%' }}>{children}</div>
      </div>
    </ContainerCard>
  ) : (
    <ContainerCard>
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          overflow: 'hidden',
          contain: 'content',
        }}
      >
        <div style={{ width: '100%' }}>{children}</div>
      </div>
    </ContainerCard>
  )
}
