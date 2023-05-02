import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntityBaseModel(onenoteEntityBaseModel: OnenoteEntityBaseModel | undefined = {} as OnenoteEntityBaseModel) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onenoteEntityBaseModel),
        "self": n => { onenoteEntityBaseModel.self = n.getStringValue(); },
    }
}
