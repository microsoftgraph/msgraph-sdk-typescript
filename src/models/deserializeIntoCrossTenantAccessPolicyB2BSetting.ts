import {createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue} from './createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue';
import type {CrossTenantAccessPolicyB2BSetting} from './crossTenantAccessPolicyB2BSetting';
import type {CrossTenantAccessPolicyTargetConfiguration} from './crossTenantAccessPolicyTargetConfiguration';
import {serializeCrossTenantAccessPolicyTargetConfiguration} from './serializeCrossTenantAccessPolicyTargetConfiguration';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyB2BSetting(crossTenantAccessPolicyB2BSetting: CrossTenantAccessPolicyB2BSetting | undefined = {} as CrossTenantAccessPolicyB2BSetting) : Record<string, (node: ParseNode) => void> {
    return {
        "applications": n => { crossTenantAccessPolicyB2BSetting.applications = n.getObjectValue<CrossTenantAccessPolicyTargetConfiguration>(createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue); },
        "@odata.type": n => { crossTenantAccessPolicyB2BSetting.odataType = n.getStringValue(); },
        "usersAndGroups": n => { crossTenantAccessPolicyB2BSetting.usersAndGroups = n.getObjectValue<CrossTenantAccessPolicyTargetConfiguration>(createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue); },
    }
}
