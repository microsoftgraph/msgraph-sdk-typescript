import {Endpoint} from './endpoint';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEndpoint(endpoint: Endpoint | undefined = {} as Endpoint, writer: SerializationWriter) : void {
        serializeDirectoryObject(writer, endpoint)
        writer.writeStringValue("capability", endpoint.capability);
        writer.writeStringValue("providerId", endpoint.providerId);
        writer.writeStringValue("providerName", endpoint.providerName);
        writer.writeStringValue("providerResourceId", endpoint.providerResourceId);
        writer.writeStringValue("uri", endpoint.uri);
}
