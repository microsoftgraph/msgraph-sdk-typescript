import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamRenamedEventMessageDetail} from './teamRenamedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamRenamedEventMessageDetailImpl extends EventMessageDetailImpl implements TeamRenamedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** The updated name of the team. */
    public teamDisplayName?: string | undefined;
    /** Unique identifier of the team. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new TeamRenamedEventMessageDetail and sets the default values.
     * @param teamRenamedEventMessageDetailParameterValue 
     */
    public constructor(teamRenamedEventMessageDetailParameterValue?: TeamRenamedEventMessageDetail | undefined) {
        super(teamRenamedEventMessageDetailParameterValue);
        this.additionalData = teamRenamedEventMessageDetailParameterValue?.additionalData ? teamRenamedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamRenamedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamRenamedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamRenamedEventMessageDetailParameterValue?.initiator);
        this.teamDisplayName = teamRenamedEventMessageDetailParameterValue?.teamDisplayName;
        this.teamId = teamRenamedEventMessageDetailParameterValue?.teamId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
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
        if(this.teamDisplayName){
            writer.writeStringValue("teamDisplayName", this.teamDisplayName);
        }
        if(this.teamId){
            writer.writeStringValue("teamId", this.teamId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
