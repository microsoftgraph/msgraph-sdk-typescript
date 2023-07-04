import {IdentitySource} from './identitySource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AzureActiveDirectoryTenant extends IdentitySource, Parsable {
    /**
     * The name of the Azure Active Directory tenant. Read only.
     */
    displayName?: string | undefined;
    /**
     * The ID of the Azure Active Directory tenant. Read only.
     */
    tenantId?: string | undefined;
}
