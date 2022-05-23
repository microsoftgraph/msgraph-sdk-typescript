import {HostSecurityStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : HostSecurityStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HostSecurityStateImpl();
}
