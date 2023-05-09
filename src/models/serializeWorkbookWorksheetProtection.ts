import {serializeEntity} from './serializeEntity';
import {serializeWorkbookWorksheetProtectionOptions} from './serializeWorkbookWorksheetProtectionOptions';
import {WorkbookWorksheetProtection} from './workbookWorksheetProtection';
import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheetProtection(writer: SerializationWriter, workbookWorksheetProtection: WorkbookWorksheetProtection | undefined = {} as WorkbookWorksheetProtection) : void {
        serializeEntity(writer, workbookWorksheetProtection)
        writer.writeObjectValue<WorkbookWorksheetProtectionOptions>("options", workbookWorksheetProtection.options, serializeWorkbookWorksheetProtectionOptions);
        writer.writeBooleanValue("protected", workbookWorksheetProtection.protected);
}
