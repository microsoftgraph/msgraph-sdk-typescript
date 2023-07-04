import {CrossTenantAccessPolicyConfigurationDefault} from './crossTenantAccessPolicyConfigurationDefault';
import {CrossTenantAccessPolicyConfigurationPartner} from './crossTenantAccessPolicyConfigurationPartner';
import {PolicyBase} from './policyBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicy extends Parsable, PolicyBase {
    /**
     * Used to specify which Microsoft clouds an organization would like to collaborate with. By default, this value is empty. Supported values for this field are: microsoftonline.com, microsoftonline.us, and partner.microsoftonline.cn.
     */
    allowedCloudEndpoints?: string[] | undefined;
    /**
     * Defines the default configuration for how your organization interacts with external Azure Active Directory organizations.
     */
    defaultEscaped?: CrossTenantAccessPolicyConfigurationDefault | undefined;
    /**
     * Defines partner-specific configurations for external Azure Active Directory organizations.
     */
    partners?: CrossTenantAccessPolicyConfigurationPartner[] | undefined;
}
