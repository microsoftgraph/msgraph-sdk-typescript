import {WorkbookRangeBorderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeBorderFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeBorderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeBorderImpl();
}
