import {createWorkbookChartLineFormatFromDiscriminatorValue} from './createWorkbookChartLineFormatFromDiscriminatorValue';
import {EntityImpl, WorkbookChartLineFormatImpl} from './index';
import {WorkbookChartGridlinesFormat} from './workbookChartGridlinesFormat';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookChartGridlinesFormatImpl extends EntityImpl implements WorkbookChartGridlinesFormat {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents chart line formatting. Read-only. */
    public line?: WorkbookChartLineFormat | undefined;
    /**
     * Instantiates a new workbookChartGridlinesFormat and sets the default values.
     * @param workbookChartGridlinesFormatParameterValue 
     */
    public constructor(workbookChartGridlinesFormatParameterValue?: WorkbookChartGridlinesFormat | undefined) {
        super(workbookChartGridlinesFormatParameterValue);
        this.additionalData = workbookChartGridlinesFormatParameterValue?.additionalData ? workbookChartGridlinesFormatParameterValue?.additionalData! : {};
        this.line = workbookChartGridlinesFormatParameterValue?.line instanceof WorkbookChartLineFormatImpl? workbookChartGridlinesFormatParameterValue?.line:new WorkbookChartLineFormatImpl(workbookChartGridlinesFormatParameterValue?.line);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.line){
            writer.writeObjectValue<WorkbookChartLineFormatImpl>("line", new WorkbookChartLineFormatImpl(this.line));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
