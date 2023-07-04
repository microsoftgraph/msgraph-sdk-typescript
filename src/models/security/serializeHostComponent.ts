import {Host} from './host';
import {HostComponent} from './hostComponent';
import {serializeArtifact} from './serializeArtifact';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostComponent(writer: SerializationWriter, hostComponent: HostComponent | undefined = {} as HostComponent) : void {
        serializeArtifact(writer, hostComponent)
        writer.writeStringValue("category", hostComponent.category);
        writer.writeDateValue("firstSeenDateTime", hostComponent.firstSeenDateTime);
        writer.writeObjectValue<Host>("host", hostComponent.host, serializeHost);
        writer.writeDateValue("lastSeenDateTime", hostComponent.lastSeenDateTime);
        writer.writeStringValue("name", hostComponent.name);
        writer.writeStringValue("version", hostComponent.version);
}
