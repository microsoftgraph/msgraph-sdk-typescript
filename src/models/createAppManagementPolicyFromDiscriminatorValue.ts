import {AppManagementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppManagementPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppManagementPolicy();
}
