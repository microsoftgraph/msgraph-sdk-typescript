import {ProxiedDomain} from './proxiedDomain';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionProxiedDomainCollection extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Display name
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Collection of proxied domains
     */
    proxiedDomains?: ProxiedDomain[] | undefined;
}
