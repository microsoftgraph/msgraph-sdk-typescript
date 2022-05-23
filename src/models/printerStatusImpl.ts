import {PrinterProcessingState} from './printerProcessingState';
import {PrinterStatus} from './printerStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterStatusImpl implements AdditionalDataHolder, Parsable, PrinterStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A human-readable description of the printer's current processing state. Read-only. */
    public description?: string | undefined;
    /** The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only. */
    public details?: string[] | undefined;
    /** The current processing state. Valid values are described in the following table. Read-only. */
    public state?: PrinterProcessingState | undefined;
    /**
     * Instantiates a new printerStatus and sets the default values.
     * @param printerStatusParameterValue 
     */
    public constructor(printerStatusParameterValue?: PrinterStatus | undefined) {
        this.additionalData = printerStatusParameterValue?.additionalData ? printerStatusParameterValue?.additionalData! : {}
        this.description = printerStatusParameterValue?.description ;
        this.details = printerStatusParameterValue?.details ;
        this.state = printerStatusParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "details": n => { this.details = n.getCollectionOfPrimitiveValues<string>(); },
            "state": n => { this.state = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState); },
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
        if(this.state){
        writer.writeEnumValue<PrinterProcessingState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
