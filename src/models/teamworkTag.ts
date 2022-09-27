import {createTeamworkTagMemberFromDiscriminatorValue} from './createTeamworkTagMemberFromDiscriminatorValue';
import {Entity, TeamworkTagMember} from './index';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class TeamworkTag extends Entity implements Parsable {
    /** The description property */
    private _description?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The memberCount property */
    private _memberCount?: number | undefined;
    /** The members property */
    private _members?: TeamworkTagMember[] | undefined;
    /** The tagType property */
    private _tagType?: TeamworkTagType | undefined;
    /** The teamId property */
    private _teamId?: string | undefined;
    /**
     * Instantiates a new teamworkTag and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.teamworkTag";
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
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
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "memberCount": n => { this.memberCount = n.getNumberValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<TeamworkTagMember>(createTeamworkTagMemberFromDiscriminatorValue); },
            "tagType": n => { this.tagType = n.getEnumValue<TeamworkTagType>(TeamworkTagType); },
            "teamId": n => { this.teamId = n.getStringValue(); },
        };
    };
    /**
     * Gets the memberCount property value. The memberCount property
     * @returns a integer
     */
    public get memberCount() {
        return this._memberCount;
    };
    /**
     * Sets the memberCount property value. The memberCount property
     * @param value Value to set for the memberCount property.
     */
    public set memberCount(value: number | undefined) {
        this._memberCount = value;
    };
    /**
     * Gets the members property value. The members property
     * @returns a teamworkTagMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. The members property
     * @param value Value to set for the members property.
     */
    public set members(value: TeamworkTagMember[] | undefined) {
        this._members = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeNumberValue("memberCount", this.memberCount);
        writer.writeCollectionOfObjectValues<TeamworkTagMember>("members", this.members);
        writer.writeEnumValue<TeamworkTagType>("tagType", this.tagType);
        writer.writeStringValue("teamId", this.teamId);
    };
    /**
     * Gets the tagType property value. The tagType property
     * @returns a teamworkTagType
     */
    public get tagType() {
        return this._tagType;
    };
    /**
     * Sets the tagType property value. The tagType property
     * @param value Value to set for the tagType property.
     */
    public set tagType(value: TeamworkTagType | undefined) {
        this._tagType = value;
    };
    /**
     * Gets the teamId property value. The teamId property
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. The teamId property
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        this._teamId = value;
    };
}
