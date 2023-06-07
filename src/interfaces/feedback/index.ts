import { JobApplicationInterface } from 'interfaces/job-application';
import { UserInterface } from 'interfaces/user';

export interface FeedbackInterface {
  id?: string;
  job_application_id: string;
  user_id: string;
  comment: string;

  job_application?: JobApplicationInterface;
  user?: UserInterface;
  _count?: {};
}
