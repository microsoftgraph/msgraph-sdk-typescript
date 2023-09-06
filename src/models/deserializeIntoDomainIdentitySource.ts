import { deserializeIntoIdentitySource } from './deserializeIntoIdentitySource';
import { type DomainIdentitySource } from './domainIdentitySource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainIdentitySource(domainIdentitySource: DomainIdentitySource | undefined = {} as DomainIdentitySource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(domainIdentitySource),
        "displayName": n => { domainIdentitySource.displayName = n.getStringValue(); },
        "domainName": n => { domainIdentitySource.domainName = n.getStringValue(); },
    }
}
