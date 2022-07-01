import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartAxisTitleFormat} from './workbookChartAxisTitleFormat';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartAxisTitleFormatImpl extends EntityImpl implements WorkbookChartAxisTitleFormat {
    /** Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only. */
    private _font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartAxisTitleFormat and sets the default values.
     * @param workbookChartAxisTitleFormatParameterValue 
     */
    public constructor(workbookChartAxisTitleFormatParameterValue?: WorkbookChartAxisTitleFormat | undefined) {
        super(workbookChartAxisTitleFormatParameterValue);
        this._font = workbookChartAxisTitleFormatParameterValue?.font;
    };
    /**
     * Gets the font property value. Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
     * @returns a WorkbookChartFontInterface
     */
    public get font() {
        return this._font;
    };
    /**
     * Sets the font property value. Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
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
        if(this.font){
            writer.writeObjectValue<WorkbookChartFontImpl>("font", (this.font instanceof WorkbookChartFontImpl? this.font as WorkbookChartFontImpl: new WorkbookChartFontImpl(this.font)));
        }
    };
}
