import {createWorkbookChartLegendFormatFromDiscriminatorValue} from './createWorkbookChartLegendFormatFromDiscriminatorValue';
import {Entity, WorkbookChartLegendFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartLegend extends Entity implements Parsable {
    /** Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.  */
    private _format?: WorkbookChartLegendFormat | undefined;
    /** Boolean value for whether the chart legend should overlap with the main body of the chart.  */
    private _overlay?: boolean | undefined;
    /** Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.  */
    private _position?: string | undefined;
    /** A boolean value the represents the visibility of a ChartLegend object.  */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartLegend and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
     * @returns a workbookChartLegendFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartLegendFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "format": (o, n) => { (o as unknown as WorkbookChartLegend).format = n.getObjectValue<WorkbookChartLegendFormat>(createWorkbookChartLegendFormatFromDiscriminatorValue); },
            "overlay": (o, n) => { (o as unknown as WorkbookChartLegend).overlay = n.getBooleanValue(); },
            "position": (o, n) => { (o as unknown as WorkbookChartLegend).position = n.getStringValue(); },
            "visible": (o, n) => { (o as unknown as WorkbookChartLegend).visible = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the overlay property value. Boolean value for whether the chart legend should overlap with the main body of the chart.
     * @returns a boolean
     */
    public get overlay() {
        return this._overlay;
    };
    /**
     * Sets the overlay property value. Boolean value for whether the chart legend should overlap with the main body of the chart.
     * @param value Value to set for the overlay property.
     */
    public set overlay(value: boolean | undefined) {
        this._overlay = value;
    };
    /**
     * Gets the position property value. Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.
     * @returns a string
     */
    public get position() {
        return this._position;
    };
    /**
     * Sets the position property value. Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.
     * @param value Value to set for the position property.
     */
    public set position(value: string | undefined) {
        this._position = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartLegendFormat>("format", this.format);
        writer.writeBooleanValue("overlay", this.overlay);
        writer.writeStringValue("position", this.position);
        writer.writeBooleanValue("visible", this.visible);
    };
    /**
     * Gets the visible property value. A boolean value the represents the visibility of a ChartLegend object.
     * @returns a boolean
     */
    public get visible() {
        return this._visible;
    };
    /**
     * Sets the visible property value. A boolean value the represents the visibility of a ChartLegend object.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        this._visible = value;
    };
}
