import { type OnenoteOperationError } from './onenoteOperationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteOperationError(onenoteOperationError: OnenoteOperationError | undefined = {} as OnenoteOperationError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { onenoteOperationError.code = n.getStringValue(); },
        "message": n => { onenoteOperationError.message = n.getStringValue(); },
        "@odata.type": n => { onenoteOperationError.odataType = n.getStringValue(); },
    }
}
