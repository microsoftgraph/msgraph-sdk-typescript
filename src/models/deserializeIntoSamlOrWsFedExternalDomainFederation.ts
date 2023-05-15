import {createExternalDomainNameFromDiscriminatorValue} from './createExternalDomainNameFromDiscriminatorValue';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import {ExternalDomainName} from './externalDomainName';
import {SamlOrWsFedExternalDomainFederation} from './samlOrWsFedExternalDomainFederation';
import {serializeExternalDomainName} from './serializeExternalDomainName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlOrWsFedExternalDomainFederation(samlOrWsFedExternalDomainFederation: SamlOrWsFedExternalDomainFederation | undefined = {} as SamlOrWsFedExternalDomainFederation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSamlOrWsFedProvider(samlOrWsFedExternalDomainFederation),
        "domains": n => { samlOrWsFedExternalDomainFederation.domains = n.getCollectionOfObjectValues<ExternalDomainName>(createExternalDomainNameFromDiscriminatorValue); },
    }
}
