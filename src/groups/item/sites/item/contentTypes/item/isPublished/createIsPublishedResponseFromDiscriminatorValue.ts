import { deserializeIntoIsPublishedResponse } from './deserializeIntoIsPublishedResponse';
import { type IsPublishedResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsPublishedResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsPublishedResponse;
}
