import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OptionalClaim extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property.
     */
    additionalProperties?: string[] | undefined;
    /**
     * If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false.
     */
    essential?: boolean | undefined;
    /**
     * The name of the optional claim.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object.
     */
    source?: string | undefined;
}
