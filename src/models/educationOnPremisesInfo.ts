import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOnPremisesInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Unique identifier for the user object in Active Directory. */
    immutableId?: string | undefined;
}
