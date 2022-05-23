import {WorkbookChartAxisFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAxisFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAxisFormatImpl();
}
