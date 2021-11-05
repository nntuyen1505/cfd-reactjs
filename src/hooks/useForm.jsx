import { useState } from "react";

const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlRegex =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const useForm = (initValue = {}) => {
  const [form, setForm] = useState(initValue);
  const [error, setError] = useState({});
  const rules = {};

  function handleChange(e) {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setForm({ ...form, [name]: value });
  }

  function validator() {
    let errorObject = {};
    for (let i in rules) {
      let r = rules[i];
      if (r.required && !form[i]) {
        errorObject[i] = "Gía trị không được bỏ trống!";
      }
      if (r.pattern) {
        let pattern = r.pattern;
        if (r.pattern === "phone") pattern = phoneRegex;
        if (r.pattern === "email") pattern = emailRegex;
        if (r.pattern === "url") pattern = urlRegex;

        if (typeof pattern['test'] !== 'undefined' && !pattern.test(form[i])) {
          errorObject[i] = "Field này không đúng định dạng";
        }
      }

      //khi r.min có truyền thì tiếp tục 1 trong 2 vế trong ngoặc đúng thì nó  sẽ xét.
      //typeof form[i] === "undefined" khi chưa điền gì hết  thì giát trị là underfined
      //form[i].length < r.min khi mà điền mà xoá  đi thì .length là 0 và và < min 
      if (r.min && (typeof form[i] === "undefined" || form[i].length < r.min)) {
        errorObject[i] = `Field này không được nhỏ hơn ${r.min} ký tự`;
      }
      if (r.max && form[i].length > r.max) {
        errorObject[i] = `Field này không được lớn hơn ${r.max} ký tự`;
      }
    }
    return errorObject;
  }

  function register(name, rule) {
    if (rule) {
      rules[name] = rule;
    }
    return {
      name,
      onChange: handleChange,
      value: form[name],
    };
  }
  function handleSubmit(callback) {
    return (e) => {
      e.preventDefault();
      let error = validator();
      if (Object.keys(error).length === 0) {
        callback(form);
      }
      setError(error);
    };
  }

  return {
    form,
    register,
    error,
    handleSubmit,
  };
};
