import {Entity} from '../';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalGroup extends Entity implements Parsable {
    /** The description of the external group. Optional.  */
    private _description?: string | undefined;
    /** The friendly name of the external group. Optional.  */
    private _displayName?: string | undefined;
    /** A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or an externalGroup as members.  */
    private _members?: Identity[] | undefined;
    /**
     * Instantiates a new externalGroup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description of the external group. Optional.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the external group. Optional.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The friendly name of the external group. Optional.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The friendly name of the external group. Optional.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "description": (o, n) => { (o as unknown as ExternalGroup).description = n.getStringValue(); },
            "displayName": (o, n) => { (o as unknown as ExternalGroup).displayName = n.getStringValue(); },
            "members": (o, n) => { (o as unknown as ExternalGroup).members = n.getCollectionOfObjectValues<Identity>(createIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the members property value. A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or an externalGroup as members.
     * @returns a identity
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or an externalGroup as members.
     * @param value Value to set for the members property.
     */
    public set members(value: Identity[] | undefined) {
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
        writer.writeCollectionOfObjectValues<Identity>("members", this.members);
    };
}
