import { type EducationResource } from './educationResource';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResource extends Entity, Parsable {
    /**
     * Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
     */
    assignmentResourceUrl?: string | undefined;
    /**
     * Resource object.
     */
    resource?: EducationResource | undefined;
}
