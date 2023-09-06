import { serializeEntity } from './serializeEntity';
import { serializeWorkbookWorksheetProtectionOptions } from './serializeWorkbookWorksheetProtectionOptions';
import { type WorkbookWorksheetProtection } from './workbookWorksheetProtection';
import { type WorkbookWorksheetProtectionOptions } from './workbookWorksheetProtectionOptions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheetProtection(writer: SerializationWriter, workbookWorksheetProtection: WorkbookWorksheetProtection | undefined = {} as WorkbookWorksheetProtection) : void {
        serializeEntity(writer, workbookWorksheetProtection)
        writer.writeObjectValue<WorkbookWorksheetProtectionOptions>("options", workbookWorksheetProtection.options, serializeWorkbookWorksheetProtectionOptions);
        writer.writeBooleanValue("protected", workbookWorksheetProtection.protected);
}
