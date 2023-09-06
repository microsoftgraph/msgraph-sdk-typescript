import { type OperationError } from './operationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOperationError(operationError: OperationError | undefined = {} as OperationError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { operationError.code = n.getStringValue(); },
        "message": n => { operationError.message = n.getStringValue(); },
        "@odata.type": n => { operationError.odataType = n.getStringValue(); },
    }
}
