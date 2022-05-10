import {MessageSecurityStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageSecurityStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageSecurityStateImpl();
}
