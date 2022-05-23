import {IdentityCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityCollectionResponseImpl();
}
