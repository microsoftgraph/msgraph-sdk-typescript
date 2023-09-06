import { deserializeIntoSegment } from './deserializeIntoSegment';
import { type Segment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSegmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSegment;
}
