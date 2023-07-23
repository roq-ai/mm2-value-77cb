import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  model: yup.string().required(),
  type: yup.string().required(),
  availability: yup.boolean().required(),
  organization_id: yup.string().nullable(),
});
