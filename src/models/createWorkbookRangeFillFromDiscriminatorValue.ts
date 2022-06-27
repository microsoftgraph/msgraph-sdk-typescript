import {WorkbookRangeFillImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFillFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeFillImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeFillImpl();
}
