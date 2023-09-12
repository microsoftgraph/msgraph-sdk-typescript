import { deserializeIntoWorkbookNamedItem } from './deserializeIntoWorkbookNamedItem';
import { type WorkbookNamedItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookNamedItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookNamedItem;
}
