import {createWorkbookChartLegendFormatFromDiscriminatorValue} from './createWorkbookChartLegendFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartLegendFormatImpl} from './index';
import {WorkbookChartLegend} from './workbookChartLegend';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartLegendImpl extends EntityImpl implements WorkbookChartLegend {
    /** Represents the formatting of a chart legend, which includes fill and font formatting. Read-only. */
    private _format?: WorkbookChartLegendFormat | undefined;
    /** Boolean value for whether the chart legend should overlap with the main body of the chart. */
    private _overlay?: boolean | undefined;
    /** Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom. */
    private _position?: string | undefined;
    /** A boolean value the represents the visibility of a ChartLegend object. */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartLegend and sets the default values.
     * @param workbookChartLegendParameterValue 
     */
    public constructor(workbookChartLegendParameterValue?: WorkbookChartLegend | undefined) {
        super(workbookChartLegendParameterValue);
        this._format = workbookChartLegendParameterValue?.format;
        this._overlay = workbookChartLegendParameterValue?.overlay;
        this._position = workbookChartLegendParameterValue?.position;
        this._visible = workbookChartLegendParameterValue?.visible;
    };
    /**
     * Gets the format property value. Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
     * @returns a WorkbookChartLegendFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartLegendFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartLegendFormatImpl? value : new WorkbookChartLegendFormatImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartLegendFormatImpl>(createWorkbookChartLegendFormatFromDiscriminatorValue); },
            "overlay": n => { this.overlay = n.getBooleanValue(); },
            "position": n => { this.position = n.getStringValue(); },
            "visible": n => { this.visible = n.getBooleanValue(); },
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
        if(value) {
            this._overlay = value;
        }
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
        if(value) {
            this._position = value;
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
            writer.writeObjectValue<WorkbookChartLegendFormatImpl>("format", (!this.format || this.format instanceof WorkbookChartLegendFormatImpl? this.format : new WorkbookChartLegendFormatImpl(this.format)));
        }
        if(this.overlay){
            writer.writeBooleanValue("overlay", this.overlay);
        }
        if(this.position){
            writer.writeStringValue("position", this.position);
        }
        if(this.visible){
            writer.writeBooleanValue("visible", this.visible);
        }
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
        if(value) {
            this._visible = value;
        }
    };
}
