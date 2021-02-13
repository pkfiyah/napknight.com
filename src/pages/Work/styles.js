import styled from 'styled-components'
import { white } from '@carbon/colors'

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const HighlightTitle = styled.h5`
  font-weight: bold;
  margin-left: 1rem;
  margin-top: 1rem;
`

export const HighlightItem = styled.li`
  margin-left: 1rem;
  margin-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px dashed ${white};
  margin-right: 15rem;
`

export const WorkTitle = styled.h4`
  font-weight: bold;
`

export const JobTitle = styled.p`
  font-weight: bold;
  display: inline-block;
`
