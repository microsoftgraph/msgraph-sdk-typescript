import {createHostFromDiscriminatorValue} from './createHostFromDiscriminatorValue';
import {deserializeIntoArtifact} from './deserializeIntoArtifact';
import {Host} from './host';
import {HostComponent} from './hostComponent';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostComponent(hostComponent: HostComponent | undefined = {} as HostComponent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoArtifact(hostComponent),
        "category": n => { hostComponent.category = n.getStringValue(); },
        "firstSeenDateTime": n => { hostComponent.firstSeenDateTime = n.getDateValue(); },
        "host": n => { hostComponent.host = n.getObjectValue<Host>(createHostFromDiscriminatorValue); },
        "lastSeenDateTime": n => { hostComponent.lastSeenDateTime = n.getDateValue(); },
        "name": n => { hostComponent.name = n.getStringValue(); },
        "version": n => { hostComponent.version = n.getStringValue(); },
    }
}
