export const createComponentFileModel = ({ name }: { name: string }) => `
 import React from 'react'

 import * as Atoms from './styles'

 export default function ${name}() {


    return <Atoms.Container></Atoms.Container>
 }

`;

export const createStyledFileModel = () => `
    import styled from 'styled-components/native'


    export const Container = styled.View${``}


`;
