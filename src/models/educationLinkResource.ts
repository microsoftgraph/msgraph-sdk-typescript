import {EducationResource} from './educationResource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationLinkResource extends Partial<AdditionalDataHolder>, EducationResource, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** URL to the resource. */
    link?: string | undefined;
}
