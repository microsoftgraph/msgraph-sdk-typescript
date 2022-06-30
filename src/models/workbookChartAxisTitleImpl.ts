import {createWorkbookChartAxisTitleFormatFromDiscriminatorValue} from './createWorkbookChartAxisTitleFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartAxisTitleFormatImpl} from './index';
import {WorkbookChartAxisTitle} from './workbookChartAxisTitle';
import {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartAxisTitleImpl extends EntityImpl implements WorkbookChartAxisTitle {
    /** Represents the formatting of chart axis title. Read-only. */
    private _format?: WorkbookChartAxisTitleFormat | undefined;
    /** Represents the axis title. */
    private _text?: string | undefined;
    /** A boolean that specifies the visibility of an axis title. */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartAxisTitle and sets the default values.
     * @param workbookChartAxisTitleParameterValue 
     */
    public constructor(workbookChartAxisTitleParameterValue?: WorkbookChartAxisTitle | undefined) {
        super(workbookChartAxisTitleParameterValue);
        this._format = workbookChartAxisTitleParameterValue?.format;
        this._text = workbookChartAxisTitleParameterValue?.text;
        this._visible = workbookChartAxisTitleParameterValue?.visible;
    };
    /**
     * Gets the format property value. Represents the formatting of chart axis title. Read-only.
     * @returns a WorkbookChartAxisTitleFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of chart axis title. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartAxisTitleFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartAxisTitleFormatImpl? value : new WorkbookChartAxisTitleFormatImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartAxisTitleFormatImpl>(createWorkbookChartAxisTitleFormatFromDiscriminatorValue); },
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
        if(this.format){
            writer.writeObjectValue<WorkbookChartAxisTitleFormatImpl>("format", (!this.format || this.format instanceof WorkbookChartAxisTitleFormatImpl? this.format : new WorkbookChartAxisTitleFormatImpl(this.format)));
        }
        if(this.text){
            writer.writeStringValue("text", this.text);
        }
        if(this.visible){
            writer.writeBooleanValue("visible", this.visible);
        }
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
        if(value) {
            this._text = value;
        }
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
        if(value) {
            this._visible = value;
        }
    };
}
