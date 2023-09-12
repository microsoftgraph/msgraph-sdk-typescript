import { deserializeIntoWorkbookIcon } from './deserializeIntoWorkbookIcon';
import { type WorkbookIcon } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookIconFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookIcon;
}
