import { serializeEntity } from '../serializeEntity';
import { type Endpoint } from './endpoint';
import { type FailureInfo } from './failureInfo';
import { type Media } from './media';
import { type Segment } from './segment';
import { serializeEndpoint } from './serializeEndpoint';
import { serializeFailureInfo } from './serializeFailureInfo';
import { serializeMedia } from './serializeMedia';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSegment(writer: SerializationWriter, segment: Segment | undefined = {} as Segment) : void {
        serializeEntity(writer, segment)
        writer.writeObjectValue<Endpoint>("callee", segment.callee, serializeEndpoint);
        writer.writeObjectValue<Endpoint>("caller", segment.caller, serializeEndpoint);
        writer.writeDateValue("endDateTime", segment.endDateTime);
        writer.writeObjectValue<FailureInfo>("failureInfo", segment.failureInfo, serializeFailureInfo);
        writer.writeCollectionOfObjectValues<Media>("media", segment.media, serializeMedia);
        writer.writeDateValue("startDateTime", segment.startDateTime);
}
