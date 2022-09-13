import {WorkbookRangeFill} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFillFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeFill {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeFill();
}
