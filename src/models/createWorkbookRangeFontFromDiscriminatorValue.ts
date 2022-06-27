import {WorkbookRangeFontImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFontFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeFontImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeFontImpl();
}
