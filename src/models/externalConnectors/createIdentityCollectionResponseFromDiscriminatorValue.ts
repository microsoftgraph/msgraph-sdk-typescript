import {deserializeIntoIdentityCollectionResponse} from './deserializeIntoIdentityCollectionResponse';
import {IdentityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityCollectionResponse;
}
