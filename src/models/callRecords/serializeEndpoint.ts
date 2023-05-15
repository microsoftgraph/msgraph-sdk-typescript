import {Endpoint} from './endpoint';
import {serializeUserAgent} from './serializeUserAgent';
import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEndpoint(writer: SerializationWriter, endpoint: Endpoint | undefined = {} as Endpoint) : void {
        writer.writeStringValue("@odata.type", endpoint.odataType);
        writer.writeObjectValue<UserAgent>("userAgent", endpoint.userAgent, serializeUserAgent);
        writer.writeAdditionalData(endpoint.additionalData);
}
