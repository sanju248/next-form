import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true})} />
      <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Phone" {...register("Phone", {required: true, maxLength: 12})} />
      <input type="datetime" placeholder="Select Day" {...register("Select Day", { pattern: /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/i})} />
      <select {...register}>
        <option value="9am">9am</option>
        <option value="11am">11am</option>
        <option value="3pm">3pm</option>
        <option value="5pm">5pm</option>
        <option value="7pm">7pm</option>
      </select>

      <input {...register("Have you learnt Sudarshan Kriya*", { required: true })} type="radio" value="Yes" />
      <input {...register("Have you learnt Sudarshan Kriya*", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}