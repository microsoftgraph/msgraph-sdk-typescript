import {createHostFromDiscriminatorValue} from './createHostFromDiscriminatorValue';
import {deserializeIntoArtifact} from './deserializeIntoArtifact';
import {Host} from './host';
import {HostTracker} from './hostTracker';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostTracker(hostTracker: HostTracker | undefined = {} as HostTracker) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoArtifact(hostTracker),
        "firstSeenDateTime": n => { hostTracker.firstSeenDateTime = n.getDateValue(); },
        "host": n => { hostTracker.host = n.getObjectValue<Host>(createHostFromDiscriminatorValue); },
        "kind": n => { hostTracker.kind = n.getStringValue(); },
        "lastSeenDateTime": n => { hostTracker.lastSeenDateTime = n.getDateValue(); },
        "value": n => { hostTracker.value = n.getStringValue(); },
    }
}
