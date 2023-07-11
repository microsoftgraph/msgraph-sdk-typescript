import {Host} from './host';
import {HostTracker} from './hostTracker';
import {serializeArtifact} from './serializeArtifact';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostTracker(writer: SerializationWriter, hostTracker: HostTracker | undefined = {} as HostTracker) : void {
        serializeArtifact(writer, hostTracker)
        writer.writeDateValue("firstSeenDateTime", hostTracker.firstSeenDateTime);
        writer.writeObjectValue<Host>("host", hostTracker.host, serializeHost);
        writer.writeStringValue("kind", hostTracker.kind);
        writer.writeDateValue("lastSeenDateTime", hostTracker.lastSeenDateTime);
        writer.writeStringValue("value", hostTracker.value);
}
