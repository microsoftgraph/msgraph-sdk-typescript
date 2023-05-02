import {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import {CrossTenantAccessPolicyTargetConfiguration} from './crossTenantAccessPolicyTargetConfiguration';
import {serializeCrossTenantAccessPolicyTargetConfiguration} from './serializeCrossTenantAccessPolicyTargetConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyB2BSetting(writer: SerializationWriter, crossTenantAccessPolicyB2BSetting: CrossTenantAccessPolicyB2BSetting | undefined = {} as CrossTenantAccessPolicyB2BSetting) : void {
        writer.writeObjectValue<CrossTenantAccessPolicyTargetConfiguration>("applications", crossTenantAccessPolicyB2BSetting.applications, serializeCrossTenantAccessPolicyTargetConfiguration);
        writer.writeStringValue("@odata.type", crossTenantAccessPolicyB2BSetting.odataType);
        writer.writeObjectValue<CrossTenantAccessPolicyTargetConfiguration>("usersAndGroups", crossTenantAccessPolicyB2BSetting.usersAndGroups, serializeCrossTenantAccessPolicyTargetConfiguration);
        writer.writeAdditionalData(crossTenantAccessPolicyB2BSetting.additionalData);
}
