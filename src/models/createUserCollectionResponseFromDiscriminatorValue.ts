import { deserializeIntoUserCollectionResponse } from './deserializeIntoUserCollectionResponse';
import { type UserCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserCollectionResponse;
}
