import {WorkbookNamedItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookNamedItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookNamedItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookNamedItemImpl();
}
