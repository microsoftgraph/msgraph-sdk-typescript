import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Segment} from './segment';
import {SegmentCollectionResponse} from './segmentCollectionResponse';
import {serializeSegment} from './serializeSegment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSegmentCollectionResponse(writer: SerializationWriter, segmentCollectionResponse: SegmentCollectionResponse | undefined = {} as SegmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, segmentCollectionResponse)
        writer.writeCollectionOfObjectValues<Segment>("value", segmentCollectionResponse.value, serializeSegment);
}
