import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartAreaFormatImpl extends EntityImpl implements Parsable, WorkbookChartAreaFormat {
    /** Represents the fill format of an object, which includes background formatting information. Read-only. */
    public fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only. */
    public font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartAreaFormat and sets the default values.
     * @param workbookChartAreaFormatParameterValue 
     */
    public constructor(workbookChartAreaFormatParameterValue?: WorkbookChartAreaFormat | undefined) {
        super();
        this.fill = workbookChartAreaFormatParameterValue?.fill ;
        this.font = workbookChartAreaFormatParameterValue?.font ;
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
        writer.writeObjectValue<WorkbookChartFillImpl>("fill", new WorkbookChartFillImpl(this.fill));
        }
        if(this.font){
        writer.writeObjectValue<WorkbookChartFontImpl>("font", new WorkbookChartFontImpl(this.font));
        }
    };
}
