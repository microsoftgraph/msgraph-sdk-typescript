import { type Endpoint } from './endpoint';
import { serializeUserAgent } from './serializeUserAgent';
import { type UserAgent } from './userAgent';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEndpoint(writer: SerializationWriter, endpoint: Endpoint | undefined = {} as Endpoint) : void {
        writer.writeStringValue("@odata.type", endpoint.odataType);
        writer.writeObjectValue<UserAgent>("userAgent", endpoint.userAgent, serializeUserAgent);
        writer.writeAdditionalData(endpoint.additionalData);
}
