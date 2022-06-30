import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartLegendFormatImpl extends EntityImpl implements WorkbookChartLegendFormat {
    /** Represents the fill format of an object, which includes background formating information. Read-only. */
    private _fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only. */
    private _font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartLegendFormat and sets the default values.
     * @param workbookChartLegendFormatParameterValue 
     */
    public constructor(workbookChartLegendFormatParameterValue?: WorkbookChartLegendFormat | undefined) {
        super(workbookChartLegendFormatParameterValue);
        this._fill = workbookChartLegendFormatParameterValue?.fill;
        this._font = workbookChartLegendFormatParameterValue?.font;
    };
    /**
     * Gets the fill property value. Represents the fill format of an object, which includes background formating information. Read-only.
     * @returns a WorkbookChartFillInterface
     */
    public get fill() {
        return this._fill;
    };
    /**
     * Sets the fill property value. Represents the fill format of an object, which includes background formating information. Read-only.
     * @param value Value to set for the fill property.
     */
    public set fill(value: WorkbookChartFill | undefined) {
        if(value) {
            this._fill = value instanceof WorkbookChartFillImpl? value : new WorkbookChartFillImpl(value);
        }
    };
    /**
     * Gets the font property value. Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.
     * @returns a WorkbookChartFontInterface
     */
    public get font() {
        return this._font;
    };
    /**
     * Sets the font property value. Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookChartFont | undefined) {
        if(value) {
            this._font = value instanceof WorkbookChartFontImpl? value : new WorkbookChartFontImpl(value);
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
            writer.writeObjectValue<WorkbookChartFillImpl>("fill", (!this.fill || this.fill instanceof WorkbookChartFillImpl? this.fill : new WorkbookChartFillImpl(this.fill)));
        }
        if(this.font){
            writer.writeObjectValue<WorkbookChartFontImpl>("font", (!this.font || this.font instanceof WorkbookChartFontImpl? this.font : new WorkbookChartFontImpl(this.font)));
        }
    };
}
