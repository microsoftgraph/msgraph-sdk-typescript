import {deserializeIntoWorkbookChartAxisFormat} from './deserializeIntoWorkbookChartAxisFormat';
import {WorkbookChartAxisFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAxisFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAxisFormat;
}
