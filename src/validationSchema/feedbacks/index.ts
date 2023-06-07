import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  comment: yup.string().required(),
  job_application_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
