import {WorkbookWorksheetProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookWorksheetProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookWorksheetProtectionImpl();
}
