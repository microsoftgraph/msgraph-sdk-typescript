import {createWorkbookChartPointFromDiscriminatorValue} from './createWorkbookChartPointFromDiscriminatorValue';
import {createWorkbookChartSeriesFormatFromDiscriminatorValue} from './createWorkbookChartSeriesFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartPointImpl, WorkbookChartSeriesFormatImpl} from './index';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartSeries} from './workbookChartSeries';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartSeriesImpl extends EntityImpl implements WorkbookChartSeries {
    /** Represents the formatting of a chart series, which includes fill and line formatting. Read-only. */
    private _format?: WorkbookChartSeriesFormat | undefined;
    /** Represents the name of a series in a chart. */
    private _name?: string | undefined;
    /** Represents a collection of all points in the series. Read-only. */
    private _points?: WorkbookChartPoint[] | undefined;
    /**
     * Instantiates a new workbookChartSeries and sets the default values.
     * @param workbookChartSeriesParameterValue 
     */
    public constructor(workbookChartSeriesParameterValue?: WorkbookChartSeries | undefined) {
        super(workbookChartSeriesParameterValue);
        this._format = workbookChartSeriesParameterValue?.format;
        this._name = workbookChartSeriesParameterValue?.name;
        this._points = workbookChartSeriesParameterValue?.points;
    };
    /**
     * Gets the format property value. Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
     * @returns a WorkbookChartSeriesFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartSeriesFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartSeriesFormatImpl? value : new WorkbookChartSeriesFormatImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartSeriesFormatImpl>(createWorkbookChartSeriesFormatFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "points": n => { this.points = n.getCollectionOfObjectValues<WorkbookChartPointImpl>(createWorkbookChartPointFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the name property value. Represents the name of a series in a chart.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. Represents the name of a series in a chart.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the points property value. Represents a collection of all points in the series. Read-only.
     * @returns a WorkbookChartPointInterface
     */
    public get points() {
        return this._points;
    };
    /**
     * Sets the points property value. Represents a collection of all points in the series. Read-only.
     * @param value Value to set for the points property.
     */
    public set points(value: WorkbookChartPoint[] | undefined) {
        if(value) {
            const pointsArrValue: WorkbookChartPointImpl[] = [];
            this.points?.forEach(element => {
                pointsArrValue.push((element instanceof WorkbookChartPointImpl? element:new WorkbookChartPointImpl(element)));
            });
            this._points = pointsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.format){
            writer.writeObjectValue<WorkbookChartSeriesFormatImpl>("format", (!this.format || this.format instanceof WorkbookChartSeriesFormatImpl? this.format : new WorkbookChartSeriesFormatImpl(this.format)));
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.points && this.points.length != 0){        const pointsArrValue: WorkbookChartPointImpl[] = [];
        this.points?.forEach(element => {
            pointsArrValue.push((element instanceof WorkbookChartPointImpl? element:new WorkbookChartPointImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WorkbookChartPointImpl>("points", pointsArrValue);
        }
    };
}
