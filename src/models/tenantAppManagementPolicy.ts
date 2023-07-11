import {AppManagementConfiguration} from './appManagementConfiguration';
import {PolicyBase} from './policyBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TenantAppManagementPolicy extends Parsable, PolicyBase {
    /**
     * Restrictions that apply as default to all application objects in the tenant.
     */
    applicationRestrictions?: AppManagementConfiguration | undefined;
    /**
     * Denotes whether the policy is enabled. Default value is false.
     */
    isEnabled?: boolean | undefined;
    /**
     * Restrictions that apply as default to all service principal objects in the tenant.
     */
    servicePrincipalRestrictions?: AppManagementConfiguration | undefined;
}
