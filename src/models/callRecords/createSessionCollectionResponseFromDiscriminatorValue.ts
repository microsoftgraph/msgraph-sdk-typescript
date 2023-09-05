import { deserializeIntoSessionCollectionResponse } from './deserializeIntoSessionCollectionResponse';
import { type SessionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSessionCollectionResponse;
}
