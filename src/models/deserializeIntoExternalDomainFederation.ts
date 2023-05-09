import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {ExternalDomainFederation} from './externalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalDomainFederation(externalDomainFederation: ExternalDomainFederation | undefined = {} as ExternalDomainFederation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(externalDomainFederation),
        "displayName": n => { externalDomainFederation.displayName = n.getStringValue(); },
        "domainName": n => { externalDomainFederation.domainName = n.getStringValue(); },
        "issuerUri": n => { externalDomainFederation.issuerUri = n.getStringValue(); },
    }
}
