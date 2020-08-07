import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <main>
        <form action="#">
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="WhatsApp" />
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
