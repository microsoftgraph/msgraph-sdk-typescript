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

/** Casts the previous resource to user. */
export class PermissionImpl extends EntityImpl implements Parsable, Permission {
    /** A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue indicates there is no expiration set for this permission. Optional. */
    public expirationDateTime?: Date | undefined;
    /** The grantedTo property */
    public grantedTo?: IdentitySet | undefined;
    /** The grantedToIdentities property */
    public grantedToIdentities?: IdentitySet[] | undefined;
    /** For link type permissions, the details of the users to whom permission was granted. Read-only. */
    public grantedToIdentitiesV2?: SharePointIdentitySet[] | undefined;
    /** For user type permissions, the details of the users and applications for this permission. Read-only. */
    public grantedToV2?: SharePointIdentitySet | undefined;
    /** Indicates whether the password is set for this permission. This property only appears in the response. Optional. Read-only. For OneDrive Personal only. */
    public hasPassword?: boolean | undefined;
    /** Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only. */
    public inheritedFrom?: ItemReference | undefined;
    /** Details of any associated sharing invitation for this permission. Read-only. */
    public invitation?: SharingInvitation | undefined;
    /** Provides the link details of the current permission, if it is a link type permissions. Read-only. */
    public link?: SharingLink | undefined;
    /** The type of permission, for example, read. See below for the full list of roles. Read-only. */
    public roles?: string[] | undefined;
    /** A unique token that can be used to access this shared item via the [shares API][]. Read-only. */
    public shareId?: string | undefined;
    /**
     * Instantiates a new permission and sets the default values.
     * @param permissionParameterValue 
     */
    public constructor(permissionParameterValue?: Permission | undefined) {
        super();
        this.expirationDateTime = permissionParameterValue?.expirationDateTime ;
        this.grantedTo = permissionParameterValue?.grantedTo ;
        this.grantedToIdentities = permissionParameterValue?.grantedToIdentities ;
        this.grantedToIdentitiesV2 = permissionParameterValue?.grantedToIdentitiesV2 ;
        this.grantedToV2 = permissionParameterValue?.grantedToV2 ;
        this.hasPassword = permissionParameterValue?.hasPassword ;
        this.inheritedFrom = permissionParameterValue?.inheritedFrom ;
        this.invitation = permissionParameterValue?.invitation ;
        this.link = permissionParameterValue?.link ;
        this.roles = permissionParameterValue?.roles ;
        this.shareId = permissionParameterValue?.shareId ;
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
        writer.writeObjectValue<IdentitySetImpl>("grantedTo", new IdentitySetImpl(this.grantedTo));
        }
        if(this.grantedToIdentities && this.grantedToIdentities.length != 0){        const grantedToIdentitiesArrValue: IdentitySetImpl[] = []; this.grantedToIdentities?.forEach(element => {grantedToIdentitiesArrValue.push(new IdentitySetImpl(element));});
        writer.writeCollectionOfObjectValues<IdentitySetImpl>("grantedToIdentities", grantedToIdentitiesArrValue);
        }
        if(this.grantedToIdentitiesV2 && this.grantedToIdentitiesV2.length != 0){        const grantedToIdentitiesV2ArrValue: SharePointIdentitySetImpl[] = []; this.grantedToIdentitiesV2?.forEach(element => {grantedToIdentitiesV2ArrValue.push(new SharePointIdentitySetImpl(element));});
        writer.writeCollectionOfObjectValues<SharePointIdentitySetImpl>("grantedToIdentitiesV2", grantedToIdentitiesV2ArrValue);
        }
        if(this.grantedToV2){
        writer.writeObjectValue<SharePointIdentitySetImpl>("grantedToV2", new SharePointIdentitySetImpl(this.grantedToV2));
        }
        if(this.hasPassword){
        writer.writeBooleanValue("hasPassword", this.hasPassword);
        }
        if(this.inheritedFrom){
        writer.writeObjectValue<ItemReferenceImpl>("inheritedFrom", new ItemReferenceImpl(this.inheritedFrom));
        }
        if(this.invitation){
        writer.writeObjectValue<SharingInvitationImpl>("invitation", new SharingInvitationImpl(this.invitation));
        }
        if(this.link){
        writer.writeObjectValue<SharingLinkImpl>("link", new SharingLinkImpl(this.link));
        }
        if(this.roles){
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        if(this.shareId){
        writer.writeStringValue("shareId", this.shareId);
        }
    };
}
