import {WorkbookChartAxisTitleFormatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAxisTitleFormatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAxisTitleFormatImpl();
}
