import {createWorkbookChartAreaFormatFromDiscriminatorValue} from './createWorkbookChartAreaFormatFromDiscriminatorValue';
import {createWorkbookChartAxesFromDiscriminatorValue} from './createWorkbookChartAxesFromDiscriminatorValue';
import {createWorkbookChartDataLabelsFromDiscriminatorValue} from './createWorkbookChartDataLabelsFromDiscriminatorValue';
import {createWorkbookChartLegendFromDiscriminatorValue} from './createWorkbookChartLegendFromDiscriminatorValue';
import {createWorkbookChartSeriesFromDiscriminatorValue} from './createWorkbookChartSeriesFromDiscriminatorValue';
import {createWorkbookChartTitleFromDiscriminatorValue} from './createWorkbookChartTitleFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookChartAreaFormat} from './serializeWorkbookChartAreaFormat';
import {serializeWorkbookChartAxes} from './serializeWorkbookChartAxes';
import {serializeWorkbookChartDataLabels} from './serializeWorkbookChartDataLabels';
import {serializeWorkbookChartLegend} from './serializeWorkbookChartLegend';
import {serializeWorkbookChartSeries} from './serializeWorkbookChartSeries';
import {serializeWorkbookChartTitle} from './serializeWorkbookChartTitle';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {WorkbookChart} from './workbookChart';
import {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import {WorkbookChartAxes} from './workbookChartAxes';
import {WorkbookChartDataLabels} from './workbookChartDataLabels';
import {WorkbookChartLegend} from './workbookChartLegend';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartTitle} from './workbookChartTitle';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChart(workbookChart: WorkbookChart | undefined = {} as WorkbookChart) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChart),
        "axes": n => { workbookChart.axes = n.getObjectValue<WorkbookChartAxes>(createWorkbookChartAxesFromDiscriminatorValue); },
        "dataLabels": n => { workbookChart.dataLabels = n.getObjectValue<WorkbookChartDataLabels>(createWorkbookChartDataLabelsFromDiscriminatorValue); },
        "format": n => { workbookChart.format = n.getObjectValue<WorkbookChartAreaFormat>(createWorkbookChartAreaFormatFromDiscriminatorValue); },
        "height": n => { workbookChart.height = n.getNumberValue(); },
        "left": n => { workbookChart.left = n.getNumberValue(); },
        "legend": n => { workbookChart.legend = n.getObjectValue<WorkbookChartLegend>(createWorkbookChartLegendFromDiscriminatorValue); },
        "name": n => { workbookChart.name = n.getStringValue(); },
        "series": n => { workbookChart.series = n.getCollectionOfObjectValues<WorkbookChartSeries>(createWorkbookChartSeriesFromDiscriminatorValue); },
        "title": n => { workbookChart.title = n.getObjectValue<WorkbookChartTitle>(createWorkbookChartTitleFromDiscriminatorValue); },
        "top": n => { workbookChart.top = n.getNumberValue(); },
        "width": n => { workbookChart.width = n.getNumberValue(); },
        "worksheet": n => { workbookChart.worksheet = n.getObjectValue<WorkbookWorksheet>(createWorkbookWorksheetFromDiscriminatorValue); },
    }
}
