import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOnPremisesInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Unique identifier for the user object in Active Directory.
     */
    immutableId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
