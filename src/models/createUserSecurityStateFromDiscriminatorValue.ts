import {deserializeIntoUserSecurityState} from './deserializeIntoUserSecurityState';
import {UserSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSecurityState;
}
