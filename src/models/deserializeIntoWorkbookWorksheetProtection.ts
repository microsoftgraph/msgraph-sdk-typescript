import { createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue } from './createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookWorksheetProtectionOptions } from './serializeWorkbookWorksheetProtectionOptions';
import { type WorkbookWorksheetProtection } from './workbookWorksheetProtection';
import { type WorkbookWorksheetProtectionOptions } from './workbookWorksheetProtectionOptions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheetProtection(workbookWorksheetProtection: WorkbookWorksheetProtection | undefined = {} as WorkbookWorksheetProtection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookWorksheetProtection),
        "options": n => { workbookWorksheetProtection.options = n.getObjectValue<WorkbookWorksheetProtectionOptions>(createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue); },
        "protected": n => { workbookWorksheetProtection.protected = n.getBooleanValue(); },
    }
}
