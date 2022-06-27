import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl, TeamworkUserIdentityImpl} from './index';
import {MembersDeletedEventMessageDetail} from './membersDeletedEventMessageDetail';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MembersDeletedEventMessageDetailImpl extends EventMessageDetailImpl implements MembersDeletedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** List of members deleted. */
    public members?: TeamworkUserIdentity[] | undefined;
    /**
     * Instantiates a new MembersDeletedEventMessageDetail and sets the default values.
     * @param membersDeletedEventMessageDetailParameterValue 
     */
    public constructor(membersDeletedEventMessageDetailParameterValue?: MembersDeletedEventMessageDetail | undefined) {
        super(membersDeletedEventMessageDetailParameterValue);
        this.additionalData = membersDeletedEventMessageDetailParameterValue?.additionalData ? membersDeletedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = membersDeletedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? membersDeletedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(membersDeletedEventMessageDetailParameterValue?.initiator);
        const membersArrValue: TeamworkUserIdentityImpl[] = []; membersDeletedEventMessageDetailParameterValue.members?.forEach(element => {membersArrValue.push(element instanceof TeamworkUserIdentityImpl? element : new TeamworkUserIdentityImpl(element));});
        this.members = membersArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "members": n => { this.members = n.getCollectionOfObjectValues<TeamworkUserIdentityImpl>(createTeamworkUserIdentityFromDiscriminatorValue); },
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
        if(this.members && this.members.length != 0){        const membersArrValue: TeamworkUserIdentityImpl[] = []; this.members?.forEach(element => {membersArrValue.push(element instanceof TeamworkUserIdentityImpl? element : new TeamworkUserIdentityImpl(element));});
            writer.writeCollectionOfObjectValues<TeamworkUserIdentityImpl>("members", membersArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
