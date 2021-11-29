import {Entity} from './entity';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartSeries extends Entity implements Parsable {
    /** Represents the formatting of a chart series, which includes fill and line formatting. Read-only.  */
    private _format?: WorkbookChartSeriesFormat | undefined;
    /** Represents the name of a series in a chart.  */
    private _name?: string | undefined;
    /** Represents a collection of all points in the series. Read-only.  */
    private _points?: WorkbookChartPoint[] | undefined;
    /**
     * Instantiates a new workbookChartSeries and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
     * @returns a workbookChartSeriesFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Gets the name property value. Represents the name of a series in a chart.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the points property value. Represents a collection of all points in the series. Read-only.
     * @returns a workbookChartPoint
     */
    public get points() {
        return this._points;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["format", (o, n) => { (o as unknown as WorkbookChartSeries).format = n.getObjectValue<WorkbookChartSeriesFormat>(WorkbookChartSeriesFormat); }],
            ["name", (o, n) => { (o as unknown as WorkbookChartSeries).name = n.getStringValue(); }],
            ["points", (o, n) => { (o as unknown as WorkbookChartSeries).points = n.getCollectionOfObjectValues<WorkbookChartPoint>(WorkbookChartPoint); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartSeriesFormat>("format", this.format);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<WorkbookChartPoint>("points", this.points);
    };
    /**
     * Sets the format property value. Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartSeriesFormat | undefined) {
        this._format = value;
    };
    /**
     * Sets the name property value. Represents the name of a series in a chart.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the points property value. Represents a collection of all points in the series. Read-only.
     * @param value Value to set for the points property.
     */
    public set points(value: WorkbookChartPoint[] | undefined) {
        this._points = value;
    };
}
