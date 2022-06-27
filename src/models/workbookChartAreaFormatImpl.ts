import {createWorkbookChartFillFromDiscriminatorValue} from './createWorkbookChartFillFromDiscriminatorValue';
import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {EntityImpl, WorkbookChartFillImpl, WorkbookChartFontImpl} from './index';
import {WorkbookChartAreaFormat} from './workbookChartAreaFormat';
import {WorkbookChartFill} from './workbookChartFill';
import {WorkbookChartFont} from './workbookChartFont';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookChartAreaFormatImpl extends EntityImpl implements WorkbookChartAreaFormat {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the fill format of an object, which includes background formatting information. Read-only. */
    public fill?: WorkbookChartFill | undefined;
    /** Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only. */
    public font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartAreaFormat and sets the default values.
     * @param workbookChartAreaFormatParameterValue 
     */
    public constructor(workbookChartAreaFormatParameterValue?: WorkbookChartAreaFormat | undefined) {
        super(workbookChartAreaFormatParameterValue);
        this.additionalData = workbookChartAreaFormatParameterValue?.additionalData ? workbookChartAreaFormatParameterValue?.additionalData! : {};
        this.fill = workbookChartAreaFormatParameterValue?.fill instanceof WorkbookChartFillImpl? workbookChartAreaFormatParameterValue?.fill:new WorkbookChartFillImpl(workbookChartAreaFormatParameterValue?.fill);
        this.font = workbookChartAreaFormatParameterValue?.font instanceof WorkbookChartFontImpl? workbookChartAreaFormatParameterValue?.font:new WorkbookChartFontImpl(workbookChartAreaFormatParameterValue?.font);
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
