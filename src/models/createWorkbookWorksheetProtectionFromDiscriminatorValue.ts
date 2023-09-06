import { deserializeIntoWorkbookWorksheetProtection } from './deserializeIntoWorkbookWorksheetProtection';
import { type WorkbookWorksheetProtection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookWorksheetProtection;
}
