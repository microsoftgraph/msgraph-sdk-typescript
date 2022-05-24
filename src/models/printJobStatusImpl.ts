import {PrintJobProcessingState} from './printJobProcessingState';
import {PrintJobStatus} from './printJobStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintJobStatusImpl implements AdditionalDataHolder, Parsable, PrintJobStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A human-readable description of the print job's current processing state. Read-only. */
    public description?: string | undefined;
    /** Additional details for print job state. Valid values are described in the following table. Read-only. */
    public details?: string[] | undefined;
    /** True if the job was acknowledged by a printer; false otherwise. Read-only. */
    public isAcquiredByPrinter?: boolean | undefined;
    /** The print job's current processing state. Valid values are described in the following table. Read-only. */
    public state?: PrintJobProcessingState | undefined;
    /**
     * Instantiates a new printJobStatus and sets the default values.
     * @param printJobStatusParameterValue 
     */
    public constructor(printJobStatusParameterValue?: PrintJobStatus | undefined) {
        this.additionalData = printJobStatusParameterValue?.additionalData ? printJobStatusParameterValue?.additionalData! : {}
        this.description = printJobStatusParameterValue?.description ;
        this.details = printJobStatusParameterValue?.details ;
        this.isAcquiredByPrinter = printJobStatusParameterValue?.isAcquiredByPrinter ;
        this.state = printJobStatusParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfPrimitiveValues<string>(); },
            "isAcquiredByPrinter": n => { this.isAcquiredByPrinter = n.getBooleanValue(); },
            "state": n => { this.state = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.details){
        writer.writeCollectionOfPrimitiveValues<string>("details", this.details);
        }
        if(this.isAcquiredByPrinter){
        writer.writeBooleanValue("isAcquiredByPrinter", this.isAcquiredByPrinter);
        }
        if(this.state){
        writer.writeEnumValue<PrintJobProcessingState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
