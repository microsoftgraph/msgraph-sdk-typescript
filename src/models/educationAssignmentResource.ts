import {EducationResource} from './educationResource';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentResource extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether this resource should be copied to each student submission for modification and submission. Required */
    distributeForStudentWork?: boolean | undefined;
    /** Resource object that has been associated with this assignment. */
    resource?: EducationResource | undefined;
}
