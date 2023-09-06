import { createWorkbookOperationErrorFromDiscriminatorValue } from './createWorkbookOperationErrorFromDiscriminatorValue';
import { serializeWorkbookOperationError } from './serializeWorkbookOperationError';
import { type WorkbookOperationError } from './workbookOperationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperationError(workbookOperationError: WorkbookOperationError | undefined = {} as WorkbookOperationError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { workbookOperationError.code = n.getStringValue(); },
        "innerError": n => { workbookOperationError.innerError = n.getObjectValue<WorkbookOperationError>(createWorkbookOperationErrorFromDiscriminatorValue); },
        "message": n => { workbookOperationError.message = n.getStringValue(); },
        "@odata.type": n => { workbookOperationError.odataType = n.getStringValue(); },
    }
}
