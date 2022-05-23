import {UriClickSecurityStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUriClickSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : UriClickSecurityStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UriClickSecurityStateImpl();
}
