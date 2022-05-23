import {IdentitySourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentitySourceImpl();
}
