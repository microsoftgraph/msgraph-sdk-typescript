import { type DomainIdentitySource } from './domainIdentitySource';
import { serializeIdentitySource } from './serializeIdentitySource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDomainIdentitySource(writer: SerializationWriter, domainIdentitySource: DomainIdentitySource | undefined = {} as DomainIdentitySource) : void {
        serializeIdentitySource(writer, domainIdentitySource)
        writer.writeStringValue("displayName", domainIdentitySource.displayName);
        writer.writeStringValue("domainName", domainIdentitySource.domainName);
}
