import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StringKeyLongValuePair extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The mapping of the user type from the source system to the target system. For example:User to User - For Azure AD to Azure AD synchronization worker to user - For Workday to Azure AD synchronization.
     */
    key?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Total number of synchronized objects.
     */
    value?: number | undefined;
}
