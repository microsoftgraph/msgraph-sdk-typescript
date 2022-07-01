import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {BaseItemImpl, DriveItemImpl, IdentitySetImpl, ListImpl, ListItemImpl, PermissionImpl, SiteImpl} from './index';
import {List} from './list';
import {ListItem} from './listItem';
import {Permission} from './permission';
import {SharedDriveItem} from './sharedDriveItem';
import {Site} from './site';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedDriveItemImpl extends BaseItemImpl implements SharedDriveItem {
    /** Used to access the underlying driveItem */
    private _driveItem?: DriveItem | undefined;
    /** All driveItems contained in the sharing root. This collection cannot be enumerated. */
    private _items?: DriveItem[] | undefined;
    /** Used to access the underlying list */
    private _list?: List | undefined;
    /** Used to access the underlying listItem */
    private _listItem?: ListItem | undefined;
    /** Information about the owner of the shared item being referenced. */
    private _owner?: IdentitySet | undefined;
    /** Used to access the permission representing the underlying sharing link */
    private _permission?: Permission | undefined;
    /** Used to access the underlying driveItem. Deprecated -- use driveItem instead. */
    private _root?: DriveItem | undefined;
    /** Used to access the underlying site */
    private _site?: Site | undefined;
    /**
     * Instantiates a new SharedDriveItem and sets the default values.
     * @param sharedDriveItemParameterValue 
     */
    public constructor(sharedDriveItemParameterValue?: SharedDriveItem | undefined) {
        super(sharedDriveItemParameterValue);
        this._driveItem = sharedDriveItemParameterValue?.driveItem;
        this._items = sharedDriveItemParameterValue?.items;
        this._list = sharedDriveItemParameterValue?.list;
        this._listItem = sharedDriveItemParameterValue?.listItem;
        this._owner = sharedDriveItemParameterValue?.owner;
        this._permission = sharedDriveItemParameterValue?.permission;
        this._root = sharedDriveItemParameterValue?.root;
        this._site = sharedDriveItemParameterValue?.site;
    };
    /**
     * Gets the driveItem property value. Used to access the underlying driveItem
     * @returns a DriveItemInterface
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Sets the driveItem property value. Used to access the underlying driveItem
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        if(value) {
            this._driveItem = value instanceof DriveItemImpl? value as DriveItemImpl: new DriveItemImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "driveItem": n => { this.driveItem = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<ListImpl>(createListFromDiscriminatorValue); },
            "listItem": n => { this.listItem = n.getObjectValue<ListItemImpl>(createListItemFromDiscriminatorValue); },
            "owner": n => { this.owner = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "permission": n => { this.permission = n.getObjectValue<PermissionImpl>(createPermissionFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "site": n => { this.site = n.getObjectValue<SiteImpl>(createSiteFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the items property value. All driveItems contained in the sharing root. This collection cannot be enumerated.
     * @returns a DriveItemInterface
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. All driveItems contained in the sharing root. This collection cannot be enumerated.
     * @param value Value to set for the items property.
     */
    public set items(value: DriveItem[] | undefined) {
        if(value) {
            const itemsArrValue: DriveItemImpl[] = [];
            this.items?.forEach(element => {
                itemsArrValue.push((element instanceof DriveItemImpl? element as DriveItemImpl:new DriveItemImpl(element)));
            });
            this._items = itemsArrValue;
        }
    };
    /**
     * Gets the list property value. Used to access the underlying list
     * @returns a ListInterface
     */
    public get list() {
        return this._list;
    };
    /**
     * Sets the list property value. Used to access the underlying list
     * @param value Value to set for the list property.
     */
    public set list(value: List | undefined) {
        if(value) {
            this._list = value instanceof ListImpl? value as ListImpl: new ListImpl(value);
        }
    };
    /**
     * Gets the listItem property value. Used to access the underlying listItem
     * @returns a ListItemInterface
     */
    public get listItem() {
        return this._listItem;
    };
    /**
     * Sets the listItem property value. Used to access the underlying listItem
     * @param value Value to set for the listItem property.
     */
    public set listItem(value: ListItem | undefined) {
        if(value) {
            this._listItem = value instanceof ListItemImpl? value as ListItemImpl: new ListItemImpl(value);
        }
    };
    /**
     * Gets the owner property value. Information about the owner of the shared item being referenced.
     * @returns a IdentitySetInterface
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. Information about the owner of the shared item being referenced.
     * @param value Value to set for the owner property.
     */
    public set owner(value: IdentitySet | undefined) {
        if(value) {
            this._owner = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the permission property value. Used to access the permission representing the underlying sharing link
     * @returns a PermissionInterface
     */
    public get permission() {
        return this._permission;
    };
    /**
     * Sets the permission property value. Used to access the permission representing the underlying sharing link
     * @param value Value to set for the permission property.
     */
    public set permission(value: Permission | undefined) {
        if(value) {
            this._permission = value instanceof PermissionImpl? value as PermissionImpl: new PermissionImpl(value);
        }
    };
    /**
     * Gets the root property value. Used to access the underlying driveItem. Deprecated -- use driveItem instead.
     * @returns a DriveItemInterface
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. Used to access the underlying driveItem. Deprecated -- use driveItem instead.
     * @param value Value to set for the root property.
     */
    public set root(value: DriveItem | undefined) {
        if(value) {
            this._root = value instanceof DriveItemImpl? value as DriveItemImpl: new DriveItemImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.driveItem){
            writer.writeObjectValue<DriveItemImpl>("driveItem", (this.driveItem instanceof DriveItemImpl? this.driveItem as DriveItemImpl: new DriveItemImpl(this.driveItem)));
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: DriveItemImpl[] = [];
        this.items?.forEach(element => {
            itemsArrValue.push((element instanceof DriveItemImpl? element as DriveItemImpl:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("items", itemsArrValue);
        }
        if(this.list){
            writer.writeObjectValue<ListImpl>("list", (this.list instanceof ListImpl? this.list as ListImpl: new ListImpl(this.list)));
        }
        if(this.listItem){
            writer.writeObjectValue<ListItemImpl>("listItem", (this.listItem instanceof ListItemImpl? this.listItem as ListItemImpl: new ListItemImpl(this.listItem)));
        }
        if(this.owner){
            writer.writeObjectValue<IdentitySetImpl>("owner", (this.owner instanceof IdentitySetImpl? this.owner as IdentitySetImpl: new IdentitySetImpl(this.owner)));
        }
        if(this.permission){
            writer.writeObjectValue<PermissionImpl>("permission", (this.permission instanceof PermissionImpl? this.permission as PermissionImpl: new PermissionImpl(this.permission)));
        }
        if(this.root){
            writer.writeObjectValue<DriveItemImpl>("root", (this.root instanceof DriveItemImpl? this.root as DriveItemImpl: new DriveItemImpl(this.root)));
        }
        if(this.site){
            writer.writeObjectValue<SiteImpl>("site", (this.site instanceof SiteImpl? this.site as SiteImpl: new SiteImpl(this.site)));
        }
    };
    /**
     * Gets the site property value. Used to access the underlying site
     * @returns a SiteInterface
     */
    public get site() {
        return this._site;
    };
    /**
     * Sets the site property value. Used to access the underlying site
     * @param value Value to set for the site property.
     */
    public set site(value: Site | undefined) {
        if(value) {
            this._site = value instanceof SiteImpl? value as SiteImpl: new SiteImpl(value);
        }
    };
}
