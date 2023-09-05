import { type WorkbookSessionInfo } from './workbookSessionInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookSessionInfo(writer: SerializationWriter, workbookSessionInfo: WorkbookSessionInfo | undefined = {} as WorkbookSessionInfo) : void {
        writer.writeStringValue("id", workbookSessionInfo.id);
        writer.writeStringValue("@odata.type", workbookSessionInfo.odataType);
        writer.writeBooleanValue("persistChanges", workbookSessionInfo.persistChanges);
        writer.writeAdditionalData(workbookSessionInfo.additionalData);
}
