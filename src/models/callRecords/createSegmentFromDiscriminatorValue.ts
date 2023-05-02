import {deserializeIntoSegment} from './deserializeIntoSegment';
import {Segment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSegmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSegment;
}
