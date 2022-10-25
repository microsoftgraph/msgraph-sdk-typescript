import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class TeamworkTagMember extends Entity implements Parsable {
    /** The member's display name. */
    private _displayName?: string | undefined;
    /** The ID of the tenant that the tag member is a part of. */
    private _tenantId?: string | undefined;
    /** The user ID of the member. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new teamworkTagMember and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.teamworkTagMember";
    };
    /**
     * Gets the displayName property value. The member's display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The member's display name.
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
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
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
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the tenantId property value. The ID of the tenant that the tag member is a part of.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The ID of the tenant that the tag member is a part of.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the userId property value. The user ID of the member.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The user ID of the member.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
