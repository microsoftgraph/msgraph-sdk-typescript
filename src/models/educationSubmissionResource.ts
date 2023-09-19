import { type EducationResource } from './educationResource';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResource extends Entity, Parsable {
    /**
     * Pointer to the assignment from which the resource was copied, and if null, the student uploaded the resource.
     */
    assignmentResourceUrl?: string | undefined;
    /**
     * Resource object.
     */
    resource?: EducationResource | undefined;
}
