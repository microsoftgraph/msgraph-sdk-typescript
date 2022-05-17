import {createWorkbookChartAreaFormatFromDiscriminatorValue} from './createWorkbookChartAreaFormatFromDiscriminatorValue';
import {createWorkbookChartAxesFromDiscriminatorValue} from './createWorkbookChartAxesFromDiscriminatorValue';
import {createWorkbookChartDataLabelsFromDiscriminatorValue} from './createWorkbookChartDataLabelsFromDiscriminatorValue';
import {createWorkbookChartLegendFromDiscriminatorValue} from './createWorkbookChartLegendFromDiscriminatorValue';
import {createWorkbookChartSeriesFromDiscriminatorValue} from './createWorkbookChartSeriesFromDiscriminatorValue';
import {createWorkbookChartTitleFromDiscriminatorValue} from './createWorkbookChartTitleFromDiscriminatorValue';
import {createWorkbookWorksheetFromDiscriminatorValue} from './createWorkbookWorksheetFromDiscriminatorValue';
import {EntityImpl, WorkbookChartAreaFormatImpl, WorkbookChartAxesImpl, WorkbookChartDataLabelsImpl, WorkbookChartLegendImpl, WorkbookChartSeriesImpl, WorkbookChartTitleImpl, WorkbookWorksheetImpl} from './index';
import {WorkbookChart} from './workbookChart';
import {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import {WorkbookChartAxes} from './workbookChartAxes';
import {WorkbookChartDataLabels} from './workbookChartDataLabels';
import {WorkbookChartLegend} from './workbookChartLegend';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartTitle} from './workbookChartTitle';
import {WorkbookWorksheet} from './workbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartImpl extends EntityImpl implements Parsable, WorkbookChart {
    /** Represents chart axes. Read-only. */
    axes?: WorkbookChartAxes | undefined;
    /** Represents the datalabels on the chart. Read-only. */
    dataLabels?: WorkbookChartDataLabels | undefined;
    /** Encapsulates the format properties for the chart area. Read-only. */
    format?: WorkbookChartAreaFormat | undefined;
    /** Represents the height, in points, of the chart object. */
    height?: number | undefined;
    /** The distance, in points, from the left side of the chart to the worksheet origin. */
    left?: number | undefined;
    /** Represents the legend for the chart. Read-only. */
    legend?: WorkbookChartLegend | undefined;
    /** Represents the name of a chart object. */
    name?: string | undefined;
    /** Represents either a single series or collection of series in the chart. Read-only. */
    series?: WorkbookChartSeries[] | undefined;
    /** Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only. */
    title?: WorkbookChartTitle | undefined;
    /** Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart). */
    top?: number | undefined;
    /** Represents the width, in points, of the chart object. */
    width?: number | undefined;
    /** The worksheet containing the current chart. Read-only. */
    worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookChart and sets the default values.
     * @param workbookChartParameterValue 
     */
    public constructor(workbookChartParameterValue?: WorkbookChart | undefined) {
        super();
        this.axes = workbookChartParameterValue?.axes ;
        this.dataLabels = workbookChartParameterValue?.dataLabels ;
        this.format = workbookChartParameterValue?.format ;
        this.height = workbookChartParameterValue?.height ;
        this.left = workbookChartParameterValue?.left ;
        this.legend = workbookChartParameterValue?.legend ;
        this.name = workbookChartParameterValue?.name ;
        this.series = workbookChartParameterValue?.series ;
        this.title = workbookChartParameterValue?.title ;
        this.top = workbookChartParameterValue?.top ;
        this.width = workbookChartParameterValue?.width ;
        this.worksheet = workbookChartParameterValue?.worksheet ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "axes": n => { this.axes = n.getObjectValue<WorkbookChartAxesImpl>(createWorkbookChartAxesFromDiscriminatorValue); },
            "dataLabels": n => { this.dataLabels = n.getObjectValue<WorkbookChartDataLabelsImpl>(createWorkbookChartDataLabelsFromDiscriminatorValue); },
            "format": n => { this.format = n.getObjectValue<WorkbookChartAreaFormatImpl>(createWorkbookChartAreaFormatFromDiscriminatorValue); },
            "height": n => { this.height = n.getNumberValue(); },
            "left": n => { this.left = n.getNumberValue(); },
            "legend": n => { this.legend = n.getObjectValue<WorkbookChartLegendImpl>(createWorkbookChartLegendFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "series": n => { this.series = n.getCollectionOfObjectValues<WorkbookChartSeriesImpl>(createWorkbookChartSeriesFromDiscriminatorValue); },
            "title": n => { this.title = n.getObjectValue<WorkbookChartTitleImpl>(createWorkbookChartTitleFromDiscriminatorValue); },
            "top": n => { this.top = n.getNumberValue(); },
            "width": n => { this.width = n.getNumberValue(); },
            "worksheet": n => { this.worksheet = n.getObjectValue<WorkbookWorksheetImpl>(createWorkbookWorksheetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.axes){
        if(this.axes)
        writer.writeObjectValue<WorkbookChartAxesImpl>("axes", new WorkbookChartAxesImpl(this.axes));
        }
        if(this.dataLabels){
        if(this.dataLabels)
        writer.writeObjectValue<WorkbookChartDataLabelsImpl>("dataLabels", new WorkbookChartDataLabelsImpl(this.dataLabels));
        }
        if(this.format){
        if(this.format)
        writer.writeObjectValue<WorkbookChartAreaFormatImpl>("format", new WorkbookChartAreaFormatImpl(this.format));
        }
        if(this.height){
        if(this.height)
        writer.writeNumberValue("height", this.height);
        }
        if(this.left){
        if(this.left)
        writer.writeNumberValue("left", this.left);
        }
        if(this.legend){
        if(this.legend)
        writer.writeObjectValue<WorkbookChartLegendImpl>("legend", new WorkbookChartLegendImpl(this.legend));
        }
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.series){
        const seriesArrValue: WorkbookChartSeriesImpl[] = []; this.series?.forEach(element => {seriesArrValue.push(new WorkbookChartSeriesImpl(element));});
        writer.writeCollectionOfObjectValues<WorkbookChartSeriesImpl>("series", seriesArrValue);
        }
        if(this.title){
        if(this.title)
        writer.writeObjectValue<WorkbookChartTitleImpl>("title", new WorkbookChartTitleImpl(this.title));
        }
        if(this.top){
        if(this.top)
        writer.writeNumberValue("top", this.top);
        }
        if(this.width){
        if(this.width)
        writer.writeNumberValue("width", this.width);
        }
        if(this.worksheet){
        if(this.worksheet)
        writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", new WorkbookWorksheetImpl(this.worksheet));
        }
    };
}
