import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  description: yup.string().required("O campo descrição é obrigatório"),
  price: yup.number().required("O campo preço é obrigatório").positive("Coloque um valor positivo").integer("Coloque um valor inteiro"),
}); 