import {deserializeIntoHost} from './deserializeIntoHost';
import type {Hostname} from './hostname';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostname(hostname: Hostname | undefined = {} as Hostname) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoHost(hostname),
        "registrant": n => { hostname.registrant = n.getStringValue(); },
        "registrar": n => { hostname.registrar = n.getStringValue(); },
    }
}
