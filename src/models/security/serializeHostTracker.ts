import { type Host } from './host';
import { type HostTracker } from './hostTracker';
import { serializeArtifact } from './serializeArtifact';
import { serializeHost } from './serializeHost';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHostTracker(writer: SerializationWriter, hostTracker: HostTracker | undefined = {} as HostTracker) : void {
        serializeArtifact(writer, hostTracker)
        writer.writeDateValue("firstSeenDateTime", hostTracker.firstSeenDateTime);
        writer.writeObjectValue<Host>("host", hostTracker.host, serializeHost);
        writer.writeStringValue("kind", hostTracker.kind);
        writer.writeDateValue("lastSeenDateTime", hostTracker.lastSeenDateTime);
        writer.writeStringValue("value", hostTracker.value);
}
