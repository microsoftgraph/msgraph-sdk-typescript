import {deserializeIntoWorkbookChartAreaFormat} from './deserializeIntoWorkbookChartAreaFormat';
import {WorkbookChartAreaFormat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAreaFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookChartAreaFormat;
}
