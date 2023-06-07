import * as yup from 'yup';
import { feedbackValidationSchema } from 'validationSchema/feedbacks';
import { interviewValidationSchema } from 'validationSchema/interviews';

export const jobApplicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  job_posting_id: yup.string().nullable().required(),
  applicant_id: yup.string().nullable().required(),
  feedback: yup.array().of(feedbackValidationSchema),
  interview: yup.array().of(interviewValidationSchema),
});
