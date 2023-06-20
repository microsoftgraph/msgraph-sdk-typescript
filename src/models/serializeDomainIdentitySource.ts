import {DomainIdentitySource} from './domainIdentitySource';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainIdentitySource(domainIdentitySource: DomainIdentitySource | undefined = {} as DomainIdentitySource, writer: SerializationWriter) : void {
        serializeIdentitySource(writer, domainIdentitySource)
        writer.writeStringValue("displayName", domainIdentitySource.displayName);
        writer.writeStringValue("domainName", domainIdentitySource.domainName);
}
