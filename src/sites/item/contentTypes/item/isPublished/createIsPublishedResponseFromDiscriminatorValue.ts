import {deserializeIntoIsPublishedResponse} from './deserializeIntoIsPublishedResponse';
import {IsPublishedResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsPublishedResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsPublishedResponse;
}
