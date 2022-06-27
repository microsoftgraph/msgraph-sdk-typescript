import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl, TeamworkUserIdentityImpl} from './index';
import {MembersAddedEventMessageDetail} from './membersAddedEventMessageDetail';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MembersAddedEventMessageDetailImpl extends EventMessageDetailImpl implements MembersAddedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** List of members added. */
    public members?: TeamworkUserIdentity[] | undefined;
    /** The timestamp denoting how far back a conversation's history is shared with the conversation members. */
    public visibleHistoryStartDateTime?: Date | undefined;
    /**
     * Instantiates a new MembersAddedEventMessageDetail and sets the default values.
     * @param membersAddedEventMessageDetailParameterValue 
     */
    public constructor(membersAddedEventMessageDetailParameterValue?: MembersAddedEventMessageDetail | undefined) {
        super(membersAddedEventMessageDetailParameterValue);
        this.additionalData = membersAddedEventMessageDetailParameterValue?.additionalData ? membersAddedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = membersAddedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? membersAddedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(membersAddedEventMessageDetailParameterValue?.initiator);
        const membersArrValue: TeamworkUserIdentityImpl[] = []; membersAddedEventMessageDetailParameterValue.members?.forEach(element => {membersArrValue.push(element instanceof TeamworkUserIdentityImpl? element : new TeamworkUserIdentityImpl(element));});
        this.members = membersArrValue;
        this.visibleHistoryStartDateTime = membersAddedEventMessageDetailParameterValue?.visibleHistoryStartDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "members": n => { this.members = n.getCollectionOfObjectValues<TeamworkUserIdentityImpl>(createTeamworkUserIdentityFromDiscriminatorValue); },
            "visibleHistoryStartDateTime": n => { this.visibleHistoryStartDateTime = n.getDateValue(); },
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
        if(this.visibleHistoryStartDateTime){
            writer.writeDateValue("visibleHistoryStartDateTime", this.visibleHistoryStartDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
