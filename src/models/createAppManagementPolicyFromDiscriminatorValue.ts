import {deserializeIntoAppManagementPolicy} from './deserializeIntoAppManagementPolicy';
import {AppManagementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppManagementPolicy;
}
