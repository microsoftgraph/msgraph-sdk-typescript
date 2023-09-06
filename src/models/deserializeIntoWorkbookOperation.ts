import { createWorkbookOperationErrorFromDiscriminatorValue } from './createWorkbookOperationErrorFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookOperationError } from './serializeWorkbookOperationError';
import { type WorkbookOperation } from './workbookOperation';
import { type WorkbookOperationError } from './workbookOperationError';
import { WorkbookOperationStatus } from './workbookOperationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperation(workbookOperation: WorkbookOperation | undefined = {} as WorkbookOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookOperation),
        "error": n => { workbookOperation.errorEscaped = n.getObjectValue<WorkbookOperationError>(createWorkbookOperationErrorFromDiscriminatorValue); },
        "resourceLocation": n => { workbookOperation.resourceLocation = n.getStringValue(); },
        "status": n => { workbookOperation.status = n.getEnumValue<WorkbookOperationStatus>(WorkbookOperationStatus); },
    }
}
