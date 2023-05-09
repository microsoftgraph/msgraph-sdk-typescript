import {deserializeIntoEntity} from './deserializeIntoEntity';
import {LinkedResource} from './linkedResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLinkedResource(linkedResource: LinkedResource | undefined = {} as LinkedResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(linkedResource),
        "applicationName": n => { linkedResource.applicationName = n.getStringValue(); },
        "displayName": n => { linkedResource.displayName = n.getStringValue(); },
        "externalId": n => { linkedResource.externalId = n.getStringValue(); },
        "webUrl": n => { linkedResource.webUrl = n.getStringValue(); },
    }
}
