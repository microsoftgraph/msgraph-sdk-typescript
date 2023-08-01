import type {Entity} from './entity';
import type {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import type {WorkbookChartAxes} from './workbookChartAxes';
import type {WorkbookChartDataLabels} from './workbookChartDataLabels';
import type {WorkbookChartLegend} from './workbookChartLegend';
import type {WorkbookChartSeries} from './workbookChartSeries';
import type {WorkbookChartTitle} from './workbookChartTitle';
import type {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChart extends Entity, Parsable {
    /**
     * Represents chart axes. Read-only.
     */
    axes?: WorkbookChartAxes | undefined;
    /**
     * Represents the datalabels on the chart. Read-only.
     */
    dataLabels?: WorkbookChartDataLabels | undefined;
    /**
     * Encapsulates the format properties for the chart area. Read-only.
     */
    format?: WorkbookChartAreaFormat | undefined;
    /**
     * Represents the height, in points, of the chart object.
     */
    height?: number | undefined;
    /**
     * The distance, in points, from the left side of the chart to the worksheet origin.
     */
    left?: number | undefined;
    /**
     * Represents the legend for the chart. Read-only.
     */
    legend?: WorkbookChartLegend | undefined;
    /**
     * Represents the name of a chart object.
     */
    name?: string | undefined;
    /**
     * Represents either a single series or collection of series in the chart. Read-only.
     */
    series?: WorkbookChartSeries[] | undefined;
    /**
     * Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
     */
    title?: WorkbookChartTitle | undefined;
    /**
     * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
     */
    top?: number | undefined;
    /**
     * Represents the width, in points, of the chart object.
     */
    width?: number | undefined;
    /**
     * The worksheet containing the current chart. Read-only.
     */
    worksheet?: WorkbookWorksheet | undefined;
}
