import {BaseItem} from './baseItem';
import {ColumnDefinition} from './columnDefinition';
import {ContentType} from './contentType';
import {createBaseItemFromDiscriminatorValue} from './createBaseItemFromDiscriminatorValue';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createOnenoteFromDiscriminatorValue} from './createOnenoteFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSiteCollectionFromDiscriminatorValue} from './createSiteCollectionFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {Drive} from './drive';
import {BaseItemImpl, ColumnDefinitionImpl, ContentTypeImpl, DriveImpl, ItemAnalyticsImpl, ListImpl, OnenoteImpl, PermissionImpl, PublicErrorImpl, RichLongRunningOperationImpl, RootImpl, SharepointIdsImpl, SiteCollectionImpl} from './index';
import {ItemAnalytics} from './itemAnalytics';
import {List} from './list';
import {Onenote} from './onenote';
import {Permission} from './permission';
import {PublicError} from './publicError';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {Root} from './root';
import {SharepointIds} from './sharepointIds';
import {Site} from './site';
import {SiteCollection} from './siteCollection';
import {StoreImpl} from './termStore/';
import {createStoreFromDiscriminatorValue} from './termStore/createStoreFromDiscriminatorValue';
import {Store} from './termStore/store';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class SiteImpl extends BaseItemImpl implements Site {
    /** Analytics about the view activities that took place in this site. */
    private _analytics?: ItemAnalytics | undefined;
    /** The collection of column definitions reusable across lists under this site. */
    private _columns?: ColumnDefinition[] | undefined;
    /** The collection of content types defined for this site. */
    private _contentTypes?: ContentType[] | undefined;
    /** The full title for the site. Read-only. */
    private _displayName?: string | undefined;
    /** The default drive (document library) for this site. */
    private _drive?: Drive | undefined;
    /** The collection of drives (document libraries) under this site. */
    private _drives?: Drive[] | undefined;
    /** The error property */
    private _error_escaped?: PublicError | undefined;
    /** The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site. */
    private _externalColumns?: ColumnDefinition[] | undefined;
    /** Used to address any item contained in this site. This collection cannot be enumerated. */
    private _items?: BaseItem[] | undefined;
    /** The collection of lists under this site. */
    private _lists?: List[] | undefined;
    /** Calls the OneNote service for notebook related operations. */
    private _onenote?: Onenote | undefined;
    /** The collection of long running operations for the site. */
    private _operations?: RichLongRunningOperation[] | undefined;
    /** The permissions associated with the site. Nullable. */
    private _permissions?: Permission[] | undefined;
    /** If present, indicates that this is the root site in the site collection. Read-only. */
    private _root?: Root | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    private _sharepointIds?: SharepointIds | undefined;
    /** Provides details about the site's site collection. Available only on the root site. Read-only. */
    private _siteCollection?: SiteCollection | undefined;
    /** The collection of the sub-sites under this site. */
    private _sites?: Site[] | undefined;
    /** The termStore under this site. */
    private _termStore?: Store | undefined;
    /** The collection of termStores under this site. */
    private _termStores?: Store[] | undefined;
    /**
     * Gets the analytics property value. Analytics about the view activities that took place in this site.
     * @returns a ItemAnalyticsInterface
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Sets the analytics property value. Analytics about the view activities that took place in this site.
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        if(value) {
            this._analytics = value instanceof ItemAnalyticsImpl? value : new ItemAnalyticsImpl(value);
        }
    };
    /**
     * Gets the columns property value. The collection of column definitions reusable across lists under this site.
     * @returns a ColumnDefinitionInterface
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The collection of column definitions reusable across lists under this site.
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        if(value) {
            const columnsArrValue: ColumnDefinitionImpl[] = [];
            this.columns?.forEach(element => {
                columnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
            });
            this._columns = columnsArrValue;
        }
    };
    /**
     * Instantiates a new site and sets the default values.
     * @param siteParameterValue 
     */
    public constructor(siteParameterValue?: Site | undefined) {
        super(siteParameterValue);
        this._analytics = siteParameterValue?.analytics;
        this._columns = siteParameterValue?.columns;
        this._contentTypes = siteParameterValue?.contentTypes;
        this._displayName = siteParameterValue?.displayName;
        this._drive = siteParameterValue?.drive;
        this._drives = siteParameterValue?.drives;
        this._error_escaped = siteParameterValue?.error_escaped;
        this._externalColumns = siteParameterValue?.externalColumns;
        this._items = siteParameterValue?.items;
        this._lists = siteParameterValue?.lists;
        this._onenote = siteParameterValue?.onenote;
        this._operations = siteParameterValue?.operations;
        this._permissions = siteParameterValue?.permissions;
        this._root = siteParameterValue?.root;
        this._sharepointIds = siteParameterValue?.sharepointIds;
        this._siteCollection = siteParameterValue?.siteCollection;
        this._sites = siteParameterValue?.sites;
        this._termStore = siteParameterValue?.termStore;
        this._termStores = siteParameterValue?.termStores;
    };
    /**
     * Gets the contentTypes property value. The collection of content types defined for this site.
     * @returns a ContentTypeInterface
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Sets the contentTypes property value. The collection of content types defined for this site.
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: ContentType[] | undefined) {
        if(value) {
            const contentTypesArrValue: ContentTypeImpl[] = [];
            this.contentTypes?.forEach(element => {
                contentTypesArrValue.push((element instanceof ContentTypeImpl? element:new ContentTypeImpl(element)));
            });
            this._contentTypes = contentTypesArrValue;
        }
    };
    /**
     * Gets the displayName property value. The full title for the site. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The full title for the site. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the drive property value. The default drive (document library) for this site.
     * @returns a DriveInterface
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. The default drive (document library) for this site.
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        if(value) {
            this._drive = value instanceof DriveImpl? value : new DriveImpl(value);
        }
    };
    /**
     * Gets the drives property value. The collection of drives (document libraries) under this site.
     * @returns a DriveInterface
     */
    public get drives() {
        return this._drives;
    };
    /**
     * Sets the drives property value. The collection of drives (document libraries) under this site.
     * @param value Value to set for the drives property.
     */
    public set drives(value: Drive[] | undefined) {
        if(value) {
            const drivesArrValue: DriveImpl[] = [];
            this.drives?.forEach(element => {
                drivesArrValue.push((element instanceof DriveImpl? element:new DriveImpl(element)));
            });
            this._drives = drivesArrValue;
        }
    };
    /**
     * Gets the error property value. The error property
     * @returns a PublicErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        if(value) {
            this._error_escaped = value instanceof PublicErrorImpl? value : new PublicErrorImpl(value);
        }
    };
    /**
     * Gets the externalColumns property value. The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site.
     * @returns a ColumnDefinitionInterface
     */
    public get externalColumns() {
        return this._externalColumns;
    };
    /**
     * Sets the externalColumns property value. The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site.
     * @param value Value to set for the externalColumns property.
     */
    public set externalColumns(value: ColumnDefinition[] | undefined) {
        if(value) {
            const externalColumnsArrValue: ColumnDefinitionImpl[] = [];
            this.externalColumns?.forEach(element => {
                externalColumnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
            });
            this._externalColumns = externalColumnsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "analytics": n => { this.analytics = n.getObjectValue<ItemAnalyticsImpl>(createItemAnalyticsFromDiscriminatorValue); },
            "columns": n => { this.columns = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfObjectValues<ContentTypeImpl>(createContentTypeFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<DriveImpl>(createDriveFromDiscriminatorValue); },
            "drives": n => { this.drives = n.getCollectionOfObjectValues<DriveImpl>(createDriveFromDiscriminatorValue); },
            "error": n => { this.error_escaped = n.getObjectValue<PublicErrorImpl>(createPublicErrorFromDiscriminatorValue); },
            "externalColumns": n => { this.externalColumns = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<BaseItemImpl>(createBaseItemFromDiscriminatorValue); },
            "lists": n => { this.lists = n.getCollectionOfObjectValues<ListImpl>(createListFromDiscriminatorValue); },
            "onenote": n => { this.onenote = n.getObjectValue<OnenoteImpl>(createOnenoteFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<RichLongRunningOperationImpl>(createRichLongRunningOperationFromDiscriminatorValue); },
            "permissions": n => { this.permissions = n.getCollectionOfObjectValues<PermissionImpl>(createPermissionFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<RootImpl>(createRootFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
            "siteCollection": n => { this.siteCollection = n.getObjectValue<SiteCollectionImpl>(createSiteCollectionFromDiscriminatorValue); },
            "sites": n => { this.sites = n.getCollectionOfObjectValues<SiteImpl>(createSiteFromDiscriminatorValue); },
            "termStore": n => { this.termStore = n.getObjectValue<StoreImpl>(createStoreFromDiscriminatorValue); },
            "termStores": n => { this.termStores = n.getCollectionOfObjectValues<StoreImpl>(createStoreFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the items property value. Used to address any item contained in this site. This collection cannot be enumerated.
     * @returns a BaseItemInterface
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. Used to address any item contained in this site. This collection cannot be enumerated.
     * @param value Value to set for the items property.
     */
    public set items(value: BaseItem[] | undefined) {
        if(value) {
            const itemsArrValue: BaseItemImpl[] = [];
            this.items?.forEach(element => {
                itemsArrValue.push((element instanceof BaseItemImpl? element:new BaseItemImpl(element)));
            });
            this._items = itemsArrValue;
        }
    };
    /**
     * Gets the lists property value. The collection of lists under this site.
     * @returns a ListInterface
     */
    public get lists() {
        return this._lists;
    };
    /**
     * Sets the lists property value. The collection of lists under this site.
     * @param value Value to set for the lists property.
     */
    public set lists(value: List[] | undefined) {
        if(value) {
            const listsArrValue: ListImpl[] = [];
            this.lists?.forEach(element => {
                listsArrValue.push((element instanceof ListImpl? element:new ListImpl(element)));
            });
            this._lists = listsArrValue;
        }
    };
    /**
     * Gets the onenote property value. Calls the OneNote service for notebook related operations.
     * @returns a OnenoteInterface
     */
    public get onenote() {
        return this._onenote;
    };
    /**
     * Sets the onenote property value. Calls the OneNote service for notebook related operations.
     * @param value Value to set for the onenote property.
     */
    public set onenote(value: Onenote | undefined) {
        if(value) {
            this._onenote = value instanceof OnenoteImpl? value : new OnenoteImpl(value);
        }
    };
    /**
     * Gets the operations property value. The collection of long running operations for the site.
     * @returns a RichLongRunningOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The collection of long running operations for the site.
     * @param value Value to set for the operations property.
     */
    public set operations(value: RichLongRunningOperation[] | undefined) {
        if(value) {
            const operationsArrValue: RichLongRunningOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof RichLongRunningOperationImpl? element:new RichLongRunningOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Gets the permissions property value. The permissions associated with the site. Nullable.
     * @returns a PermissionInterface
     */
    public get permissions() {
        return this._permissions;
    };
    /**
     * Sets the permissions property value. The permissions associated with the site. Nullable.
     * @param value Value to set for the permissions property.
     */
    public set permissions(value: Permission[] | undefined) {
        if(value) {
            const permissionsArrValue: PermissionImpl[] = [];
            this.permissions?.forEach(element => {
                permissionsArrValue.push((element instanceof PermissionImpl? element:new PermissionImpl(element)));
            });
            this._permissions = permissionsArrValue;
        }
    };
    /**
     * Gets the root property value. If present, indicates that this is the root site in the site collection. Read-only.
     * @returns a RootInterface
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. If present, indicates that this is the root site in the site collection. Read-only.
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        if(value) {
            this._root = value instanceof RootImpl? value : new RootImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.analytics){
            writer.writeObjectValue<ItemAnalyticsImpl>("analytics", (!this.analytics || this.analytics instanceof ItemAnalyticsImpl? this.analytics : new ItemAnalyticsImpl(this.analytics)));
        }
        if(this.columns && this.columns.length != 0){        const columnsArrValue: ColumnDefinitionImpl[] = [];
        this.columns?.forEach(element => {
            columnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columns", columnsArrValue);
        }
        if(this.contentTypes && this.contentTypes.length != 0){        const contentTypesArrValue: ContentTypeImpl[] = [];
        this.contentTypes?.forEach(element => {
            contentTypesArrValue.push((element instanceof ContentTypeImpl? element:new ContentTypeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContentTypeImpl>("contentTypes", contentTypesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
            writer.writeObjectValue<DriveImpl>("drive", (!this.drive || this.drive instanceof DriveImpl? this.drive : new DriveImpl(this.drive)));
        }
        if(this.drives && this.drives.length != 0){        const drivesArrValue: DriveImpl[] = [];
        this.drives?.forEach(element => {
            drivesArrValue.push((element instanceof DriveImpl? element:new DriveImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveImpl>("drives", drivesArrValue);
        }
        if(this.error_escaped){
            writer.writeObjectValue<PublicErrorImpl>("error", (!this.error_escaped || this.error_escaped instanceof PublicErrorImpl? this.error_escaped : new PublicErrorImpl(this.error_escaped)));
        }
        if(this.externalColumns && this.externalColumns.length != 0){        const externalColumnsArrValue: ColumnDefinitionImpl[] = [];
        this.externalColumns?.forEach(element => {
            externalColumnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("externalColumns", externalColumnsArrValue);
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: BaseItemImpl[] = [];
        this.items?.forEach(element => {
            itemsArrValue.push((element instanceof BaseItemImpl? element:new BaseItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BaseItemImpl>("items", itemsArrValue);
        }
        if(this.lists && this.lists.length != 0){        const listsArrValue: ListImpl[] = [];
        this.lists?.forEach(element => {
            listsArrValue.push((element instanceof ListImpl? element:new ListImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ListImpl>("lists", listsArrValue);
        }
        if(this.onenote){
            writer.writeObjectValue<OnenoteImpl>("onenote", (!this.onenote || this.onenote instanceof OnenoteImpl? this.onenote : new OnenoteImpl(this.onenote)));
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: RichLongRunningOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof RichLongRunningOperationImpl? element:new RichLongRunningOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RichLongRunningOperationImpl>("operations", operationsArrValue);
        }
        if(this.permissions && this.permissions.length != 0){        const permissionsArrValue: PermissionImpl[] = [];
        this.permissions?.forEach(element => {
            permissionsArrValue.push((element instanceof PermissionImpl? element:new PermissionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PermissionImpl>("permissions", permissionsArrValue);
        }
        if(this.root){
            writer.writeObjectValue<RootImpl>("root", (!this.root || this.root instanceof RootImpl? this.root : new RootImpl(this.root)));
        }
        if(this.sharepointIds){
            writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", (!this.sharepointIds || this.sharepointIds instanceof SharepointIdsImpl? this.sharepointIds : new SharepointIdsImpl(this.sharepointIds)));
        }
        if(this.siteCollection){
            writer.writeObjectValue<SiteCollectionImpl>("siteCollection", (!this.siteCollection || this.siteCollection instanceof SiteCollectionImpl? this.siteCollection : new SiteCollectionImpl(this.siteCollection)));
        }
        if(this.sites && this.sites.length != 0){        const sitesArrValue: SiteImpl[] = [];
        this.sites?.forEach(element => {
            sitesArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SiteImpl>("sites", sitesArrValue);
        }
        if(this.termStore){
            writer.writeObjectValue<StoreImpl>("termStore", (!this.termStore || this.termStore instanceof StoreImpl? this.termStore : new StoreImpl(this.termStore)));
        }
        if(this.termStores && this.termStores.length != 0){        const termStoresArrValue: StoreImpl[] = [];
        this.termStores?.forEach(element => {
            termStoresArrValue.push((element instanceof StoreImpl? element:new StoreImpl(element)));
        });
            writer.writeCollectionOfObjectValues<StoreImpl>("termStores", termStoresArrValue);
        }
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a SharepointIdsInterface
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        if(value) {
            this._sharepointIds = value instanceof SharepointIdsImpl? value : new SharepointIdsImpl(value);
        }
    };
    /**
     * Gets the siteCollection property value. Provides details about the site's site collection. Available only on the root site. Read-only.
     * @returns a SiteCollectionInterface
     */
    public get siteCollection() {
        return this._siteCollection;
    };
    /**
     * Sets the siteCollection property value. Provides details about the site's site collection. Available only on the root site. Read-only.
     * @param value Value to set for the siteCollection property.
     */
    public set siteCollection(value: SiteCollection | undefined) {
        if(value) {
            this._siteCollection = value instanceof SiteCollectionImpl? value : new SiteCollectionImpl(value);
        }
    };
    /**
     * Gets the sites property value. The collection of the sub-sites under this site.
     * @returns a SiteInterface
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Sets the sites property value. The collection of the sub-sites under this site.
     * @param value Value to set for the sites property.
     */
    public set sites(value: Site[] | undefined) {
        if(value) {
            const sitesArrValue: SiteImpl[] = [];
            this.sites?.forEach(element => {
                sitesArrValue.push((element instanceof SiteImpl? element:new SiteImpl(element)));
            });
            this._sites = sitesArrValue;
        }
    };
    /**
     * Gets the termStore property value. The termStore under this site.
     * @returns a StoreInterface
     */
    public get termStore() {
        return this._termStore;
    };
    /**
     * Sets the termStore property value. The termStore under this site.
     * @param value Value to set for the termStore property.
     */
    public set termStore(value: Store | undefined) {
        if(value) {
            this._termStore = value instanceof StoreImpl? value : new StoreImpl(value);
        }
    };
    /**
     * Gets the termStores property value. The collection of termStores under this site.
     * @returns a StoreInterface
     */
    public get termStores() {
        return this._termStores;
    };
    /**
     * Sets the termStores property value. The collection of termStores under this site.
     * @param value Value to set for the termStores property.
     */
    public set termStores(value: Store[] | undefined) {
        if(value) {
            const termStoresArrValue: StoreImpl[] = [];
            this.termStores?.forEach(element => {
                termStoresArrValue.push((element instanceof StoreImpl? element:new StoreImpl(element)));
            });
            this._termStores = termStoresArrValue;
        }
    };
}
