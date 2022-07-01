import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {EntityImpl, TeamImpl} from './index';
import {Team} from './team';
import {TeamInfo} from './teamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class TeamInfoImpl extends EntityImpl implements TeamInfo {
    /** The name of the team. */
    private _displayName?: string | undefined;
    /** The team property */
    private _team?: Team | undefined;
    /** The ID of the Azure Active Directory tenant. */
    private _tenantId?: string | undefined;
    /**
     * Instantiates a new teamInfo and sets the default values.
     * @param teamInfoParameterValue 
     */
    public constructor(teamInfoParameterValue?: TeamInfo | undefined) {
        super(teamInfoParameterValue);
        this._displayName = teamInfoParameterValue?.displayName;
        this._team = teamInfoParameterValue?.team;
        this._tenantId = teamInfoParameterValue?.tenantId;
    };
    /**
     * Gets the displayName property value. The name of the team.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the team.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
            writer.writeObjectValue<TeamImpl>("team", (this.team instanceof TeamImpl? this.team as TeamImpl: new TeamImpl(this.team)));
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
    };
    /**
     * Gets the team property value. The team property
     * @returns a TeamInterface
     */
    public get team() {
        return this._team;
    };
    /**
     * Sets the team property value. The team property
     * @param value Value to set for the team property.
     */
    public set team(value: Team | undefined) {
        if(value) {
            this._team = value instanceof TeamImpl? value as TeamImpl: new TeamImpl(value);
        }
    };
    /**
     * Gets the tenantId property value. The ID of the Azure Active Directory tenant.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The ID of the Azure Active Directory tenant.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        if(value) {
            this._tenantId = value;
        }
    };
}
