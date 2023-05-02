import {deserializeIntoUnifiedRole} from './deserializeIntoUnifiedRole';
import {UnifiedRole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRole;
}
