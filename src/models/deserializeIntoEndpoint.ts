import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {Endpoint} from './endpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEndpoint(endpoint: Endpoint | undefined = {} as Endpoint) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(endpoint),
        "capability": n => { endpoint.capability = n.getStringValue(); },
        "providerId": n => { endpoint.providerId = n.getStringValue(); },
        "providerName": n => { endpoint.providerName = n.getStringValue(); },
        "providerResourceId": n => { endpoint.providerResourceId = n.getStringValue(); },
        "uri": n => { endpoint.uri = n.getStringValue(); },
    }
}
