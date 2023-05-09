import {deserializeIntoWorkbookSortField} from './deserializeIntoWorkbookSortField';
import {WorkbookSortField} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookSortFieldFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookSortField;
}
