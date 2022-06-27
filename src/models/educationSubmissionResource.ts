import {EducationResource} from './educationResource';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResource extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource. */
    assignmentResourceUrl?: string | undefined;
    /** Resource object. */
    resource?: EducationResource | undefined;
}
