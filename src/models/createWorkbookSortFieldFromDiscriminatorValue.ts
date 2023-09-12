import { deserializeIntoWorkbookSortField } from './deserializeIntoWorkbookSortField';
import { type WorkbookSortField } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookSortFieldFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookSortField;
}
