import {ObjectIdentityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ObjectIdentityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ObjectIdentityCollectionResponse();
}
