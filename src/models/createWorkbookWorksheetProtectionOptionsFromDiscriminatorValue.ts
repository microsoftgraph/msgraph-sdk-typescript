import { deserializeIntoWorkbookWorksheetProtectionOptions } from './deserializeIntoWorkbookWorksheetProtectionOptions';
import { type WorkbookWorksheetProtectionOptions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookWorksheetProtectionOptions;
}
