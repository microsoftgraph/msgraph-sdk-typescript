import {serializeEntity} from './serializeEntity';
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

export function serializeWorkbookChart(writer: SerializationWriter, workbookChart: WorkbookChart | undefined = {} as WorkbookChart) : void {
        serializeEntity(writer, workbookChart)
        writer.writeObjectValue<WorkbookChartAxes>("axes", workbookChart.axes, serializeWorkbookChartAxes);
        writer.writeObjectValue<WorkbookChartDataLabels>("dataLabels", workbookChart.dataLabels, serializeWorkbookChartDataLabels);
        writer.writeObjectValue<WorkbookChartAreaFormat>("format", workbookChart.format, serializeWorkbookChartAreaFormat);
        writer.writeNumberValue("height", workbookChart.height);
        writer.writeNumberValue("left", workbookChart.left);
        writer.writeObjectValue<WorkbookChartLegend>("legend", workbookChart.legend, serializeWorkbookChartLegend);
        writer.writeStringValue("name", workbookChart.name);
        writer.writeCollectionOfObjectValues<WorkbookChartSeries>("series", workbookChart.series, serializeWorkbookChartSeries);
        writer.writeObjectValue<WorkbookChartTitle>("title", workbookChart.title, serializeWorkbookChartTitle);
        writer.writeNumberValue("top", workbookChart.top);
        writer.writeNumberValue("width", workbookChart.width);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", workbookChart.worksheet, serializeWorkbookWorksheet);
}
