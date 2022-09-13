import {WorkbookRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRange();
}
