import {AppManagementConfiguration} from './appManagementConfiguration';
import {createAppManagementConfigurationFromDiscriminatorValue} from './createAppManagementConfigurationFromDiscriminatorValue';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {serializeAppManagementConfiguration} from './serializeAppManagementConfiguration';
import {TenantAppManagementPolicy} from './tenantAppManagementPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTenantAppManagementPolicy(tenantAppManagementPolicy: TenantAppManagementPolicy | undefined = {} as TenantAppManagementPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(tenantAppManagementPolicy),
        "applicationRestrictions": n => { tenantAppManagementPolicy.applicationRestrictions = n.getObjectValue<AppManagementConfiguration>(createAppManagementConfigurationFromDiscriminatorValue); },
        "isEnabled": n => { tenantAppManagementPolicy.isEnabled = n.getBooleanValue(); },
        "servicePrincipalRestrictions": n => { tenantAppManagementPolicy.servicePrincipalRestrictions = n.getObjectValue<AppManagementConfiguration>(createAppManagementConfigurationFromDiscriminatorValue); },
    }
}
