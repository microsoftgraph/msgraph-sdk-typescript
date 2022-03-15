import {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookChartAreaFormatFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookChartAreaFormat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookChartAreaFormat();
}
