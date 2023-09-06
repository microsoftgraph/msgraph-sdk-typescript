import { deserializeIntoUserSourceCollectionResponse } from './deserializeIntoUserSourceCollectionResponse';
import { type UserSourceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSourceCollectionResponse;
}
