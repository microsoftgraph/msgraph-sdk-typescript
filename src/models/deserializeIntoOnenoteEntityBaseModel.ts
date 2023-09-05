import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type OnenoteEntityBaseModel } from './onenoteEntityBaseModel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntityBaseModel(onenoteEntityBaseModel: OnenoteEntityBaseModel | undefined = {} as OnenoteEntityBaseModel) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onenoteEntityBaseModel),
        "self": n => { onenoteEntityBaseModel.self = n.getStringValue(); },
    }
}
