import {EducationResource} from './educationResource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFileResource extends Partial<AdditionalDataHolder>, EducationResource, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Location on disk of the file resource. */
    fileUrl?: string | undefined;
}
