import {FileSecurityStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileSecurityStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileSecurityStateImpl();
}
