import {ManagedAppDiagnosticStatus} from './managedAppDiagnosticStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents diagnostics status. */
export class ManagedAppDiagnosticStatusImpl implements AdditionalDataHolder, ManagedAppDiagnosticStatus, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Instruction on how to mitigate a failed validation */
    public mitigationInstruction?: string | undefined;
    /** The state of the operation */
    public state?: string | undefined;
    /** The validation friendly name */
    public validationName?: string | undefined;
    /**
     * Instantiates a new managedAppDiagnosticStatus and sets the default values.
     * @param managedAppDiagnosticStatusParameterValue 
     */
    public constructor(managedAppDiagnosticStatusParameterValue?: ManagedAppDiagnosticStatus | undefined) {
        this.additionalData = managedAppDiagnosticStatusParameterValue?.additionalData ? managedAppDiagnosticStatusParameterValue?.additionalData! : {}
        this.mitigationInstruction = managedAppDiagnosticStatusParameterValue?.mitigationInstruction ;
        this.state = managedAppDiagnosticStatusParameterValue?.state ;
        this.validationName = managedAppDiagnosticStatusParameterValue?.validationName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "mitigationInstruction": n => { this.mitigationInstruction = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "validationName": n => { this.validationName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.mitigationInstruction){
        writer.writeStringValue("mitigationInstruction", this.mitigationInstruction);
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        if(this.validationName){
        writer.writeStringValue("validationName", this.validationName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
