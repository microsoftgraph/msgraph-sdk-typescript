import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamCreatedEventMessageDetail} from './teamCreatedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamCreatedEventMessageDetailImpl extends EventMessageDetailImpl implements TeamCreatedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Description for the team. */
    public teamDescription?: string | undefined;
    /** Display name of the team. */
    public teamDisplayName?: string | undefined;
    /** Unique identifier of the team. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new TeamCreatedEventMessageDetail and sets the default values.
     * @param teamCreatedEventMessageDetailParameterValue 
     */
    public constructor(teamCreatedEventMessageDetailParameterValue?: TeamCreatedEventMessageDetail | undefined) {
        super(teamCreatedEventMessageDetailParameterValue);
        this.additionalData = teamCreatedEventMessageDetailParameterValue?.additionalData ? teamCreatedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamCreatedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamCreatedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamCreatedEventMessageDetailParameterValue?.initiator);
        this.teamDescription = teamCreatedEventMessageDetailParameterValue?.teamDescription;
        this.teamDisplayName = teamCreatedEventMessageDetailParameterValue?.teamDisplayName;
        this.teamId = teamCreatedEventMessageDetailParameterValue?.teamId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "teamDescription": n => { this.teamDescription = n.getStringValue(); },
            "teamDisplayName": n => { this.teamDisplayName = n.getStringValue(); },
            "teamId": n => { this.teamId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        if(this.teamDescription){
            writer.writeStringValue("teamDescription", this.teamDescription);
        }
        if(this.teamDisplayName){
            writer.writeStringValue("teamDisplayName", this.teamDisplayName);
        }
        if(this.teamId){
            writer.writeStringValue("teamId", this.teamId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
