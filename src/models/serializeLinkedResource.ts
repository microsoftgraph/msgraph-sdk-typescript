import {LinkedResource} from './linkedResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLinkedResource(linkedResource: LinkedResource | undefined = {} as LinkedResource, writer: SerializationWriter) : void {
        serializeEntity(writer, linkedResource)
        writer.writeStringValue("applicationName", linkedResource.applicationName);
        writer.writeStringValue("displayName", linkedResource.displayName);
        writer.writeStringValue("externalId", linkedResource.externalId);
        writer.writeStringValue("webUrl", linkedResource.webUrl);
}
