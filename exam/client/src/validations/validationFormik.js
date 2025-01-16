
import * as Yup from 'yup';

export const AddProductSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    ingredient: Yup.string()
        .min(5, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    category: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    price: Yup.string()
        .min(0, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    imgUrl: Yup.string()
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),

});