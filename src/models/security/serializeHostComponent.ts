import { type Host } from './host';
import { type HostComponent } from './hostComponent';
import { serializeArtifact } from './serializeArtifact';
import { serializeHost } from './serializeHost';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHostComponent(writer: SerializationWriter, hostComponent: HostComponent | undefined = {} as HostComponent) : void {
        serializeArtifact(writer, hostComponent)
        writer.writeStringValue("category", hostComponent.category);
        writer.writeDateValue("firstSeenDateTime", hostComponent.firstSeenDateTime);
        writer.writeObjectValue<Host>("host", hostComponent.host, serializeHost);
        writer.writeDateValue("lastSeenDateTime", hostComponent.lastSeenDateTime);
        writer.writeStringValue("name", hostComponent.name);
        writer.writeStringValue("version", hostComponent.version);
}
