import {EducationExternalSource} from './educationExternalSource';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOrganization extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Organization description. */
    description?: string | undefined;
    /** Organization display name. */
    displayName?: string | undefined;
    /** Where this user was created from. Possible values are: sis, lms, or manual. */
    externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    externalSourceDetail?: string | undefined;
}
