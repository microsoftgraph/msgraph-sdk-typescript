import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookChartLegendFormatImpl extends EntityImpl implements Parsable, WorkbookChartLegendFormat {
    /** Represents the fill format of an object, which includes background formating information. Read-only. */
    public fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only. */
    public font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartLegendFormat and sets the default values.
     * @param workbookChartLegendFormatParameterValue 
     */
    public constructor(workbookChartLegendFormatParameterValue?: WorkbookChartLegendFormat | undefined) {
        super();
        this.fill = workbookChartLegendFormatParameterValue?.fill ;
        this.font = workbookChartLegendFormatParameterValue?.font ;
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
