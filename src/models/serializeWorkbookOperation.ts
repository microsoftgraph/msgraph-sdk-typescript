import {serializeEntity} from './serializeEntity';
import {serializeWorkbookOperationError} from './serializeWorkbookOperationError';
import type {WorkbookOperation} from './workbookOperation';
import type {WorkbookOperationError} from './workbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookOperation(writer: SerializationWriter, workbookOperation: WorkbookOperation | undefined = {} as WorkbookOperation) : void {
        serializeEntity(writer, workbookOperation)
        writer.writeObjectValue<WorkbookOperationError>("error", workbookOperation.errorEscaped, serializeWorkbookOperationError);
        writer.writeStringValue("resourceLocation", workbookOperation.resourceLocation);
        writer.writeEnumValue<WorkbookOperationStatus>("status", workbookOperation.status);
}
