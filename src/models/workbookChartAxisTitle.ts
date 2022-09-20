import {createWorkbookChartAxisTitleFormatFromDiscriminatorValue} from './createWorkbookChartAxisTitleFormatFromDiscriminatorValue';
import {Entity, WorkbookChartAxisTitleFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxisTitle extends Entity implements Parsable {
    /** Represents the formatting of chart axis title. Read-only. */
    private _format?: WorkbookChartAxisTitleFormat | undefined;
    /** Represents the axis title. */
    private _text?: string | undefined;
    /** A boolean that specifies the visibility of an axis title. */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartAxisTitle and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.workbookChartAxisTitle";
    };
    /**
     * Gets the format property value. Represents the formatting of chart axis title. Read-only.
     * @returns a workbookChartAxisTitleFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of chart axis title. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAxisTitleFormat | undefined) {
        this._format = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartAxisTitleFormat>(createWorkbookChartAxisTitleFormatFromDiscriminatorValue); },
            "text": n => { this.text = n.getStringValue(); },
            "visible": n => { this.visible = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartAxisTitleFormat>("format", this.format);
        writer.writeStringValue("text", this.text);
        writer.writeBooleanValue("visible", this.visible);
    };
    /**
     * Gets the text property value. Represents the axis title.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. Represents the axis title.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
    /**
     * Gets the visible property value. A boolean that specifies the visibility of an axis title.
     * @returns a boolean
     */
    public get visible() {
        return this._visible;
    };
    /**
     * Sets the visible property value. A boolean that specifies the visibility of an axis title.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        this._visible = value;
    };
}
