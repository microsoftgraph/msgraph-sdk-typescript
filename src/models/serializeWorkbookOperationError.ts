import { type WorkbookOperationError } from './workbookOperationError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookOperationError(writer: SerializationWriter, workbookOperationError: WorkbookOperationError | undefined = {} as WorkbookOperationError) : void {
        writer.writeStringValue("code", workbookOperationError.code);
        writer.writeObjectValue<WorkbookOperationError>("innerError", workbookOperationError.innerError, serializeWorkbookOperationError);
        writer.writeStringValue("message", workbookOperationError.message);
        writer.writeStringValue("@odata.type", workbookOperationError.odataType);
        writer.writeAdditionalData(workbookOperationError.additionalData);
}
