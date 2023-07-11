import {createHostFromDiscriminatorValue} from './createHostFromDiscriminatorValue';
import {deserializeIntoArtifact} from './deserializeIntoArtifact';
import {Host} from './host';
import {HostCookie} from './hostCookie';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostCookie(hostCookie: HostCookie | undefined = {} as HostCookie) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoArtifact(hostCookie),
        "domain": n => { hostCookie.domain = n.getStringValue(); },
        "firstSeenDateTime": n => { hostCookie.firstSeenDateTime = n.getDateValue(); },
        "host": n => { hostCookie.host = n.getObjectValue<Host>(createHostFromDiscriminatorValue); },
        "lastSeenDateTime": n => { hostCookie.lastSeenDateTime = n.getDateValue(); },
        "name": n => { hostCookie.name = n.getStringValue(); },
    }
}
