import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createQuotaFromDiscriminatorValue} from './createQuotaFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {Drive} from './drive';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {BaseItemImpl, DriveItemImpl, IdentitySetImpl, ListImpl, QuotaImpl, SharepointIdsImpl, SystemFacetImpl} from './index';
import {List} from './list';
import {Quota} from './quota';
import {SharepointIds} from './sharepointIds';
import {SystemFacet} from './systemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class DriveImpl extends BaseItemImpl implements Drive, Parsable {
    /** Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive. */
    public bundles?: DriveItem[] | undefined;
    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only. */
    public driveType?: string | undefined;
    /** The list of items the user is following. Only in OneDrive for Business. */
    public following?: DriveItem[] | undefined;
    /** All items contained in the drive. Read-only. Nullable. */
    public items?: DriveItem[] | undefined;
    /** For drives in SharePoint, the underlying document library list. Read-only. Nullable. */
    public list?: List | undefined;
    /** Optional. The user account that owns the drive. Read-only. */
    public owner?: IdentitySet | undefined;
    /** Optional. Information about the drive's storage space quota. Read-only. */
    public quota?: Quota | undefined;
    /** The root folder of the drive. Read-only. */
    public root?: DriveItem | undefined;
    /** The sharePointIds property */
    public sharePointIds?: SharepointIds | undefined;
    /** Collection of common folders available in OneDrive. Read-only. Nullable. */
    public special?: DriveItem[] | undefined;
    /** If present, indicates that this is a system-managed drive. Read-only. */
    public system?: SystemFacet | undefined;
    /**
     * Instantiates a new drive and sets the default values.
     * @param driveParameterValue 
     */
    public constructor(driveParameterValue?: Drive | undefined) {
        super();
        this.bundles = driveParameterValue?.bundles ;
        this.driveType = driveParameterValue?.driveType ;
        this.following = driveParameterValue?.following ;
        this.items = driveParameterValue?.items ;
        this.list = driveParameterValue?.list ;
        this.owner = driveParameterValue?.owner ;
        this.quota = driveParameterValue?.quota ;
        this.root = driveParameterValue?.root ;
        this.sharePointIds = driveParameterValue?.sharePointIds ;
        this.special = driveParameterValue?.special ;
        this.system = driveParameterValue?.system ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "bundles": n => { this.bundles = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "driveType": n => { this.driveType = n.getStringValue(); },
            "following": n => { this.following = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<ListImpl>(createListFromDiscriminatorValue); },
            "owner": n => { this.owner = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "quota": n => { this.quota = n.getObjectValue<QuotaImpl>(createQuotaFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "sharePointIds": n => { this.sharePointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
            "special": n => { this.special = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "system": n => { this.system = n.getObjectValue<SystemFacetImpl>(createSystemFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bundles && this.bundles.length != 0){        const bundlesArrValue: DriveItemImpl[] = []; this.bundles?.forEach(element => {bundlesArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("bundles", bundlesArrValue);
        }
        if(this.driveType){
        writer.writeStringValue("driveType", this.driveType);
        }
        if(this.following && this.following.length != 0){        const followingArrValue: DriveItemImpl[] = []; this.following?.forEach(element => {followingArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("following", followingArrValue);
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: DriveItemImpl[] = []; this.items?.forEach(element => {itemsArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("items", itemsArrValue);
        }
        if(this.list){
        writer.writeObjectValue<ListImpl>("list", new ListImpl(this.list));
        }
        if(this.owner){
        writer.writeObjectValue<IdentitySetImpl>("owner", new IdentitySetImpl(this.owner));
        }
        if(this.quota){
        writer.writeObjectValue<QuotaImpl>("quota", new QuotaImpl(this.quota));
        }
        if(this.root){
        writer.writeObjectValue<DriveItemImpl>("root", new DriveItemImpl(this.root));
        }
        if(this.sharePointIds){
        writer.writeObjectValue<SharepointIdsImpl>("sharePointIds", new SharepointIdsImpl(this.sharePointIds));
        }
        if(this.special && this.special.length != 0){        const specialArrValue: DriveItemImpl[] = []; this.special?.forEach(element => {specialArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("special", specialArrValue);
        }
        if(this.system){
        writer.writeObjectValue<SystemFacetImpl>("system", new SystemFacetImpl(this.system));
        }
    };
}
