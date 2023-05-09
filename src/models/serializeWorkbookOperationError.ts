import {WorkbookOperationError} from './workbookOperationError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookOperationError(writer: SerializationWriter, workbookOperationError: WorkbookOperationError | undefined = {} as WorkbookOperationError) : void {
        writer.writeStringValue("code", workbookOperationError.code);
        writer.writeObjectValue<WorkbookOperationError>("innerError", workbookOperationError.innerError, serializeWorkbookOperationError);
        writer.writeStringValue("message", workbookOperationError.message);
        writer.writeStringValue("@odata.type", workbookOperationError.odataType);
        writer.writeAdditionalData(workbookOperationError.additionalData);
}
