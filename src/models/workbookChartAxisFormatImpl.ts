import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFontImpl, WorkbookChartLineFormatImpl} from './index';
import {WorkbookChartAxisFormat} from './workbookChartAxisFormat';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookChartAxisFormatImpl extends EntityImpl implements WorkbookChartAxisFormat {
    /** Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only. */
    private _font?: WorkbookChartFont | undefined;
    /** Represents chart line formatting. Read-only. */
    private _line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartAxisFormat and sets the default values.
     * @param workbookChartAxisFormatParameterValue 
     */
    public constructor(workbookChartAxisFormatParameterValue?: WorkbookChartAxisFormat | undefined) {
        super(workbookChartAxisFormatParameterValue);
        this._font = workbookChartAxisFormatParameterValue?.font;
        this._line = workbookChartAxisFormatParameterValue?.line;
    };
    /**
     * Gets the font property value. Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
     * @returns a WorkbookChartFontInterface
     */
    public get font() {
        return this._font;
    };
    /**
     * Sets the font property value. Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
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
            "line": n => { this.line = n.getObjectValue<WorkbookChartLineFormatImpl>(createWorkbookChartLineFormatFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the line property value. Represents chart line formatting. Read-only.
     * @returns a WorkbookChartLineFormatInterface
     */
    public get line() {
        return this._line;
    };
    /**
     * Sets the line property value. Represents chart line formatting. Read-only.
     * @param value Value to set for the line property.
     */
    public set line(value: WorkbookChartLineFormat | undefined) {
        if(value) {
            this._line = value instanceof WorkbookChartLineFormatImpl? value as WorkbookChartLineFormatImpl: new WorkbookChartLineFormatImpl(value);
        }
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
        if(this.line){
            writer.writeObjectValue<WorkbookChartLineFormatImpl>("line", (this.line instanceof WorkbookChartLineFormatImpl? this.line as WorkbookChartLineFormatImpl: new WorkbookChartLineFormatImpl(this.line)));
        }
    };
}
