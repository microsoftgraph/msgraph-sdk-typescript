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

export class DriveImpl extends BaseItemImpl implements Drive {
    /** Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive. */
    private _bundles?: DriveItem[] | undefined;
    /** Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only. */
    private _driveType?: string | undefined;
    /** The list of items the user is following. Only in OneDrive for Business. */
    private _following?: DriveItem[] | undefined;
    /** All items contained in the drive. Read-only. Nullable. */
    private _items?: DriveItem[] | undefined;
    /** For drives in SharePoint, the underlying document library list. Read-only. Nullable. */
    private _list?: List | undefined;
    /** Optional. The user account that owns the drive. Read-only. */
    private _owner?: IdentitySet | undefined;
    /** Optional. Information about the drive's storage space quota. Read-only. */
    private _quota?: Quota | undefined;
    /** The root folder of the drive. Read-only. */
    private _root?: DriveItem | undefined;
    /** The sharePointIds property */
    private _sharePointIds?: SharepointIds | undefined;
    /** Collection of common folders available in OneDrive. Read-only. Nullable. */
    private _special?: DriveItem[] | undefined;
    /** If present, indicates that this is a system-managed drive. Read-only. */
    private _system?: SystemFacet | undefined;
    /**
     * Gets the bundles property value. Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.
     * @returns a DriveItemInterface
     */
    public get bundles() {
        return this._bundles;
    };
    /**
     * Sets the bundles property value. Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.
     * @param value Value to set for the bundles property.
     */
    public set bundles(value: DriveItem[] | undefined) {
        if(value) {
            const bundlesArrValue: DriveItemImpl[] = [];
            this.bundles?.forEach(element => {
                bundlesArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
            });
            this._bundles = bundlesArrValue;
        }
    };
    /**
     * Instantiates a new Drive and sets the default values.
     * @param driveParameterValue 
     */
    public constructor(driveParameterValue?: Drive | undefined) {
        super(driveParameterValue);
        this._bundles = driveParameterValue?.bundles;
        this._driveType = driveParameterValue?.driveType;
        this._following = driveParameterValue?.following;
        this._items = driveParameterValue?.items;
        this._list = driveParameterValue?.list;
        this._owner = driveParameterValue?.owner;
        this._quota = driveParameterValue?.quota;
        this._root = driveParameterValue?.root;
        this._sharePointIds = driveParameterValue?.sharePointIds;
        this._special = driveParameterValue?.special;
        this._system = driveParameterValue?.system;
    };
    /**
     * Gets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     * @returns a string
     */
    public get driveType() {
        return this._driveType;
    };
    /**
     * Sets the driveType property value. Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     * @param value Value to set for the driveType property.
     */
    public set driveType(value: string | undefined) {
        if(value) {
            this._driveType = value;
        }
    };
    /**
     * Gets the following property value. The list of items the user is following. Only in OneDrive for Business.
     * @returns a DriveItemInterface
     */
    public get following() {
        return this._following;
    };
    /**
     * Sets the following property value. The list of items the user is following. Only in OneDrive for Business.
     * @param value Value to set for the following property.
     */
    public set following(value: DriveItem[] | undefined) {
        if(value) {
            const followingArrValue: DriveItemImpl[] = [];
            this.following?.forEach(element => {
                followingArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
            });
            this._following = followingArrValue;
        }
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
     * Gets the items property value. All items contained in the drive. Read-only. Nullable.
     * @returns a DriveItemInterface
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. All items contained in the drive. Read-only. Nullable.
     * @param value Value to set for the items property.
     */
    public set items(value: DriveItem[] | undefined) {
        if(value) {
            const itemsArrValue: DriveItemImpl[] = [];
            this.items?.forEach(element => {
                itemsArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
            });
            this._items = itemsArrValue;
        }
    };
    /**
     * Gets the list property value. For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @returns a ListInterface
     */
    public get list() {
        return this._list;
    };
    /**
     * Sets the list property value. For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     * @param value Value to set for the list property.
     */
    public set list(value: List | undefined) {
        if(value) {
            this._list = value instanceof ListImpl? value : new ListImpl(value);
        }
    };
    /**
     * Gets the owner property value. Optional. The user account that owns the drive. Read-only.
     * @returns a IdentitySetInterface
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. Optional. The user account that owns the drive. Read-only.
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        if(value) {
            this._owner = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the quota property value. Optional. Information about the drive's storage space quota. Read-only.
     * @returns a QuotaInterface
     */
    public get quota() {
        return this._quota;
    };
    /**
     * Sets the quota property value. Optional. Information about the drive's storage space quota. Read-only.
     * @param value Value to set for the quota property.
     */
    public set quota(value: Quota | undefined) {
        if(value) {
            this._quota = value instanceof QuotaImpl? value : new QuotaImpl(value);
        }
    };
    /**
     * Gets the root property value. The root folder of the drive. Read-only.
     * @returns a DriveItemInterface
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. The root folder of the drive. Read-only.
     * @param value Value to set for the root property.
     */
    public set root(value: DriveItem | undefined) {
        if(value) {
            this._root = value instanceof DriveItemImpl? value : new DriveItemImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.bundles && this.bundles.length != 0){        const bundlesArrValue: DriveItemImpl[] = [];
        this.bundles?.forEach(element => {
            bundlesArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("bundles", bundlesArrValue);
        }
        if(this.driveType){
            writer.writeStringValue("driveType", this.driveType);
        }
        if(this.following && this.following.length != 0){        const followingArrValue: DriveItemImpl[] = [];
        this.following?.forEach(element => {
            followingArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("following", followingArrValue);
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: DriveItemImpl[] = [];
        this.items?.forEach(element => {
            itemsArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("items", itemsArrValue);
        }
        if(this.list){
            writer.writeObjectValue<ListImpl>("list", (!this.list || this.list instanceof ListImpl? this.list : new ListImpl(this.list)));
        }
        if(this.owner){
            writer.writeObjectValue<IdentitySetImpl>("owner", (!this.owner || this.owner instanceof IdentitySetImpl? this.owner : new IdentitySetImpl(this.owner)));
        }
        if(this.quota){
            writer.writeObjectValue<QuotaImpl>("quota", (!this.quota || this.quota instanceof QuotaImpl? this.quota : new QuotaImpl(this.quota)));
        }
        if(this.root){
            writer.writeObjectValue<DriveItemImpl>("root", (!this.root || this.root instanceof DriveItemImpl? this.root : new DriveItemImpl(this.root)));
        }
        if(this.sharePointIds){
            writer.writeObjectValue<SharepointIdsImpl>("sharePointIds", (!this.sharePointIds || this.sharePointIds instanceof SharepointIdsImpl? this.sharePointIds : new SharepointIdsImpl(this.sharePointIds)));
        }
        if(this.special && this.special.length != 0){        const specialArrValue: DriveItemImpl[] = [];
        this.special?.forEach(element => {
            specialArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("special", specialArrValue);
        }
        if(this.system){
            writer.writeObjectValue<SystemFacetImpl>("system", (!this.system || this.system instanceof SystemFacetImpl? this.system : new SystemFacetImpl(this.system)));
        }
    };
    /**
     * Gets the sharePointIds property value. The sharePointIds property
     * @returns a SharepointIdsInterface
     */
    public get sharePointIds() {
        return this._sharePointIds;
    };
    /**
     * Sets the sharePointIds property value. The sharePointIds property
     * @param value Value to set for the sharePointIds property.
     */
    public set sharePointIds(value: SharepointIds | undefined) {
        if(value) {
            this._sharePointIds = value instanceof SharepointIdsImpl? value : new SharepointIdsImpl(value);
        }
    };
    /**
     * Gets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
     * @returns a DriveItemInterface
     */
    public get special() {
        return this._special;
    };
    /**
     * Sets the special property value. Collection of common folders available in OneDrive. Read-only. Nullable.
     * @param value Value to set for the special property.
     */
    public set special(value: DriveItem[] | undefined) {
        if(value) {
            const specialArrValue: DriveItemImpl[] = [];
            this.special?.forEach(element => {
                specialArrValue.push((element instanceof DriveItemImpl? element:new DriveItemImpl(element)));
            });
            this._special = specialArrValue;
        }
    };
    /**
     * Gets the system property value. If present, indicates that this is a system-managed drive. Read-only.
     * @returns a SystemFacetInterface
     */
    public get system() {
        return this._system;
    };
    /**
     * Sets the system property value. If present, indicates that this is a system-managed drive. Read-only.
     * @param value Value to set for the system property.
     */
    public set system(value: SystemFacet | undefined) {
        if(value) {
            this._system = value instanceof SystemFacetImpl? value : new SystemFacetImpl(value);
        }
    };
}
