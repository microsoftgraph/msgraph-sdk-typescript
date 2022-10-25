import {UserSecurityStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSecurityStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSecurityStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSecurityStateCollectionResponse();
}
