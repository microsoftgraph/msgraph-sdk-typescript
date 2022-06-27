import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamJoiningEnabledEventMessageDetail} from './teamJoiningEnabledEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamJoiningEnabledEventMessageDetailImpl extends EventMessageDetailImpl implements TeamJoiningEnabledEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Unique identifier of the team. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new TeamJoiningEnabledEventMessageDetail and sets the default values.
     * @param teamJoiningEnabledEventMessageDetailParameterValue 
     */
    public constructor(teamJoiningEnabledEventMessageDetailParameterValue?: TeamJoiningEnabledEventMessageDetail | undefined) {
        super(teamJoiningEnabledEventMessageDetailParameterValue);
        this.additionalData = teamJoiningEnabledEventMessageDetailParameterValue?.additionalData ? teamJoiningEnabledEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamJoiningEnabledEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamJoiningEnabledEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamJoiningEnabledEventMessageDetailParameterValue?.initiator);
        this.teamId = teamJoiningEnabledEventMessageDetailParameterValue?.teamId;
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
