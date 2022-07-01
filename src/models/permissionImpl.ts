import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createSharePointIdentitySetFromDiscriminatorValue} from './createSharePointIdentitySetFromDiscriminatorValue';
import {createSharingInvitationFromDiscriminatorValue} from './createSharingInvitationFromDiscriminatorValue';
import {createSharingLinkFromDiscriminatorValue} from './createSharingLinkFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, ItemReferenceImpl, SharePointIdentitySetImpl, SharingInvitationImpl, SharingLinkImpl} from './index';
import {ItemReference} from './itemReference';
import {Permission} from './permission';
import {SharePointIdentitySet} from './sharePointIdentitySet';
import {SharingInvitation} from './sharingInvitation';
import {SharingLink} from './sharingLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class PermissionImpl extends EntityImpl implements Permission {
    /** A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional. */
    private _expirationDateTime?: Date | undefined;
    /** The grantedTo property */
    private _grantedTo?: IdentitySet | undefined;
    /** The grantedToIdentities property */
    private _grantedToIdentities?: IdentitySet[] | undefined;
    /** For link type permissions, the details of the users to whom permission was granted. Read-only. */
    private _grantedToIdentitiesV2?: SharePointIdentitySet[] | undefined;
    /** For user type permissions, the details of the users and applications for this permission. Read-only. */
    private _grantedToV2?: SharePointIdentitySet | undefined;
    /** Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only. */
    private _hasPassword?: boolean | undefined;
    /** Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only. */
    private _inheritedFrom?: ItemReference | undefined;
    /** Details of any associated sharing invitation for this permission. Read-only. */
    private _invitation?: SharingInvitation | undefined;
    /** Provides the link details of the current permission, if it is a link type permissions. Read-only. */
    private _link?: SharingLink | undefined;
    /** The type of permission, for example, read. See below for the full list of roles. Read-only. */
    private _roles?: string[] | undefined;
    /** A unique token that can be used to access this shared item via the [shares API][]. Read-only. */
    private _shareId?: string | undefined;
    /**
     * Instantiates a new permission and sets the default values.
     * @param permissionParameterValue 
     */
    public constructor(permissionParameterValue?: Permission | undefined) {
        super(permissionParameterValue);
        this._expirationDateTime = permissionParameterValue?.expirationDateTime;
        this._grantedTo = permissionParameterValue?.grantedTo;
        this._grantedToIdentities = permissionParameterValue?.grantedToIdentities;
        this._grantedToIdentitiesV2 = permissionParameterValue?.grantedToIdentitiesV2;
        this._grantedToV2 = permissionParameterValue?.grantedToV2;
        this._hasPassword = permissionParameterValue?.hasPassword;
        this._inheritedFrom = permissionParameterValue?.inheritedFrom;
        this._invitation = permissionParameterValue?.invitation;
        this._link = permissionParameterValue?.link;
        this._roles = permissionParameterValue?.roles;
        this._shareId = permissionParameterValue?.shareId;
    };
    /**
     * Gets the expirationDateTime property value. A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "grantedTo": n => { this.grantedTo = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "grantedToIdentities": n => { this.grantedToIdentities = n.getCollectionOfObjectValues<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "grantedToIdentitiesV2": n => { this.grantedToIdentitiesV2 = n.getCollectionOfObjectValues<SharePointIdentitySetImpl>(createSharePointIdentitySetFromDiscriminatorValue); },
            "grantedToV2": n => { this.grantedToV2 = n.getObjectValue<SharePointIdentitySetImpl>(createSharePointIdentitySetFromDiscriminatorValue); },
            "hasPassword": n => { this.hasPassword = n.getBooleanValue(); },
            "inheritedFrom": n => { this.inheritedFrom = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
            "invitation": n => { this.invitation = n.getObjectValue<SharingInvitationImpl>(createSharingInvitationFromDiscriminatorValue); },
            "link": n => { this.link = n.getObjectValue<SharingLinkImpl>(createSharingLinkFromDiscriminatorValue); },
            "roles": n => { this.roles = n.getCollectionOfPrimitiveValues<string>(); },
            "shareId": n => { this.shareId = n.getStringValue(); },
        };
    };
    /**
     * Gets the grantedTo property value. The grantedTo property
     * @returns a IdentitySetInterface
     */
    public get grantedTo() {
        return this._grantedTo;
    };
    /**
     * Sets the grantedTo property value. The grantedTo property
     * @param value Value to set for the grantedTo property.
     */
    public set grantedTo(value: IdentitySet | undefined) {
        if(value) {
            this._grantedTo = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the grantedToIdentities property value. The grantedToIdentities property
     * @returns a IdentitySetInterface
     */
    public get grantedToIdentities() {
        return this._grantedToIdentities;
    };
    /**
     * Sets the grantedToIdentities property value. The grantedToIdentities property
     * @param value Value to set for the grantedToIdentities property.
     */
    public set grantedToIdentities(value: IdentitySet[] | undefined) {
        if(value) {
            const grantedToIdentitiesArrValue: IdentitySetImpl[] = [];
            this.grantedToIdentities?.forEach(element => {
                grantedToIdentitiesArrValue.push((element instanceof IdentitySetImpl? element as IdentitySetImpl:new IdentitySetImpl(element)));
            });
            this._grantedToIdentities = grantedToIdentitiesArrValue;
        }
    };
    /**
     * Gets the grantedToIdentitiesV2 property value. For link type permissions, the details of the users to whom permission was granted. Read-only.
     * @returns a SharePointIdentitySetInterface
     */
    public get grantedToIdentitiesV2() {
        return this._grantedToIdentitiesV2;
    };
    /**
     * Sets the grantedToIdentitiesV2 property value. For link type permissions, the details of the users to whom permission was granted. Read-only.
     * @param value Value to set for the grantedToIdentitiesV2 property.
     */
    public set grantedToIdentitiesV2(value: SharePointIdentitySet[] | undefined) {
        if(value) {
            const grantedToIdentitiesV2ArrValue: SharePointIdentitySetImpl[] = [];
            this.grantedToIdentitiesV2?.forEach(element => {
                grantedToIdentitiesV2ArrValue.push((element instanceof SharePointIdentitySetImpl? element as SharePointIdentitySetImpl:new SharePointIdentitySetImpl(element)));
            });
            this._grantedToIdentitiesV2 = grantedToIdentitiesV2ArrValue;
        }
    };
    /**
     * Gets the grantedToV2 property value. For user type permissions, the details of the users and applications for this permission. Read-only.
     * @returns a SharePointIdentitySetInterface
     */
    public get grantedToV2() {
        return this._grantedToV2;
    };
    /**
     * Sets the grantedToV2 property value. For user type permissions, the details of the users and applications for this permission. Read-only.
     * @param value Value to set for the grantedToV2 property.
     */
    public set grantedToV2(value: SharePointIdentitySet | undefined) {
        if(value) {
            this._grantedToV2 = value instanceof SharePointIdentitySetImpl? value as SharePointIdentitySetImpl: new SharePointIdentitySetImpl(value);
        }
    };
    /**
     * Gets the hasPassword property value. Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only.
     * @returns a boolean
     */
    public get hasPassword() {
        return this._hasPassword;
    };
    /**
     * Sets the hasPassword property value. Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only.
     * @param value Value to set for the hasPassword property.
     */
    public set hasPassword(value: boolean | undefined) {
        if(value) {
            this._hasPassword = value;
        }
    };
    /**
     * Gets the inheritedFrom property value. Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
     * @returns a ItemReferenceInterface
     */
    public get inheritedFrom() {
        return this._inheritedFrom;
    };
    /**
     * Sets the inheritedFrom property value. Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
     * @param value Value to set for the inheritedFrom property.
     */
    public set inheritedFrom(value: ItemReference | undefined) {
        if(value) {
            this._inheritedFrom = value instanceof ItemReferenceImpl? value as ItemReferenceImpl: new ItemReferenceImpl(value);
        }
    };
    /**
     * Gets the invitation property value. Details of any associated sharing invitation for this permission. Read-only.
     * @returns a SharingInvitationInterface
     */
    public get invitation() {
        return this._invitation;
    };
    /**
     * Sets the invitation property value. Details of any associated sharing invitation for this permission. Read-only.
     * @param value Value to set for the invitation property.
     */
    public set invitation(value: SharingInvitation | undefined) {
        if(value) {
            this._invitation = value instanceof SharingInvitationImpl? value as SharingInvitationImpl: new SharingInvitationImpl(value);
        }
    };
    /**
     * Gets the link property value. Provides the link details of the current permission, if it is a link type permissions. Read-only.
     * @returns a SharingLinkInterface
     */
    public get link() {
        return this._link;
    };
    /**
     * Sets the link property value. Provides the link details of the current permission, if it is a link type permissions. Read-only.
     * @param value Value to set for the link property.
     */
    public set link(value: SharingLink | undefined) {
        if(value) {
            this._link = value instanceof SharingLinkImpl? value as SharingLinkImpl: new SharingLinkImpl(value);
        }
    };
    /**
     * Gets the roles property value. The type of permission, for example, read. See below for the full list of roles. Read-only.
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Sets the roles property value. The type of permission, for example, read. See below for the full list of roles. Read-only.
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        if(value) {
            this._roles = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.grantedTo){
            writer.writeObjectValue<IdentitySetImpl>("grantedTo", (this.grantedTo instanceof IdentitySetImpl? this.grantedTo as IdentitySetImpl: new IdentitySetImpl(this.grantedTo)));
        }
        if(this.grantedToIdentities && this.grantedToIdentities.length != 0){        const grantedToIdentitiesArrValue: IdentitySetImpl[] = [];
        this.grantedToIdentities?.forEach(element => {
            grantedToIdentitiesArrValue.push((element instanceof IdentitySetImpl? element as IdentitySetImpl:new IdentitySetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentitySetImpl>("grantedToIdentities", grantedToIdentitiesArrValue);
        }
        if(this.grantedToIdentitiesV2 && this.grantedToIdentitiesV2.length != 0){        const grantedToIdentitiesV2ArrValue: SharePointIdentitySetImpl[] = [];
        this.grantedToIdentitiesV2?.forEach(element => {
            grantedToIdentitiesV2ArrValue.push((element instanceof SharePointIdentitySetImpl? element as SharePointIdentitySetImpl:new SharePointIdentitySetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SharePointIdentitySetImpl>("grantedToIdentitiesV2", grantedToIdentitiesV2ArrValue);
        }
        if(this.grantedToV2){
            writer.writeObjectValue<SharePointIdentitySetImpl>("grantedToV2", (this.grantedToV2 instanceof SharePointIdentitySetImpl? this.grantedToV2 as SharePointIdentitySetImpl: new SharePointIdentitySetImpl(this.grantedToV2)));
        }
        if(this.hasPassword){
            writer.writeBooleanValue("hasPassword", this.hasPassword);
        }
        if(this.inheritedFrom){
            writer.writeObjectValue<ItemReferenceImpl>("inheritedFrom", (this.inheritedFrom instanceof ItemReferenceImpl? this.inheritedFrom as ItemReferenceImpl: new ItemReferenceImpl(this.inheritedFrom)));
        }
        if(this.invitation){
            writer.writeObjectValue<SharingInvitationImpl>("invitation", (this.invitation instanceof SharingInvitationImpl? this.invitation as SharingInvitationImpl: new SharingInvitationImpl(this.invitation)));
        }
        if(this.link){
            writer.writeObjectValue<SharingLinkImpl>("link", (this.link instanceof SharingLinkImpl? this.link as SharingLinkImpl: new SharingLinkImpl(this.link)));
        }
        if(this.roles){
            writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        if(this.shareId){
            writer.writeStringValue("shareId", this.shareId);
        }
    };
    /**
     * Gets the shareId property value. A unique token that can be used to access this shared item via the [shares API][]. Read-only.
     * @returns a string
     */
    public get shareId() {
        return this._shareId;
    };
    /**
     * Sets the shareId property value. A unique token that can be used to access this shared item via the [shares API][]. Read-only.
     * @param value Value to set for the shareId property.
     */
    public set shareId(value: string | undefined) {
        if(value) {
            this._shareId = value;
        }
    };
}
