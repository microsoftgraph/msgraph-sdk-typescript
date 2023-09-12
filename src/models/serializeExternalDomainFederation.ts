import { type ExternalDomainFederation } from './externalDomainFederation';
import { serializeIdentitySource } from './serializeIdentitySource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalDomainFederation(writer: SerializationWriter, externalDomainFederation: ExternalDomainFederation | undefined = {} as ExternalDomainFederation) : void {
        serializeIdentitySource(writer, externalDomainFederation)
        writer.writeStringValue("displayName", externalDomainFederation.displayName);
        writer.writeStringValue("domainName", externalDomainFederation.domainName);
        writer.writeStringValue("issuerUri", externalDomainFederation.issuerUri);
}
