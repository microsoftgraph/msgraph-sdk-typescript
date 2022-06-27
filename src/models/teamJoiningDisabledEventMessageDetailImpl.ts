import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamJoiningDisabledEventMessageDetail} from './teamJoiningDisabledEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamJoiningDisabledEventMessageDetailImpl extends EventMessageDetailImpl implements TeamJoiningDisabledEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Unique identifier of the team. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new TeamJoiningDisabledEventMessageDetail and sets the default values.
     * @param teamJoiningDisabledEventMessageDetailParameterValue 
     */
    public constructor(teamJoiningDisabledEventMessageDetailParameterValue?: TeamJoiningDisabledEventMessageDetail | undefined) {
        super(teamJoiningDisabledEventMessageDetailParameterValue);
        this.additionalData = teamJoiningDisabledEventMessageDetailParameterValue?.additionalData ? teamJoiningDisabledEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamJoiningDisabledEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamJoiningDisabledEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamJoiningDisabledEventMessageDetailParameterValue?.initiator);
        this.teamId = teamJoiningDisabledEventMessageDetailParameterValue?.teamId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
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
        if(this.teamId){
            writer.writeStringValue("teamId", this.teamId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
