import {ProxiedDomain} from './proxiedDomain';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProxiedDomain(proxiedDomain: ProxiedDomain | undefined = {} as ProxiedDomain) : Record<string, (node: ParseNode) => void> {
    return {
        "ipAddressOrFQDN": n => { proxiedDomain.ipAddressOrFQDN = n.getStringValue(); },
        "@odata.type": n => { proxiedDomain.odataType = n.getStringValue(); },
        "proxy": n => { proxiedDomain.proxy = n.getStringValue(); },
    }
}
