import {deserializeIntoDelegatedAdminAccessDetails} from './deserializeIntoDelegatedAdminAccessDetails';
import {DelegatedAdminAccessDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDelegatedAdminAccessDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminAccessDetails;
}
