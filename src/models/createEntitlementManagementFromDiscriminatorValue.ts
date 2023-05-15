import {deserializeIntoEntitlementManagement} from './deserializeIntoEntitlementManagement';
import {EntitlementManagement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntitlementManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEntitlementManagement;
}
