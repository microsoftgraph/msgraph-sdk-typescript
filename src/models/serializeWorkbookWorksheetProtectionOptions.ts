import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheetProtectionOptions(writer: SerializationWriter, workbookWorksheetProtectionOptions: WorkbookWorksheetProtectionOptions | undefined = {} as WorkbookWorksheetProtectionOptions) : void {
        writer.writeBooleanValue("allowAutoFilter", workbookWorksheetProtectionOptions.allowAutoFilter);
        writer.writeBooleanValue("allowDeleteColumns", workbookWorksheetProtectionOptions.allowDeleteColumns);
        writer.writeBooleanValue("allowDeleteRows", workbookWorksheetProtectionOptions.allowDeleteRows);
        writer.writeBooleanValue("allowFormatCells", workbookWorksheetProtectionOptions.allowFormatCells);
        writer.writeBooleanValue("allowFormatColumns", workbookWorksheetProtectionOptions.allowFormatColumns);
        writer.writeBooleanValue("allowFormatRows", workbookWorksheetProtectionOptions.allowFormatRows);
        writer.writeBooleanValue("allowInsertColumns", workbookWorksheetProtectionOptions.allowInsertColumns);
        writer.writeBooleanValue("allowInsertHyperlinks", workbookWorksheetProtectionOptions.allowInsertHyperlinks);
        writer.writeBooleanValue("allowInsertRows", workbookWorksheetProtectionOptions.allowInsertRows);
        writer.writeBooleanValue("allowPivotTables", workbookWorksheetProtectionOptions.allowPivotTables);
        writer.writeBooleanValue("allowSort", workbookWorksheetProtectionOptions.allowSort);
        writer.writeStringValue("@odata.type", workbookWorksheetProtectionOptions.odataType);
        writer.writeAdditionalData(workbookWorksheetProtectionOptions.additionalData);
}
