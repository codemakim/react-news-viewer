import React from 'react';
import './NewmoForm.css';

const NewmoForm = () => {
  return (
    <div class="section-newmoform">
      <form action="" id="newMoForm" class="form-newmo">
        <span class="text-inner-form">Login</span>
        <input type="text" name="email" class="input-txt" placeholder="Email" />
        <input
          type="password"
          name="password"
          class="input-txt"
          placeholder="Password"
        />
        <button type="button" class="btn-block">
          submit
        </button>
        <div class="btn-group">
          <button type="button" class="btn">
            호
          </button>
          <button type="button" class="btn">
            하
          </button>
          <button type="button" class="btn">
            金
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewmoForm;
