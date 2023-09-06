import { createOnenoteOperationErrorFromDiscriminatorValue } from './createOnenoteOperationErrorFromDiscriminatorValue';
import { deserializeIntoOperation } from './deserializeIntoOperation';
import { type OnenoteOperation } from './onenoteOperation';
import { type OnenoteOperationError } from './onenoteOperationError';
import { serializeOnenoteOperationError } from './serializeOnenoteOperationError';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteOperation(onenoteOperation: OnenoteOperation | undefined = {} as OnenoteOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOperation(onenoteOperation),
        "error": n => { onenoteOperation.errorEscaped = n.getObjectValue<OnenoteOperationError>(createOnenoteOperationErrorFromDiscriminatorValue); },
        "percentComplete": n => { onenoteOperation.percentComplete = n.getStringValue(); },
        "resourceId": n => { onenoteOperation.resourceId = n.getStringValue(); },
        "resourceLocation": n => { onenoteOperation.resourceLocation = n.getStringValue(); },
    }
}
