import {SegmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSegmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : SegmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SegmentImpl();
}
