import {EducationResource} from './educationResource';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

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
