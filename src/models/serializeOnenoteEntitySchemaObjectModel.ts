import {OnenoteEntitySchemaObjectModel} from './onenoteEntitySchemaObjectModel';
import {serializeOnenoteEntityBaseModel} from './serializeOnenoteEntityBaseModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntitySchemaObjectModel(writer: SerializationWriter, onenoteEntitySchemaObjectModel: OnenoteEntitySchemaObjectModel | undefined = {} as OnenoteEntitySchemaObjectModel) : void {
        serializeOnenoteEntityBaseModel(writer, onenoteEntitySchemaObjectModel)
        writer.writeDateValue("createdDateTime", onenoteEntitySchemaObjectModel.createdDateTime);
}
