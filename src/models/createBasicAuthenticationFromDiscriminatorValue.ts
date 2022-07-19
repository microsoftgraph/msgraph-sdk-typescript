import {BasicAuthentication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBasicAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) : BasicAuthentication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BasicAuthentication();
}
