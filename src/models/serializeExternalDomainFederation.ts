import {ExternalDomainFederation} from './externalDomainFederation';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalDomainFederation(externalDomainFederation: ExternalDomainFederation | undefined = {} as ExternalDomainFederation, writer: SerializationWriter) : void {
        serializeIdentitySource(writer, externalDomainFederation)
        writer.writeStringValue("displayName", externalDomainFederation.displayName);
        writer.writeStringValue("domainName", externalDomainFederation.domainName);
        writer.writeStringValue("issuerUri", externalDomainFederation.issuerUri);
}
