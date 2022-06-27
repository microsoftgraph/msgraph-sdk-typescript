import {WorkbookRangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeImpl();
}
