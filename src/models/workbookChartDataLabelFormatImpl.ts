import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartDataLabelFormat} from './workbookChartDataLabelFormat';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookChartDataLabelFormatImpl extends EntityImpl implements Parsable, WorkbookChartDataLabelFormat {
    /** Represents the fill format of the current chart data label. Read-only. */
    public fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only. */
    public font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartDataLabelFormat and sets the default values.
     * @param workbookChartDataLabelFormatParameterValue 
     */
    public constructor(workbookChartDataLabelFormatParameterValue?: WorkbookChartDataLabelFormat | undefined) {
        super();
        this.fill = workbookChartDataLabelFormatParameterValue?.fill ;
        this.font = workbookChartDataLabelFormatParameterValue?.font ;
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
