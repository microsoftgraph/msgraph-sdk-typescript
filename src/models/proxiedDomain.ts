import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProxiedDomain extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The IP address or FQDN
     */
    ipAddressOrFQDN?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Proxy IP or FQDN
     */
    proxy?: string | undefined;
}
