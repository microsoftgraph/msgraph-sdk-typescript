import { deserializeIntoAdmin } from './deserializeIntoAdmin';
import { type Admin } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAdminFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdmin;
}
