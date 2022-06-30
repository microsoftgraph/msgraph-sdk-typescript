import {createWorkbookChartGridlinesFormatFromDiscriminatorValue} from './createWorkbookChartGridlinesFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartGridlinesFormatImpl} from './index';
import {WorkbookChartGridlines} from './workbookChartGridlines';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartGridlinesImpl extends EntityImpl implements WorkbookChartGridlines {
    /** Represents the formatting of chart gridlines. Read-only. */
    private _format?: WorkbookChartGridlinesFormat | undefined;
    /** Boolean value representing if the axis gridlines are visible or not. */
    private _visible?: boolean | undefined;
    /**
     * Instantiates a new workbookChartGridlines and sets the default values.
     * @param workbookChartGridlinesParameterValue 
     */
    public constructor(workbookChartGridlinesParameterValue?: WorkbookChartGridlines | undefined) {
        super(workbookChartGridlinesParameterValue);
        this._format = workbookChartGridlinesParameterValue?.format;
        this._visible = workbookChartGridlinesParameterValue?.visible;
    };
    /**
     * Gets the format property value. Represents the formatting of chart gridlines. Read-only.
     * @returns a WorkbookChartGridlinesFormatInterface
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Represents the formatting of chart gridlines. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookChartGridlinesFormat | undefined) {
        if(value) {
            this._format = value instanceof WorkbookChartGridlinesFormatImpl? value : new WorkbookChartGridlinesFormatImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartGridlinesFormatImpl>(createWorkbookChartGridlinesFormatFromDiscriminatorValue); },
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
            writer.writeObjectValue<WorkbookChartGridlinesFormatImpl>("format", (!this.format || this.format instanceof WorkbookChartGridlinesFormatImpl? this.format : new WorkbookChartGridlinesFormatImpl(this.format)));
        }
        if(this.visible){
            writer.writeBooleanValue("visible", this.visible);
        }
    };
    /**
     * Gets the visible property value. Boolean value representing if the axis gridlines are visible or not.
     * @returns a boolean
     */
    public get visible() {
        return this._visible;
    };
    /**
     * Sets the visible property value. Boolean value representing if the axis gridlines are visible or not.
     * @param value Value to set for the visible property.
     */
    public set visible(value: boolean | undefined) {
        if(value) {
            this._visible = value;
        }
    };
}
