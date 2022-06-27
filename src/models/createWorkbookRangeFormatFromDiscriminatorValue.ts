import {WorkbookRangeFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookRangeFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookRangeFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookRangeFormatImpl();
}
