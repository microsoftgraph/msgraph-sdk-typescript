import {UnifiedRole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRole {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRole();
}
