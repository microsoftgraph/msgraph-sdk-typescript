import {WorkbookRangeFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeFormat();
}
