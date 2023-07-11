import {deserializeIntoHost} from './deserializeIntoHost';
import {Hostname} from './hostname';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostname(hostname: Hostname | undefined = {} as Hostname) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoHost(hostname),
        "registrant": n => { hostname.registrant = n.getStringValue(); },
        "registrar": n => { hostname.registrar = n.getStringValue(); },
    }
}
