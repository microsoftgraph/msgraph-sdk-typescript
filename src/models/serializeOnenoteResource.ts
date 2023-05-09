import {OnenoteResource} from './onenoteResource';
import {serializeOnenoteEntityBaseModel} from './serializeOnenoteEntityBaseModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteResource(writer: SerializationWriter, onenoteResource: OnenoteResource | undefined = {} as OnenoteResource) : void {
        serializeOnenoteEntityBaseModel(writer, onenoteResource)
        writer.writeStringValue("content", onenoteResource.content);
        writer.writeStringValue("contentUrl", onenoteResource.contentUrl);
}
