import {EducationResource} from './educationResource';
import {Entity} from './entity';

export interface EducationSubmissionResource extends Entity{
    /** Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource. */
    assignmentResourceUrl?:string | undefined;
    /** Resource object. */
    resource?:EducationResource | undefined;
}
