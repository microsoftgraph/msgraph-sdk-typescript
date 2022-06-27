import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamUnarchivedEventMessageDetail} from './teamUnarchivedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamUnarchivedEventMessageDetailImpl extends EventMessageDetailImpl implements TeamUnarchivedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Unique identifier of the team. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new TeamUnarchivedEventMessageDetail and sets the default values.
     * @param teamUnarchivedEventMessageDetailParameterValue 
     */
    public constructor(teamUnarchivedEventMessageDetailParameterValue?: TeamUnarchivedEventMessageDetail | undefined) {
        super(teamUnarchivedEventMessageDetailParameterValue);
        this.additionalData = teamUnarchivedEventMessageDetailParameterValue?.additionalData ? teamUnarchivedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamUnarchivedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamUnarchivedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamUnarchivedEventMessageDetailParameterValue?.initiator);
        this.teamId = teamUnarchivedEventMessageDetailParameterValue?.teamId;
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
