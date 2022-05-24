import {PrintTaskProcessingState} from './printTaskProcessingState';
import {PrintTaskStatus} from './printTaskStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskStatusImpl implements AdditionalDataHolder, Parsable, PrintTaskStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A human-readable description of the current processing state of the printTask. */
    public description?: string | undefined;
    /** The current processing state of the printTask. Valid values are described in the following table. */
    public state?: PrintTaskProcessingState | undefined;
    /**
     * Instantiates a new printTaskStatus and sets the default values.
     * @param printTaskStatusParameterValue 
     */
    public constructor(printTaskStatusParameterValue?: PrintTaskStatus | undefined) {
        this.additionalData = printTaskStatusParameterValue?.additionalData ? printTaskStatusParameterValue?.additionalData! : {}
        this.description = printTaskStatusParameterValue?.description ;
        this.state = printTaskStatusParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<PrintTaskProcessingState>(PrintTaskProcessingState); },
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
        writer.writeEnumValue<PrintTaskProcessingState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
