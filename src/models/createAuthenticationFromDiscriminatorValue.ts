import {deserializeIntoAuthentication} from './deserializeIntoAuthentication';
import {Authentication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthentication;
}
