import { type OnenoteEntityBaseModel } from './onenoteEntityBaseModel';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntityBaseModel(writer: SerializationWriter, onenoteEntityBaseModel: OnenoteEntityBaseModel | undefined = {} as OnenoteEntityBaseModel) : void {
        serializeEntity(writer, onenoteEntityBaseModel)
        writer.writeStringValue("self", onenoteEntityBaseModel.self);
}
