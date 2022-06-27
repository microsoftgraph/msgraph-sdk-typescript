import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {EntityImpl, TeamImpl} from './index';
import {Team} from './team';
import {TeamInfo} from './teamInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class TeamInfoImpl extends EntityImpl implements TeamInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the team. */
    public displayName?: string | undefined;
    /** The team property */
    public team?: Team | undefined;
    /** The ID of the Azure Active Directory tenant. */
    public tenantId?: string | undefined;
    /**
     * Instantiates a new teamInfo and sets the default values.
     * @param teamInfoParameterValue 
     */
    public constructor(teamInfoParameterValue?: TeamInfo | undefined) {
        super(teamInfoParameterValue);
        this.additionalData = teamInfoParameterValue?.additionalData ? teamInfoParameterValue?.additionalData! : {};
        this.displayName = teamInfoParameterValue?.displayName;
        this.team = teamInfoParameterValue?.team instanceof TeamImpl? teamInfoParameterValue?.team:new TeamImpl(teamInfoParameterValue?.team);
        this.tenantId = teamInfoParameterValue?.tenantId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "team": n => { this.team = n.getObjectValue<TeamImpl>(createTeamFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.team){
            writer.writeObjectValue<TeamImpl>("team", new TeamImpl(this.team));
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
