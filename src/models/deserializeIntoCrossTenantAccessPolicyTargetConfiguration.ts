import {createCrossTenantAccessPolicyTargetFromDiscriminatorValue} from './createCrossTenantAccessPolicyTargetFromDiscriminatorValue';
import type {CrossTenantAccessPolicyTarget} from './crossTenantAccessPolicyTarget';
import type {CrossTenantAccessPolicyTargetConfiguration} from './crossTenantAccessPolicyTargetConfiguration';
import {CrossTenantAccessPolicyTargetConfigurationAccessType} from './crossTenantAccessPolicyTargetConfigurationAccessType';
import {serializeCrossTenantAccessPolicyTarget} from './serializeCrossTenantAccessPolicyTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossTenantAccessPolicyTargetConfiguration(crossTenantAccessPolicyTargetConfiguration: CrossTenantAccessPolicyTargetConfiguration | undefined = {} as CrossTenantAccessPolicyTargetConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "accessType": n => { crossTenantAccessPolicyTargetConfiguration.accessType = n.getEnumValue<CrossTenantAccessPolicyTargetConfigurationAccessType>(CrossTenantAccessPolicyTargetConfigurationAccessType); },
        "@odata.type": n => { crossTenantAccessPolicyTargetConfiguration.odataType = n.getStringValue(); },
        "targets": n => { crossTenantAccessPolicyTargetConfiguration.targets = n.getCollectionOfObjectValues<CrossTenantAccessPolicyTarget>(createCrossTenantAccessPolicyTargetFromDiscriminatorValue); },
    }
}
