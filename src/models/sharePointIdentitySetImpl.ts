import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {createSharePointIdentityFromDiscriminatorValue} from './createSharePointIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentityImpl, IdentitySetImpl, SharePointIdentityImpl} from './index';
import {SharePointIdentity} from './sharePointIdentity';
import {SharePointIdentitySet} from './sharePointIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class SharePointIdentitySetImpl extends IdentitySetImpl implements SharePointIdentitySet {
    /** The group associated with this action. Optional. */
    private _group?: Identity | undefined;
    /** The SharePoint group associated with this action. Optional. */
    private _siteGroup?: SharePointIdentity | undefined;
    /** The SharePoint user associated with this action. Optional. */
    private _siteUser?: SharePointIdentity | undefined;
    /**
     * Instantiates a new sharePointIdentitySet and sets the default values.
     * @param sharePointIdentitySetParameterValue 
     */
    public constructor(sharePointIdentitySetParameterValue?: SharePointIdentitySet | undefined) {
        super(sharePointIdentitySetParameterValue);
        this._group = sharePointIdentitySetParameterValue?.group;
        this._siteGroup = sharePointIdentitySetParameterValue?.siteGroup;
        this._siteUser = sharePointIdentitySetParameterValue?.siteUser;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "group": n => { this.group = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "siteGroup": n => { this.siteGroup = n.getObjectValue<SharePointIdentityImpl>(createSharePointIdentityFromDiscriminatorValue); },
            "siteUser": n => { this.siteUser = n.getObjectValue<SharePointIdentityImpl>(createSharePointIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the group property value. The group associated with this action. Optional.
     * @returns a IdentityInterface
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The group associated with this action. Optional.
     * @param value Value to set for the group property.
     */
    public set group(value: Identity | undefined) {
        if(value) {
            this._group = value instanceof IdentityImpl? value : new IdentityImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.group){
            writer.writeObjectValue<IdentityImpl>("group", (!this.group || this.group instanceof IdentityImpl? this.group : new IdentityImpl(this.group)));
        }
        if(this.siteGroup){
            writer.writeObjectValue<SharePointIdentityImpl>("siteGroup", (!this.siteGroup || this.siteGroup instanceof SharePointIdentityImpl? this.siteGroup : new SharePointIdentityImpl(this.siteGroup)));
        }
        if(this.siteUser){
            writer.writeObjectValue<SharePointIdentityImpl>("siteUser", (!this.siteUser || this.siteUser instanceof SharePointIdentityImpl? this.siteUser : new SharePointIdentityImpl(this.siteUser)));
        }
    };
    /**
     * Gets the siteGroup property value. The SharePoint group associated with this action. Optional.
     * @returns a SharePointIdentityInterface
     */
    public get siteGroup() {
        return this._siteGroup;
    };
    /**
     * Sets the siteGroup property value. The SharePoint group associated with this action. Optional.
     * @param value Value to set for the siteGroup property.
     */
    public set siteGroup(value: SharePointIdentity | undefined) {
        if(value) {
            this._siteGroup = value instanceof SharePointIdentityImpl? value : new SharePointIdentityImpl(value);
        }
    };
    /**
     * Gets the siteUser property value. The SharePoint user associated with this action. Optional.
     * @returns a SharePointIdentityInterface
     */
    public get siteUser() {
        return this._siteUser;
    };
    /**
     * Sets the siteUser property value. The SharePoint user associated with this action. Optional.
     * @param value Value to set for the siteUser property.
     */
    public set siteUser(value: SharePointIdentity | undefined) {
        if(value) {
            this._siteUser = value instanceof SharePointIdentityImpl? value : new SharePointIdentityImpl(value);
        }
    };
}
