import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Entity, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class TeamInfo extends Entity implements Parsable {
    /** The name of the team. */
    private _displayName?: string | undefined;
    /** The team property */
    private _team?: Team | undefined;
    /** The ID of the Azure Active Directory tenant. */
    private _tenantId?: string | undefined;
    /**
     * Instantiates a new teamInfo and sets the default values.
     */
    public constructor() {
        super();
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
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "team": n => { this.team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Team>("team", this.team);
        writer.writeStringValue("tenantId", this.tenantId);
    };
    /**
     * Gets the team property value. The team property
     * @returns a team
     */
    public get team() {
        return this._team;
    };
    /**
     * Sets the team property value. The team property
     * @param value Value to set for the team property.
     */
    public set team(value: Team | undefined) {
        this._team = value;
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
        this._tenantId = value;
    };
}
