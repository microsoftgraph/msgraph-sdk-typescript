import {ExternalDomainName} from './externalDomainName';
import {SamlOrWsFedExternalDomainFederation} from './samlOrWsFedExternalDomainFederation';
import {serializeExternalDomainName} from './serializeExternalDomainName';
import {serializeSamlOrWsFedProvider} from './serializeSamlOrWsFedProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSamlOrWsFedExternalDomainFederation(writer: SerializationWriter, samlOrWsFedExternalDomainFederation: SamlOrWsFedExternalDomainFederation | undefined = {} as SamlOrWsFedExternalDomainFederation) : void {
        serializeSamlOrWsFedProvider(writer, samlOrWsFedExternalDomainFederation)
        writer.writeCollectionOfObjectValues<ExternalDomainName>("domains", samlOrWsFedExternalDomainFederation.domains, serializeExternalDomainName);
}
