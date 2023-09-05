import { type Artifact } from './artifact';
import { type Host } from './host';
import { type PassiveDnsRecord } from './passiveDnsRecord';
import { serializeArtifact } from './serializeArtifact';
import { serializeHost } from './serializeHost';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePassiveDnsRecord(writer: SerializationWriter, passiveDnsRecord: PassiveDnsRecord | undefined = {} as PassiveDnsRecord) : void {
        serializeArtifact(writer, passiveDnsRecord)
        writer.writeObjectValue<Artifact>("artifact", passiveDnsRecord.artifact, serializeArtifact);
        writer.writeDateValue("collectedDateTime", passiveDnsRecord.collectedDateTime);
        writer.writeDateValue("firstSeenDateTime", passiveDnsRecord.firstSeenDateTime);
        writer.writeDateValue("lastSeenDateTime", passiveDnsRecord.lastSeenDateTime);
        writer.writeObjectValue<Host>("parentHost", passiveDnsRecord.parentHost, serializeHost);
        writer.writeStringValue("recordType", passiveDnsRecord.recordType);
}
