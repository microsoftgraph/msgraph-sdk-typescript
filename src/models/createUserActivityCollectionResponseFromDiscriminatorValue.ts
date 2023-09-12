import { deserializeIntoUserActivityCollectionResponse } from './deserializeIntoUserActivityCollectionResponse';
import { type UserActivityCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserActivityCollectionResponse;
}
