import {deserializeIntoWorkbookTableColumn} from './deserializeIntoWorkbookTableColumn';
import {WorkbookTableColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookTableColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookTableColumn;
}
