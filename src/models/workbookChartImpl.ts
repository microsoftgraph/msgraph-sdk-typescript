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

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartImpl extends EntityImpl implements WorkbookChart {
    /** Represents chart axes. Read-only. */
    private _axes?: WorkbookChartAxes | undefined;
    /** Represents the datalabels on the chart. Read-only. */
    private _dataLabels?: WorkbookChartDataLabels | undefined;
    /** Encapsulates the format properties for the chart area. Read-only. */
    private _format?: WorkbookChartAreaFormat | undefined;
    /** Represents the height, in points, of the chart object. */
    private _height?: number | undefined;
    /** The distance, in points, from the left side of the chart to the worksheet origin. */
    private _left?: number | undefined;
    /** Represents the legend for the chart. Read-only. */
    private _legend?: WorkbookChartLegend | undefined;
    /** Represents the name of a chart object. */
    private _name?: string | undefined;
    /** Represents either a single series or collection of series in the chart. Read-only. */
    private _series?: WorkbookChartSeries[] | undefined;
    /** Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only. */
    private _title?: WorkbookChartTitle | undefined;
    /** Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart). */
    private _top?: number | undefined;
    /** Represents the width, in points, of the chart object. */
    private _width?: number | undefined;
    /** The worksheet containing the current chart. Read-only. */
    private _worksheet?: WorkbookWorksheet | undefined;
    /**
     * Gets the axes property value. Represents chart axes. Read-only.
     * @returns a WorkbookChartAxesInterface
     */
    public get axes() {
        return this._axes;
    };
    /**
     * Sets the axes property value. Represents chart axes. Read-only.
     * @param value Value to set for the axes property.
     */
    public set axes(value: WorkbookChartAxes | undefined) {
        if(value) {
            this._axes = value instanceof WorkbookChartAxesImpl? value as WorkbookChartAxesImpl: new WorkbookChartAxesImpl(value);
        }
    };
    /**
     * Instantiates a new workbookChart and sets the default values.
     * @param workbookChartParameterValue 
     */
    public constructor(workbookChartParameterValue?: WorkbookChart | undefined) {
        super(workbookChartParameterValue);
        this._axes = workbookChartParameterValue?.axes;
        this._dataLabels = workbookChartParameterValue?.dataLabels;
        this._format = workbookChartParameterValue?.format;
        this._height = workbookChartParameterValue?.height;
        this._left = workbookChartParameterValue?.left;
        this._legend = workbookChartParameterValue?.legend;
        this._name = workbookChartParameterValue?.name;
        this._series = workbookChartParameterValue?.series;
        this._title = workbookChartParameterValue?.title;
        this._top = workbookChartParameterValue?.top;
        this._width = workbookChartParameterValue?.width;
        this._worksheet = workbookChartParameterValue?.worksheet;
    };
    /**
     * Gets the dataLabels property value. Represents the datalabels on the chart. Read-only.
     * @returns a WorkbookChartDataLabelsInterface
     */
    public get dataLabels() {
        return this._dataLabels;
    };
    /**
     * Sets the dataLabels property value. Represents the datalabels on the chart. Read-only.
     * @param value Value to set for the dataLabels property.
     */
    public set dataLabels(value: WorkbookChartDataLabels | undefined) {
        if(value) {
            this._dataLabels = value instanceof WorkbookChartDataLabelsImpl? value as WorkbookChartDataLabelsImpl: new WorkbookChartDataLabelsImpl(value);
        }
    };
    /**
     * Gets the format property value. Encapsulates the format properties for the chart area. Read-only.
     * @returns a WorkbookChartAreaFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Encapsulates the format properties for the chart area. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAreaFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartAreaFormatImpl? value as WorkbookChartAreaFormatImpl: new WorkbookChartAreaFormatImpl(value);
        }
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
     * Gets the height property value. Represents the height, in points, of the chart object.
     * @returns a double
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. Represents the height, in points, of the chart object.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        if(value) {
            this._height = value;
        }
    };
    /**
     * Gets the left property value. The distance, in points, from the left side of the chart to the worksheet origin.
     * @returns a double
     */
    public get left() {
        return this._left;
    };
    /**
     * Sets the left property value. The distance, in points, from the left side of the chart to the worksheet origin.
     * @param value Value to set for the left property.
     */
    public set left(value: number | undefined) {
        if(value) {
            this._left = value;
        }
    };
    /**
     * Gets the legend property value. Represents the legend for the chart. Read-only.
     * @returns a WorkbookChartLegendInterface
     */
    public get legend() {
        return this._legend;
    };
    /**
     * Sets the legend property value. Represents the legend for the chart. Read-only.
     * @param value Value to set for the legend property.
     */
    public set legend(value: WorkbookChartLegend | undefined) {
        if(value) {
            this._legend = value instanceof WorkbookChartLegendImpl? value as WorkbookChartLegendImpl: new WorkbookChartLegendImpl(value);
        }
    };
    /**
     * Gets the name property value. Represents the name of a chart object.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Represents the name of a chart object.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.axes){
            writer.writeObjectValue<WorkbookChartAxesImpl>("axes", (this.axes instanceof WorkbookChartAxesImpl? this.axes as WorkbookChartAxesImpl: new WorkbookChartAxesImpl(this.axes)));
        }
        if(this.dataLabels){
            writer.writeObjectValue<WorkbookChartDataLabelsImpl>("dataLabels", (this.dataLabels instanceof WorkbookChartDataLabelsImpl? this.dataLabels as WorkbookChartDataLabelsImpl: new WorkbookChartDataLabelsImpl(this.dataLabels)));
        }
        if(this.format){
            writer.writeObjectValue<WorkbookChartAreaFormatImpl>("format", (this.format instanceof WorkbookChartAreaFormatImpl? this.format as WorkbookChartAreaFormatImpl: new WorkbookChartAreaFormatImpl(this.format)));
        }
        if(this.height){
            writer.writeNumberValue("height", this.height);
        }
        if(this.left){
            writer.writeNumberValue("left", this.left);
        }
        if(this.legend){
            writer.writeObjectValue<WorkbookChartLegendImpl>("legend", (this.legend instanceof WorkbookChartLegendImpl? this.legend as WorkbookChartLegendImpl: new WorkbookChartLegendImpl(this.legend)));
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.series && this.series.length != 0){        const seriesArrValue: WorkbookChartSeriesImpl[] = [];
        this.series?.forEach(element => {
            seriesArrValue.push((element instanceof WorkbookChartSeriesImpl? element as WorkbookChartSeriesImpl:new WorkbookChartSeriesImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookChartSeriesImpl>("series", seriesArrValue);
        }
        if(this.title){
            writer.writeObjectValue<WorkbookChartTitleImpl>("title", (this.title instanceof WorkbookChartTitleImpl? this.title as WorkbookChartTitleImpl: new WorkbookChartTitleImpl(this.title)));
        }
        if(this.top){
            writer.writeNumberValue("top", this.top);
        }
        if(this.width){
            writer.writeNumberValue("width", this.width);
        }
        if(this.worksheet){
            writer.writeObjectValue<WorkbookWorksheetImpl>("worksheet", (this.worksheet instanceof WorkbookWorksheetImpl? this.worksheet as WorkbookWorksheetImpl: new WorkbookWorksheetImpl(this.worksheet)));
        }
    };
    /**
     * Gets the series property value. Represents either a single series or collection of series in the chart. Read-only.
     * @returns a WorkbookChartSeriesInterface
     */
    public get series() {
        return this._series;
    };
    /**
     * Sets the series property value. Represents either a single series or collection of series in the chart. Read-only.
     * @param value Value to set for the series property.
     */
    public set series(value: WorkbookChartSeries[] | undefined) {
        if(value) {
            const seriesArrValue: WorkbookChartSeriesImpl[] = [];
            this.series?.forEach(element => {
                seriesArrValue.push((element instanceof WorkbookChartSeriesImpl? element as WorkbookChartSeriesImpl:new WorkbookChartSeriesImpl(element)));
            });
            this._series = seriesArrValue;
        }
    };
    /**
     * Gets the title property value. Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
     * @returns a WorkbookChartTitleInterface
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
     * @param value Value to set for the title property.
     */
    public set title(value: WorkbookChartTitle | undefined) {
        if(value) {
            this._title = value instanceof WorkbookChartTitleImpl? value as WorkbookChartTitleImpl: new WorkbookChartTitleImpl(value);
        }
    };
    /**
     * Gets the top property value. Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
     * @returns a double
     */
    public get top() {
        return this._top;
    };
    /**
     * Sets the top property value. Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        if(value) {
            this._top = value;
        }
    };
    /**
     * Gets the width property value. Represents the width, in points, of the chart object.
     * @returns a double
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. Represents the width, in points, of the chart object.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        if(value) {
            this._width = value;
        }
    };
    /**
     * Gets the worksheet property value. The worksheet containing the current chart. Read-only.
     * @returns a WorkbookWorksheetInterface
     */
    public get worksheet() {
        return this._worksheet;
    };
    /**
     * Sets the worksheet property value. The worksheet containing the current chart. Read-only.
     * @param value Value to set for the worksheet property.
     */
    public set worksheet(value: WorkbookWorksheet | undefined) {
        if(value) {
            this._worksheet = value instanceof WorkbookWorksheetImpl? value as WorkbookWorksheetImpl: new WorkbookWorksheetImpl(value);
        }
    };
}
