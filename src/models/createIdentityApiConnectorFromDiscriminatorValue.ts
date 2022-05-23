import {IdentityApiConnectorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityApiConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityApiConnectorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityApiConnectorImpl();
}
