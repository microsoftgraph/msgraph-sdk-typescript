import type {WorkbookSessionInfo} from './workbookSessionInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookSessionInfo(writer: SerializationWriter, workbookSessionInfo: WorkbookSessionInfo | undefined = {} as WorkbookSessionInfo) : void {
        writer.writeStringValue("id", workbookSessionInfo.id);
        writer.writeStringValue("@odata.type", workbookSessionInfo.odataType);
        writer.writeBooleanValue("persistChanges", workbookSessionInfo.persistChanges);
        writer.writeAdditionalData(workbookSessionInfo.additionalData);
}
