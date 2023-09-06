import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type Segment } from './segment';
import { type SegmentCollectionResponse } from './segmentCollectionResponse';
import { serializeSegment } from './serializeSegment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSegmentCollectionResponse(writer: SerializationWriter, segmentCollectionResponse: SegmentCollectionResponse | undefined = {} as SegmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, segmentCollectionResponse)
        writer.writeCollectionOfObjectValues<Segment>("value", segmentCollectionResponse.value, serializeSegment);
}
