import { deserializeIntoContactCollectionResponse } from './deserializeIntoContactCollectionResponse';
import { type ContactCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactCollectionResponse;
}
