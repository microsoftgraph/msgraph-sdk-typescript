import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFontImpl, WorkbookChartLineFormatImpl} from './index';
import {WorkbookChartAxisFormat} from './workbookChartAxisFormat';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartAxisFormatImpl extends EntityImpl implements Parsable, WorkbookChartAxisFormat {
    /** Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only. */
    public font?: WorkbookChartFont | undefined;
    /** Represents chart line formatting. Read-only. */
    public line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartAxisFormat and sets the default values.
     * @param workbookChartAxisFormatParameterValue 
     */
    public constructor(workbookChartAxisFormatParameterValue?: WorkbookChartAxisFormat | undefined) {
        super();
        this.font = workbookChartAxisFormatParameterValue?.font ;
        this.line = workbookChartAxisFormatParameterValue?.line ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.font){
        writer.writeObjectValue<WorkbookChartFontImpl>("font", new WorkbookChartFontImpl(this.font));
        }
        if(this.line){
        writer.writeObjectValue<WorkbookChartLineFormatImpl>("line", new WorkbookChartLineFormatImpl(this.line));
        }
    };
}
