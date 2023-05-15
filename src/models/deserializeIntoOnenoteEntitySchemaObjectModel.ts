import {deserializeIntoOnenoteEntityBaseModel} from './deserializeIntoOnenoteEntityBaseModel';
import {OnenoteEntitySchemaObjectModel} from './onenoteEntitySchemaObjectModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntitySchemaObjectModel(onenoteEntitySchemaObjectModel: OnenoteEntitySchemaObjectModel | undefined = {} as OnenoteEntitySchemaObjectModel) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityBaseModel(onenoteEntitySchemaObjectModel),
        "createdDateTime": n => { onenoteEntitySchemaObjectModel.createdDateTime = n.getDateValue(); },
    }
}
