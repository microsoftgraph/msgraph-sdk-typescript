import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamDescriptionUpdatedEventMessageDetail} from './teamDescriptionUpdatedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamDescriptionUpdatedEventMessageDetailImpl extends EventMessageDetailImpl implements TeamDescriptionUpdatedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** The updated description for the team. */
    public teamDescription?: string | undefined;
    /** Unique identifier of the team. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new TeamDescriptionUpdatedEventMessageDetail and sets the default values.
     * @param teamDescriptionUpdatedEventMessageDetailParameterValue 
     */
    public constructor(teamDescriptionUpdatedEventMessageDetailParameterValue?: TeamDescriptionUpdatedEventMessageDetail | undefined) {
        super(teamDescriptionUpdatedEventMessageDetailParameterValue);
        this.additionalData = teamDescriptionUpdatedEventMessageDetailParameterValue?.additionalData ? teamDescriptionUpdatedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamDescriptionUpdatedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamDescriptionUpdatedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamDescriptionUpdatedEventMessageDetailParameterValue?.initiator);
        this.teamDescription = teamDescriptionUpdatedEventMessageDetailParameterValue?.teamDescription;
        this.teamId = teamDescriptionUpdatedEventMessageDetailParameterValue?.teamId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "teamDescription": n => { this.teamDescription = n.getStringValue(); },
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
        if(this.teamId){
            writer.writeStringValue("teamId", this.teamId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
