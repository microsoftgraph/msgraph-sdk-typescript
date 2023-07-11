import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuthorizationInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The certificateUserIds property
     */
    certificateUserIds?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
