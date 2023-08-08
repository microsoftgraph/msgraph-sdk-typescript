import type {Host} from './host';
import type {HostCookie} from './hostCookie';
import {serializeArtifact} from './serializeArtifact';
import {serializeHost} from './serializeHost';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostCookie(writer: SerializationWriter, hostCookie: HostCookie | undefined = {} as HostCookie) : void {
        serializeArtifact(writer, hostCookie)
        writer.writeStringValue("domain", hostCookie.domain);
        writer.writeDateValue("firstSeenDateTime", hostCookie.firstSeenDateTime);
        writer.writeObjectValue<Host>("host", hostCookie.host, serializeHost);
        writer.writeDateValue("lastSeenDateTime", hostCookie.lastSeenDateTime);
        writer.writeStringValue("name", hostCookie.name);
}
