import { deserializeIntoSegmentCollectionResponse } from './deserializeIntoSegmentCollectionResponse';
import { type SegmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSegmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSegmentCollectionResponse;
}
