import { type ExternalDomainName } from './externalDomainName';
import { type SamlOrWsFedExternalDomainFederation } from './samlOrWsFedExternalDomainFederation';
import { serializeExternalDomainName } from './serializeExternalDomainName';
import { serializeSamlOrWsFedProvider } from './serializeSamlOrWsFedProvider';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSamlOrWsFedExternalDomainFederation(writer: SerializationWriter, samlOrWsFedExternalDomainFederation: SamlOrWsFedExternalDomainFederation | undefined = {} as SamlOrWsFedExternalDomainFederation) : void {
        serializeSamlOrWsFedProvider(writer, samlOrWsFedExternalDomainFederation)
        writer.writeCollectionOfObjectValues<ExternalDomainName>("domains", samlOrWsFedExternalDomainFederation.domains, serializeExternalDomainName);
}
