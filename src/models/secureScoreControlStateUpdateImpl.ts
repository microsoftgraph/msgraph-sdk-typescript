import {SecureScoreControlStateUpdate} from './secureScoreControlStateUpdate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScoreControlStateUpdateImpl implements AdditionalDataHolder, Parsable, SecureScoreControlStateUpdate {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Assigns the control to the user who will take the action. */
    public assignedTo?: string | undefined;
    /** Provides optional comment about the control. */
    public comment?: string | undefined;
    /** State of the control, which can be modified via a PATCH command (for example, ignored, thirdParty). */
    public state?: string | undefined;
    /** ID of the user who updated tenant state. */
    public updatedBy?: string | undefined;
    /** Time at which the control state was updated. */
    public updatedDateTime?: Date | undefined;
    /**
     * Instantiates a new secureScoreControlStateUpdate and sets the default values.
     * @param secureScoreControlStateUpdateParameterValue 
     */
    public constructor(secureScoreControlStateUpdateParameterValue?: SecureScoreControlStateUpdate | undefined) {
        this.additionalData = secureScoreControlStateUpdateParameterValue?.additionalData ? secureScoreControlStateUpdateParameterValue?.additionalData! : {}
        this.assignedTo = secureScoreControlStateUpdateParameterValue?.assignedTo ;
        this.comment = secureScoreControlStateUpdateParameterValue?.comment ;
        this.state = secureScoreControlStateUpdateParameterValue?.state ;
        this.updatedBy = secureScoreControlStateUpdateParameterValue?.updatedBy ;
        this.updatedDateTime = secureScoreControlStateUpdateParameterValue?.updatedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedTo": n => { this.assignedTo = n.getStringValue(); },
            "comment": n => { this.comment = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "updatedBy": n => { this.updatedBy = n.getStringValue(); },
            "updatedDateTime": n => { this.updatedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.assignedTo){
        writer.writeStringValue("assignedTo", this.assignedTo);
        }
        if(this.comment){
        writer.writeStringValue("comment", this.comment);
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        if(this.updatedBy){
        writer.writeStringValue("updatedBy", this.updatedBy);
        }
        if(this.updatedDateTime){
        writer.writeDateValue("updatedDateTime", this.updatedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
