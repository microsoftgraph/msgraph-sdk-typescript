import { deserializeIntoEventCollectionResponse } from './deserializeIntoEventCollectionResponse';
import { type EventCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventCollectionResponse;
}
