export const createComponentFileModel = ({ name }: { name: string }) => `
 import React from 'react'

 import * as Atoms from './styles'

 export default function ${name}() {


    return <Atoms.Container></Atoms.Container>
 }

`;

export const createStyledFileModel = (isNative: boolean) => `
    import styled from  ${
      isNative ? "'styled-components/native'" : "'styled-components'"
    }


    export const Container = styled.View${` `}


`;
