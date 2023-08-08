import {createExternalDomainNameFromDiscriminatorValue} from './createExternalDomainNameFromDiscriminatorValue';
import {deserializeIntoSamlOrWsFedProvider} from './deserializeIntoSamlOrWsFedProvider';
import type {ExternalDomainName} from './externalDomainName';
import type {SamlOrWsFedExternalDomainFederation} from './samlOrWsFedExternalDomainFederation';
import {serializeExternalDomainName} from './serializeExternalDomainName';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSamlOrWsFedExternalDomainFederation(samlOrWsFedExternalDomainFederation: SamlOrWsFedExternalDomainFederation | undefined = {} as SamlOrWsFedExternalDomainFederation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSamlOrWsFedProvider(samlOrWsFedExternalDomainFederation),
        "domains": n => { samlOrWsFedExternalDomainFederation.domains = n.getCollectionOfObjectValues<ExternalDomainName>(createExternalDomainNameFromDiscriminatorValue); },
    }
}
