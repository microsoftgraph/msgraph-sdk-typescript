import {AdminMember1, Identity, IdentitySet, SharePointIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharePointIdentitySet extends IdentitySet implements Parsable {
    /** The group associated with this action. Optional. */
    private _group?: Identity | AdminMember1 | undefined;
    /** The SharePoint group associated with this action. Optional. */
    private _siteGroup?: SharePointIdentity | AdminMember1 | undefined;
    /** The SharePoint user associated with this action. Optional. */
    private _siteUser?: SharePointIdentity | AdminMember1 | undefined;
    /**
     * Instantiates a new SharePointIdentitySet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "group": n => { this.group = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "siteGroup": n => { this.siteGroup = n.getObjectValue<SharePointIdentity>(createSharePointIdentityFromDiscriminatorValue); },
            "siteUser": n => { this.siteUser = n.getObjectValue<SharePointIdentity>(createSharePointIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the group property value. The group associated with this action. Optional.
     * @returns a admin
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The group associated with this action. Optional.
     * @param value Value to set for the group property.
     */
    public set group(value: Identity | AdminMember1 | undefined) {
        this._group = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Identity>("group", this.group);
        writer.writeObjectValue<SharePointIdentity>("siteGroup", this.siteGroup);
        writer.writeObjectValue<SharePointIdentity>("siteUser", this.siteUser);
    };
    /**
     * Gets the siteGroup property value. The SharePoint group associated with this action. Optional.
     * @returns a admin
     */
    public get siteGroup() {
        return this._siteGroup;
    };
    /**
     * Sets the siteGroup property value. The SharePoint group associated with this action. Optional.
     * @param value Value to set for the siteGroup property.
     */
    public set siteGroup(value: SharePointIdentity | AdminMember1 | undefined) {
        this._siteGroup = value;
    };
    /**
     * Gets the siteUser property value. The SharePoint user associated with this action. Optional.
     * @returns a admin
     */
    public get siteUser() {
        return this._siteUser;
    };
    /**
     * Sets the siteUser property value. The SharePoint user associated with this action. Optional.
     * @param value Value to set for the siteUser property.
     */
    public set siteUser(value: SharePointIdentity | AdminMember1 | undefined) {
        this._siteUser = value;
    };
}
