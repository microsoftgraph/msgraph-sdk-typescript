import {deserializeIntoWorkbookTableRow} from './deserializeIntoWorkbookTableRow';
import {WorkbookTableRow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableRowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableRow;
}
