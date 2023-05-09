import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntityBaseModel(writer: SerializationWriter, onenoteEntityBaseModel: OnenoteEntityBaseModel | undefined = {} as OnenoteEntityBaseModel) : void {
        serializeEntity(writer, onenoteEntityBaseModel)
        writer.writeStringValue("self", onenoteEntityBaseModel.self);
}
