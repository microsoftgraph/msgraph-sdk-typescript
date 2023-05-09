import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {DomainIdentitySource} from './domainIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainIdentitySource(domainIdentitySource: DomainIdentitySource | undefined = {} as DomainIdentitySource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(domainIdentitySource),
        "displayName": n => { domainIdentitySource.displayName = n.getStringValue(); },
        "domainName": n => { domainIdentitySource.domainName = n.getStringValue(); },
    }
}
