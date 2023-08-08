import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import type {WorkbookChartFill} from './workbookChartFill';
import type {WorkbookChartLineFormat} from './workbookChartLineFormat';
import type {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartSeriesFormat(workbookChartSeriesFormat: WorkbookChartSeriesFormat | undefined = {} as WorkbookChartSeriesFormat) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartSeriesFormat),
        "fill": n => { workbookChartSeriesFormat.fill = n.getObjectValue<WorkbookChartFill>(createWorkbookChartFillFromDiscriminatorValue); },
        "line": n => { workbookChartSeriesFormat.line = n.getObjectValue<WorkbookChartLineFormat>(createWorkbookChartLineFormatFromDiscriminatorValue); },
    }
}
