import {EntitlementManagementSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : EntitlementManagementSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EntitlementManagementSettingsImpl();
}
