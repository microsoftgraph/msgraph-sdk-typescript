import { type OnenoteResource } from './onenoteResource';
import { serializeOnenoteEntityBaseModel } from './serializeOnenoteEntityBaseModel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnenoteResource(writer: SerializationWriter, onenoteResource: OnenoteResource | undefined = {} as OnenoteResource) : void {
        serializeOnenoteEntityBaseModel(writer, onenoteResource)
        writer.writeStringValue("content", onenoteResource.content);
        writer.writeStringValue("contentUrl", onenoteResource.contentUrl);
}
