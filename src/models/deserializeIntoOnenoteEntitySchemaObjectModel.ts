import { deserializeIntoOnenoteEntityBaseModel } from './deserializeIntoOnenoteEntityBaseModel';
import { type OnenoteEntitySchemaObjectModel } from './onenoteEntitySchemaObjectModel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntitySchemaObjectModel(onenoteEntitySchemaObjectModel: OnenoteEntitySchemaObjectModel | undefined = {} as OnenoteEntitySchemaObjectModel) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityBaseModel(onenoteEntitySchemaObjectModel),
        "createdDateTime": n => { onenoteEntitySchemaObjectModel.createdDateTime = n.getDateValue(); },
    }
}
