import {AclCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAclCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AclCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AclCollectionResponse();
}
