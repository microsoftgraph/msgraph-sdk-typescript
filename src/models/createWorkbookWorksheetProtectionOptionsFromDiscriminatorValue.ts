import {WorkbookWorksheetProtectionOptionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookWorksheetProtectionOptionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookWorksheetProtectionOptionsImpl();
}
