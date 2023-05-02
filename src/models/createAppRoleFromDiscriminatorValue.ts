import {deserializeIntoAppRole} from './deserializeIntoAppRole';
import {AppRole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppRole;
}
