import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TenantInformation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Primary domain name of an Azure AD tenant.
     */
    defaultDomainName?: string | undefined;
    /**
     * Display name of an Azure AD tenant.
     */
    displayName?: string | undefined;
    /**
     * Name shown to users that sign in to an Azure AD tenant.
     */
    federationBrandName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Unique identifier of an Azure AD tenant.
     */
    tenantId?: string | undefined;
}
