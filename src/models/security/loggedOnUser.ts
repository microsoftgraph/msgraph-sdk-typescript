import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LoggedOnUser extends AdditionalDataHolder, Parsable {
    /**
     * User account name of the logged-on user.
     */
    accountName?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * User account domain of the logged-on user.
     */
    domainName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
