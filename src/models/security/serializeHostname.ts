import { type Hostname } from './hostname';
import { serializeHost } from './serializeHost';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeHostname(writer: SerializationWriter, hostname: Hostname | undefined = {} as Hostname) : void {
        serializeHost(writer, hostname)
        writer.writeStringValue("registrant", hostname.registrant);
        writer.writeStringValue("registrar", hostname.registrar);
}
