import {deserializeIntoEntitlementManagementSettings} from './deserializeIntoEntitlementManagementSettings';
import {EntitlementManagementSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEntitlementManagementSettings;
}
