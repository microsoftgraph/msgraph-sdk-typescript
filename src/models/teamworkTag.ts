import {createTeamworkTagMemberFromDiscriminatorValue} from './createTeamworkTagMemberFromDiscriminatorValue';
import {Entity, TeamworkTagMember} from './index';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class TeamworkTag extends Entity implements Parsable {
    /** The description of the tag as it will appear to the user in Microsoft Teams. */
    private _description?: string | undefined;
    /** The name of the tag as it will appear to the user in Microsoft Teams. */
    private _displayName?: string | undefined;
    /** The number of users assigned to the tag. */
    private _memberCount?: number | undefined;
    /** Users assigned to the tag. */
    private _members?: TeamworkTagMember[] | undefined;
    /** The type of the tag. Default is standard. */
    private _tagType?: TeamworkTagType | undefined;
    /** ID of the team in which the tag is defined. */
    private _teamId?: string | undefined;
    /**
     * Instantiates a new teamworkTag and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description of the tag as it will appear to the user in Microsoft Teams.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the tag as it will appear to the user in Microsoft Teams.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The name of the tag as it will appear to the user in Microsoft Teams.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the tag as it will appear to the user in Microsoft Teams.
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
     * Gets the memberCount property value. The number of users assigned to the tag.
     * @returns a integer
     */
    public get memberCount() {
        return this._memberCount;
    };
    /**
     * Sets the memberCount property value. The number of users assigned to the tag.
     * @param value Value to set for the memberCount property.
     */
    public set memberCount(value: number | undefined) {
        this._memberCount = value;
    };
    /**
     * Gets the members property value. Users assigned to the tag.
     * @returns a teamworkTagMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Users assigned to the tag.
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
     * Gets the tagType property value. The type of the tag. Default is standard.
     * @returns a teamworkTagType
     */
    public get tagType() {
        return this._tagType;
    };
    /**
     * Sets the tagType property value. The type of the tag. Default is standard.
     * @param value Value to set for the tagType property.
     */
    public set tagType(value: TeamworkTagType | undefined) {
        this._tagType = value;
    };
    /**
     * Gets the teamId property value. ID of the team in which the tag is defined.
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. ID of the team in which the tag is defined.
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        this._teamId = value;
    };
}
