import { deserializeIntoOnlineMeetingCollectionResponse } from './deserializeIntoOnlineMeetingCollectionResponse';
import { type OnlineMeetingCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnlineMeetingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnlineMeetingCollectionResponse;
}
