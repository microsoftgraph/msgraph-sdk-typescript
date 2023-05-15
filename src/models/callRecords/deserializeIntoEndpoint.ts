import {createUserAgentFromDiscriminatorValue} from './createUserAgentFromDiscriminatorValue';
import {Endpoint} from './endpoint';
import {serializeUserAgent} from './serializeUserAgent';
import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEndpoint(endpoint: Endpoint | undefined = {} as Endpoint) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { endpoint.odataType = n.getStringValue(); },
        "userAgent": n => { endpoint.userAgent = n.getObjectValue<UserAgent>(createUserAgentFromDiscriminatorValue); },
    }
}
