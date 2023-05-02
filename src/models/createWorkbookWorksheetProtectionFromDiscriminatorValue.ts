import {deserializeIntoWorkbookWorksheetProtection} from './deserializeIntoWorkbookWorksheetProtection';
import {WorkbookWorksheetProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookWorksheetProtection;
}
