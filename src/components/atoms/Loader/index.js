import styled from 'styled-components/native'

export const Loader = styled.ActivityIndicator.attrs({
    size: 'large',
    color: 'red'
})`
margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
`;
