import {createWorkbookOperationErrorFromDiscriminatorValue} from './createWorkbookOperationErrorFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookOperationError} from './serializeWorkbookOperationError';
import {WorkbookOperation} from './workbookOperation';
import {WorkbookOperationError} from './workbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperation(workbookOperation: WorkbookOperation | undefined = {} as WorkbookOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookOperation),
        "error": n => { workbookOperation.errorEscaped = n.getObjectValue<WorkbookOperationError>(createWorkbookOperationErrorFromDiscriminatorValue); },
        "resourceLocation": n => { workbookOperation.resourceLocation = n.getStringValue(); },
        "status": n => { workbookOperation.status = n.getEnumValue<WorkbookOperationStatus>(WorkbookOperationStatus); },
    }
}
