import {createWorkbookChartPointFromDiscriminatorValue} from './createWorkbookChartPointFromDiscriminatorValue';
import {createWorkbookChartSeriesFormatFromDiscriminatorValue} from './createWorkbookChartSeriesFormatFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartPoint} from './serializeWorkbookChartPoint';
import {serializeWorkbookChartSeriesFormat} from './serializeWorkbookChartSeriesFormat';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartSeries(workbookChartSeries: WorkbookChartSeries | undefined = {} as WorkbookChartSeries) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartSeries),
        "format": n => { workbookChartSeries.format = n.getObjectValue<WorkbookChartSeriesFormat>(createWorkbookChartSeriesFormatFromDiscriminatorValue); },
        "name": n => { workbookChartSeries.name = n.getStringValue(); },
        "points": n => { workbookChartSeries.points = n.getCollectionOfObjectValues<WorkbookChartPoint>(createWorkbookChartPointFromDiscriminatorValue); },
    }
}
