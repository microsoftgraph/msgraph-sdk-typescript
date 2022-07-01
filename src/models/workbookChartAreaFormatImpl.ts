import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartAreaFormatImpl extends EntityImpl implements WorkbookChartAreaFormat {
    /** Represents the fill format of an object, which includes background formatting information. Read-only. */
    private _fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only. */
    private _font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartAreaFormat and sets the default values.
     * @param workbookChartAreaFormatParameterValue 
     */
    public constructor(workbookChartAreaFormatParameterValue?: WorkbookChartAreaFormat | undefined) {
        super(workbookChartAreaFormatParameterValue);
        this._fill = workbookChartAreaFormatParameterValue?.fill;
        this._font = workbookChartAreaFormatParameterValue?.font;
    };
    /**
     * Gets the fill property value. Represents the fill format of an object, which includes background formatting information. Read-only.
     * @returns a WorkbookChartFillInterface
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Sets the fill property value. Represents the fill format of an object, which includes background formatting information. Read-only.
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookChartFill | undefined) {
        if(value) {
            this._fill = value instanceof WorkbookChartFillImpl? value as WorkbookChartFillImpl: new WorkbookChartFillImpl(value);
        }
    };
    /**
     * Gets the font property value. Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
     * @returns a WorkbookChartFontInterface
     */
    public get font() {
        return this._font;
    };
    /**
     * Sets the font property value. Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookChartFont | undefined) {
        if(value) {
            this._font = value instanceof WorkbookChartFontImpl? value as WorkbookChartFontImpl: new WorkbookChartFontImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fill": n => { this.fill = n.getObjectValue<WorkbookChartFillImpl>(createWorkbookChartFillFromDiscriminatorValue); },
            "font": n => { this.font = n.getObjectValue<WorkbookChartFontImpl>(createWorkbookChartFontFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fill){
            writer.writeObjectValue<WorkbookChartFillImpl>("fill", (this.fill instanceof WorkbookChartFillImpl? this.fill as WorkbookChartFillImpl: new WorkbookChartFillImpl(this.fill)));
        }
        if(this.font){
            writer.writeObjectValue<WorkbookChartFontImpl>("font", (this.font instanceof WorkbookChartFontImpl? this.font as WorkbookChartFontImpl: new WorkbookChartFontImpl(this.font)));
        }
    };
}
