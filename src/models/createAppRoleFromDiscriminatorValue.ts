import { deserializeIntoAppRole } from './deserializeIntoAppRole';
import { type AppRole } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppRole;
}
