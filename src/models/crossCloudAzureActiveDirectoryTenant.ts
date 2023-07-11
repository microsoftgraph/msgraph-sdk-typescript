import {IdentitySource} from './identitySource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossCloudAzureActiveDirectoryTenant extends IdentitySource, Parsable {
    /**
     * The ID of the cloud where the tenant is located, one of microsoftonline.com, microsoftonline.us or partner.microsoftonline.cn. Read only.
     */
    cloudInstance?: string | undefined;
    /**
     * The name of the Azure Active Directory tenant. Read only.
     */
    displayName?: string | undefined;
    /**
     * The ID of the Azure Active Directory tenant. Read only.
     */
    tenantId?: string | undefined;
}
