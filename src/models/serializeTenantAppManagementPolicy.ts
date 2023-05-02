import {AppManagementConfiguration} from './appManagementConfiguration';
import {serializeAppManagementConfiguration} from './serializeAppManagementConfiguration';
import {serializePolicyBase} from './serializePolicyBase';
import {TenantAppManagementPolicy} from './tenantAppManagementPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTenantAppManagementPolicy(writer: SerializationWriter, tenantAppManagementPolicy: TenantAppManagementPolicy | undefined = {} as TenantAppManagementPolicy) : void {
        serializePolicyBase(writer, tenantAppManagementPolicy)
        writer.writeObjectValue<AppManagementConfiguration>("applicationRestrictions", tenantAppManagementPolicy.applicationRestrictions, serializeAppManagementConfiguration);
        writer.writeBooleanValue("isEnabled", tenantAppManagementPolicy.isEnabled);
        writer.writeObjectValue<AppManagementConfiguration>("servicePrincipalRestrictions", tenantAppManagementPolicy.servicePrincipalRestrictions, serializeAppManagementConfiguration);
}
