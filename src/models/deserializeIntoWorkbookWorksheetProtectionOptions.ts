import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheetProtectionOptions(workbookWorksheetProtectionOptions: WorkbookWorksheetProtectionOptions | undefined = {} as WorkbookWorksheetProtectionOptions) : Record<string, (node: ParseNode) => void> {
    return {
        "allowAutoFilter": n => { workbookWorksheetProtectionOptions.allowAutoFilter = n.getBooleanValue(); },
        "allowDeleteColumns": n => { workbookWorksheetProtectionOptions.allowDeleteColumns = n.getBooleanValue(); },
        "allowDeleteRows": n => { workbookWorksheetProtectionOptions.allowDeleteRows = n.getBooleanValue(); },
        "allowFormatCells": n => { workbookWorksheetProtectionOptions.allowFormatCells = n.getBooleanValue(); },
        "allowFormatColumns": n => { workbookWorksheetProtectionOptions.allowFormatColumns = n.getBooleanValue(); },
        "allowFormatRows": n => { workbookWorksheetProtectionOptions.allowFormatRows = n.getBooleanValue(); },
        "allowInsertColumns": n => { workbookWorksheetProtectionOptions.allowInsertColumns = n.getBooleanValue(); },
        "allowInsertHyperlinks": n => { workbookWorksheetProtectionOptions.allowInsertHyperlinks = n.getBooleanValue(); },
        "allowInsertRows": n => { workbookWorksheetProtectionOptions.allowInsertRows = n.getBooleanValue(); },
        "allowPivotTables": n => { workbookWorksheetProtectionOptions.allowPivotTables = n.getBooleanValue(); },
        "allowSort": n => { workbookWorksheetProtectionOptions.allowSort = n.getBooleanValue(); },
        "@odata.type": n => { workbookWorksheetProtectionOptions.odataType = n.getStringValue(); },
    }
}
