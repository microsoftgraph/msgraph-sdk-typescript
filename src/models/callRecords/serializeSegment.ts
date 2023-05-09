import {serializeEntity} from '../serializeEntity';
import {Endpoint} from './endpoint';
import {FailureInfo} from './failureInfo';
import {Media} from './media';
import {Segment} from './segment';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeFailureInfo} from './serializeFailureInfo';
import {serializeMedia} from './serializeMedia';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSegment(writer: SerializationWriter, segment: Segment | undefined = {} as Segment) : void {
        serializeEntity(writer, segment)
        writer.writeObjectValue<Endpoint>("callee", segment.callee, serializeEndpoint);
        writer.writeObjectValue<Endpoint>("caller", segment.caller, serializeEndpoint);
        writer.writeDateValue("endDateTime", segment.endDateTime);
        writer.writeObjectValue<FailureInfo>("failureInfo", segment.failureInfo, serializeFailureInfo);
        writer.writeCollectionOfObjectValues<Media>("media", segment.media, serializeMedia);
        writer.writeDateValue("startDateTime", segment.startDateTime);
}
