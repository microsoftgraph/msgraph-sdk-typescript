import {deserializeIntoUriClickSecurityState} from './deserializeIntoUriClickSecurityState';
import {UriClickSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUriClickSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUriClickSecurityState;
}
