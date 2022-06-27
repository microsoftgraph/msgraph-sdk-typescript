import {BasicAuthenticationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBasicAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) : BasicAuthenticationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BasicAuthenticationImpl();
}
