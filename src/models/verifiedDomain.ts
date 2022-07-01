import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VerifiedDomain extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** For example, Email, OfficeCommunicationsOnline. */
    capabilities?: string | undefined;
    /** true if this is the default domain associated with the tenant; otherwise, false. */
    isDefault?: boolean | undefined;
    /** true if this is the initial domain associated with the tenant; otherwise, false. */
    isInitial?: boolean | undefined;
    /** The domain name; for example, contoso.onmicrosoft.com. */
    name?: string | undefined;
    /** For example, Managed. */
    type?: string | undefined;
}
