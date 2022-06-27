import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookChartPointFormatFromDiscriminatorValue} from './createWorkbookChartPointFormatFromDiscriminatorValue';
import {EntityImpl, JsonImpl, WorkbookChartPointFormatImpl} from './index';
import {Json} from './json';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookChartPointImpl extends EntityImpl implements WorkbookChartPoint {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Encapsulates the format properties chart point. Read-only. */
    public format?: WorkbookChartPointFormat | undefined;
    /** Returns the value of a chart point. Read-only. */
    public value?: Json | undefined;
    /**
     * Instantiates a new workbookChartPoint and sets the default values.
     * @param workbookChartPointParameterValue 
     */
    public constructor(workbookChartPointParameterValue?: WorkbookChartPoint | undefined) {
        super(workbookChartPointParameterValue);
        this.additionalData = workbookChartPointParameterValue?.additionalData ? workbookChartPointParameterValue?.additionalData! : {};
        this.format = workbookChartPointParameterValue?.format instanceof WorkbookChartPointFormatImpl? workbookChartPointParameterValue?.format:new WorkbookChartPointFormatImpl(workbookChartPointParameterValue?.format);
        this.value = workbookChartPointParameterValue?.value instanceof JsonImpl? workbookChartPointParameterValue?.value:new JsonImpl(workbookChartPointParameterValue?.value);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "format": n => { this.format = n.getObjectValue<WorkbookChartPointFormatImpl>(createWorkbookChartPointFormatFromDiscriminatorValue); },
            "value": n => { this.value = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.format){
            writer.writeObjectValue<WorkbookChartPointFormatImpl>("format", new WorkbookChartPointFormatImpl(this.format));
        }
        if(this.value){
            writer.writeObjectValue<JsonImpl>("value", new JsonImpl(this.value));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
