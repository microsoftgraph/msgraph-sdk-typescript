import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {WorkbookChartTitleFormat} from './workbookChartTitleFormat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookChartTitleFormatImpl extends EntityImpl implements WorkbookChartTitleFormat {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the fill format of an object, which includes background formatting information. Read-only. */
    public fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only. */
    public font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartTitleFormat and sets the default values.
     * @param workbookChartTitleFormatParameterValue 
     */
    public constructor(workbookChartTitleFormatParameterValue?: WorkbookChartTitleFormat | undefined) {
        super(workbookChartTitleFormatParameterValue);
        this.additionalData = workbookChartTitleFormatParameterValue?.additionalData ? workbookChartTitleFormatParameterValue?.additionalData! : {};
        this.fill = workbookChartTitleFormatParameterValue?.fill instanceof WorkbookChartFillImpl? workbookChartTitleFormatParameterValue?.fill:new WorkbookChartFillImpl(workbookChartTitleFormatParameterValue?.fill);
        this.font = workbookChartTitleFormatParameterValue?.font instanceof WorkbookChartFontImpl? workbookChartTitleFormatParameterValue?.font:new WorkbookChartFontImpl(workbookChartTitleFormatParameterValue?.font);
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
        writer.writeAdditionalData(this.additionalData);
    };
}
