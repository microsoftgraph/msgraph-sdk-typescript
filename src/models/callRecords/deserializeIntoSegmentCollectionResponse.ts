import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createSegmentFromDiscriminatorValue } from './createSegmentFromDiscriminatorValue';
import { type Segment } from './segment';
import { type SegmentCollectionResponse } from './segmentCollectionResponse';
import { serializeSegment } from './serializeSegment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSegmentCollectionResponse(segmentCollectionResponse: SegmentCollectionResponse | undefined = {} as SegmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(segmentCollectionResponse),
        "value": n => { segmentCollectionResponse.value = n.getCollectionOfObjectValues<Segment>(createSegmentFromDiscriminatorValue); },
    }
}
