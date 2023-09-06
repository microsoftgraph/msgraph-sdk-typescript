import { deserializeIntoWorkbookFilter } from './deserializeIntoWorkbookFilter';
import { type WorkbookFilter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFilter;
}
