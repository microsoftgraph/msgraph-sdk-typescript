import { createUserAgentFromDiscriminatorValue } from './createUserAgentFromDiscriminatorValue';
import { type Endpoint } from './endpoint';
import { serializeUserAgent } from './serializeUserAgent';
import { type UserAgent } from './userAgent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEndpoint(endpoint: Endpoint | undefined = {} as Endpoint) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { endpoint.odataType = n.getStringValue(); },
        "userAgent": n => { endpoint.userAgent = n.getObjectValue<UserAgent>(createUserAgentFromDiscriminatorValue); },
    }
}
