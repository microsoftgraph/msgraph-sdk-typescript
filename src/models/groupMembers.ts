import {SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupMembers extends SubjectSet implements Parsable {
    /** The name of the group in Azure AD. Read only. */
    private _description?: string | undefined;
    /** The ID of the group in Azure AD. */
    private _groupId?: string | undefined;
    /**
     * Instantiates a new GroupMembers and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The name of the group in Azure AD. Read only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The name of the group in Azure AD. Read only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "groupId": n => { this.groupId = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupId property value. The ID of the group in Azure AD.
     * @returns a string
     */
    public get groupId() {
        return this._groupId;
    };
    /**
     * Sets the groupId property value. The ID of the group in Azure AD.
     * @param value Value to set for the groupId property.
     */
    public set groupId(value: string | undefined) {
        this._groupId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("groupId", this.groupId);
    };
}
