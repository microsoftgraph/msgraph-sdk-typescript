import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamArchivedEventMessageDetail} from './teamArchivedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamArchivedEventMessageDetailImpl extends EventMessageDetailImpl implements TeamArchivedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Unique identifier of the team. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new TeamArchivedEventMessageDetail and sets the default values.
     * @param teamArchivedEventMessageDetailParameterValue 
     */
    public constructor(teamArchivedEventMessageDetailParameterValue?: TeamArchivedEventMessageDetail | undefined) {
        super(teamArchivedEventMessageDetailParameterValue);
        this.additionalData = teamArchivedEventMessageDetailParameterValue?.additionalData ? teamArchivedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamArchivedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamArchivedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamArchivedEventMessageDetailParameterValue?.initiator);
        this.teamId = teamArchivedEventMessageDetailParameterValue?.teamId;
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
