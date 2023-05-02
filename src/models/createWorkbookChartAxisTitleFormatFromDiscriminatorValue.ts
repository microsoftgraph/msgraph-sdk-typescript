import {deserializeIntoWorkbookChartAxisTitleFormat} from './deserializeIntoWorkbookChartAxisTitleFormat';
import {WorkbookChartAxisTitleFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisTitleFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxisTitleFormat;
}
