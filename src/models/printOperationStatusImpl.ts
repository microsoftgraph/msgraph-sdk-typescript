import {PrintOperationProcessingState} from './printOperationProcessingState';
import {PrintOperationStatus} from './printOperationStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintOperationStatusImpl implements AdditionalDataHolder, Parsable, PrintOperationStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A human-readable description of the printOperation's current processing state. Read-only. */
    public description?: string | undefined;
    /** The printOperation's current processing state. Valid values are described in the following table. Read-only. */
    public state?: PrintOperationProcessingState | undefined;
    /**
     * Instantiates a new printOperationStatus and sets the default values.
     * @param printOperationStatusParameterValue 
     */
    public constructor(printOperationStatusParameterValue?: PrintOperationStatus | undefined) {
        this.additionalData = printOperationStatusParameterValue?.additionalData ? printOperationStatusParameterValue?.additionalData! : {}
        this.description = printOperationStatusParameterValue?.description ;
        this.state = printOperationStatusParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<PrintOperationProcessingState>(PrintOperationProcessingState); },
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
        if(this.state){
        writer.writeEnumValue<PrintOperationProcessingState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
