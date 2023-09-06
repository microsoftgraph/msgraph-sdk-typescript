import { createWorkbookChartLineFormatFromDiscriminatorValue } from './createWorkbookChartLineFormatFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookChartLineFormat } from './serializeWorkbookChartLineFormat';
import { type WorkbookChartGridlinesFormat } from './workbookChartGridlinesFormat';
import { type WorkbookChartLineFormat } from './workbookChartLineFormat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartGridlinesFormat(workbookChartGridlinesFormat: WorkbookChartGridlinesFormat | undefined = {} as WorkbookChartGridlinesFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartGridlinesFormat),
        "line": n => { workbookChartGridlinesFormat.line = n.getObjectValue<WorkbookChartLineFormat>(createWorkbookChartLineFormatFromDiscriminatorValue); },
    }
}
