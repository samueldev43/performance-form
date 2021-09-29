import React, { useCallback, useState, useRef } from 'react';

import * as yup from 'yup'

import { Input } from './components/Input/index'
import { Container, ContainerData } from './styles/global'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

interface Data {
  name: string,
  email: string,
  password: string,
}

function App() {

  const formRef = useRef<FormHandles>(null)

  const [dataVal, setDataVal] = useState<Data[]>([])

  const send = useCallback(async (data: Data) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().min(3, 'no mínimo 3'),
        email: yup.string().required(),
        password: yup.string().min(6,'no mínimo 6')
      })
  
      await schema.validate(data, {abortEarly: false})

      setDataVal([...dataVal, data])
    } catch(e) {
      formRef.current?.setErrors({
        name: 'Nome obrigatório'
      })
    }
  }, [dataVal])

  return (
  <>
      <Container>
        <h2>Formulário</h2>
          <Form ref={formRef} onSubmit={send}>
            < Input name="name"
             placeholder="Name" 
             type="text"
             tabIndex={1}
             />

            < Input name="email"
             placeholder="Email" 
             type="email"
             tabIndex={2}
             />

            <Input name="password" 
            placeholder="Password" 
            type="password"
            tabIndex={3}
            />
            <button type="submit" tabIndex={4}>Enviar</button>
          </Form>
      </Container>

      <ContainerData>
        {dataVal.map( data => (
          <>
          <div key={data.name}>
            <strong>{data.name}</strong>
            <p>{data.email}</p>
            <p>{data.password}</p>
          </div>
          </>
        ))}
      </ContainerData>
  </>
  );
}

export default App;