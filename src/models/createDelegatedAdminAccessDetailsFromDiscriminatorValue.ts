import { deserializeIntoDelegatedAdminAccessDetails } from './deserializeIntoDelegatedAdminAccessDetails';
import { type DelegatedAdminAccessDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDelegatedAdminAccessDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDelegatedAdminAccessDetails;
}
