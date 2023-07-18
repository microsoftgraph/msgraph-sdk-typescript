import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TenantInformation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The defaultDomainName property
     */
    defaultDomainName?: string | undefined;
    /**
     * The displayName property
     */
    displayName?: string | undefined;
    /**
     * The federationBrandName property
     */
    federationBrandName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The tenantId property
     */
    tenantId?: string | undefined;
}
