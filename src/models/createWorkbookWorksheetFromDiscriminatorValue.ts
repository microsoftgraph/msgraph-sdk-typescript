import { deserializeIntoWorkbookWorksheet } from './deserializeIntoWorkbookWorksheet';
import { type WorkbookWorksheet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookWorksheet;
}
