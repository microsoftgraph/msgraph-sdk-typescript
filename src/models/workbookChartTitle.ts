import {createWorkbookChartTitleFormatFromDiscriminatorValue} from './createWorkbookChartTitleFormatFromDiscriminatorValue';
import {Entity, WorkbookChartTitleFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartTitle extends Entity implements Parsable {
    /** Represents the formatting of a chart title, which includes fill and font formatting. Read-only. */
    private _format?: WorkbookChartTitleFormat | undefined;
    /** Boolean value representing if the chart title will overlay the chart or not. */
    private _overlay?: boolean | undefined;
    /** Represents the title text of a chart. */
    private _text?: string | undefined;
    /** A boolean value the represents the visibility of a chart title object. */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartTitle and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the format property value. Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
     * @returns a workbookChartTitleFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartTitleFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartTitleFormat>(createWorkbookChartTitleFormatFromDiscriminatorValue); },
            "overlay": n => { this.overlay = n.getBooleanValue(); },
            "text": n => { this.text = n.getStringValue(); },
            "visible": n => { this.visible = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the overlay property value. Boolean value representing if the chart title will overlay the chart or not.
     * @returns a boolean
     */
    public get overlay() {
        return this._overlay;
    };
    /**
     * Sets the overlay property value. Boolean value representing if the chart title will overlay the chart or not.
     * @param value Value to set for the overlay property.
     */
    public set overlay(value: boolean | undefined) {
        this._overlay = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartTitleFormat>("format", this.format);
        writer.writeBooleanValue("overlay", this.overlay);
        writer.writeStringValue("text", this.text);
        writer.writeBooleanValue("visible", this.visible);
    };
    /**
     * Gets the text property value. Represents the title text of a chart.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. Represents the title text of a chart.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
    /**
     * Gets the visible property value. A boolean value the represents the visibility of a chart title object.
     * @returns a boolean
     */
    public get visible() {
        return this._visible;
    };
    /**
     * Sets the visible property value. A boolean value the represents the visibility of a chart title object.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        this._visible = value;
    };
}
