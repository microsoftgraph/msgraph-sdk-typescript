import { type OnenoteEntitySchemaObjectModel } from './onenoteEntitySchemaObjectModel';
import { serializeOnenoteEntityBaseModel } from './serializeOnenoteEntityBaseModel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntitySchemaObjectModel(writer: SerializationWriter, onenoteEntitySchemaObjectModel: OnenoteEntitySchemaObjectModel | undefined = {} as OnenoteEntitySchemaObjectModel) : void {
        serializeOnenoteEntityBaseModel(writer, onenoteEntitySchemaObjectModel)
        writer.writeDateValue("createdDateTime", onenoteEntitySchemaObjectModel.createdDateTime);
}
