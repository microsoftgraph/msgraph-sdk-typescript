import {EducationResource} from './educationResource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationMediaResource extends Partial<AdditionalDataHolder>, EducationResource, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Location of the file on shared point folder. Required */
    fileUrl?: string | undefined;
}
