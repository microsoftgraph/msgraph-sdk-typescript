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
export class SiteImpl extends BaseItemImpl implements Parsable, Site {
    /** Analytics about the view activities that took place in this site. */
    public analytics?: ItemAnalytics | undefined;
    /** The collection of column definitions reusable across lists under this site. */
    public columns?: ColumnDefinition[] | undefined;
    /** The collection of content types defined for this site. */
    public contentTypes?: ContentType[] | undefined;
    /** The full title for the site. Read-only. */
    public displayName?: string | undefined;
    /** The default drive (document library) for this site. */
    public drive?: Drive | undefined;
    /** The collection of drives (document libraries) under this site. */
    public drives?: Drive[] | undefined;
    /** The error property */
    public error_escaped?: PublicError | undefined;
    /** The collection of column definitions available in the site that are referenced from the sites in the parent hierarchy of the current site. */
    public externalColumns?: ColumnDefinition[] | undefined;
    /** Used to address any item contained in this site. This collection cannot be enumerated. */
    public items?: BaseItem[] | undefined;
    /** The collection of lists under this site. */
    public lists?: List[] | undefined;
    /** Calls the OneNote service for notebook related operations. */
    public onenote?: Onenote | undefined;
    /** The collection of long running operations for the site. */
    public operations?: RichLongRunningOperation[] | undefined;
    /** The permissions associated with the site. Nullable. */
    public permissions?: Permission[] | undefined;
    /** If present, indicates that this is the root site in the site collection. Read-only. */
    public root?: Root | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    public sharepointIds?: SharepointIds | undefined;
    /** Provides details about the site's site collection. Available only on the root site. Read-only. */
    public siteCollection?: SiteCollection | undefined;
    /** The collection of the sub-sites under this site. */
    public sites?: Site[] | undefined;
    /** The termStore under this site. */
    public termStore?: Store | undefined;
    /** The collection of termStores under this site. */
    public termStores?: Store[] | undefined;
    /**
     * Instantiates a new site and sets the default values.
     * @param siteParameterValue 
     */
    public constructor(siteParameterValue?: Site | undefined) {
        super();
        this.analytics = siteParameterValue?.analytics ;
        this.columns = siteParameterValue?.columns ;
        this.contentTypes = siteParameterValue?.contentTypes ;
        this.displayName = siteParameterValue?.displayName ;
        this.drive = siteParameterValue?.drive ;
        this.drives = siteParameterValue?.drives ;
        this.error_escaped = siteParameterValue?.error_escaped ;
        this.externalColumns = siteParameterValue?.externalColumns ;
        this.items = siteParameterValue?.items ;
        this.lists = siteParameterValue?.lists ;
        this.onenote = siteParameterValue?.onenote ;
        this.operations = siteParameterValue?.operations ;
        this.permissions = siteParameterValue?.permissions ;
        this.root = siteParameterValue?.root ;
        this.sharepointIds = siteParameterValue?.sharepointIds ;
        this.siteCollection = siteParameterValue?.siteCollection ;
        this.sites = siteParameterValue?.sites ;
        this.termStore = siteParameterValue?.termStore ;
        this.termStores = siteParameterValue?.termStores ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.analytics){
        writer.writeObjectValue<ItemAnalyticsImpl>("analytics", new ItemAnalyticsImpl(this.analytics));
        }
        if(this.columns && this.columns.length != 0){        const columnsArrValue: ColumnDefinitionImpl[] = []; this.columns?.forEach(element => {columnsArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columns", columnsArrValue);
        }
        if(this.contentTypes && this.contentTypes.length != 0){        const contentTypesArrValue: ContentTypeImpl[] = []; this.contentTypes?.forEach(element => {contentTypesArrValue.push(new ContentTypeImpl(element));});
        writer.writeCollectionOfObjectValues<ContentTypeImpl>("contentTypes", contentTypesArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
        writer.writeObjectValue<DriveImpl>("drive", new DriveImpl(this.drive));
        }
        if(this.drives && this.drives.length != 0){        const drivesArrValue: DriveImpl[] = []; this.drives?.forEach(element => {drivesArrValue.push(new DriveImpl(element));});
        writer.writeCollectionOfObjectValues<DriveImpl>("drives", drivesArrValue);
        }
        if(this.error_escaped){
        writer.writeObjectValue<PublicErrorImpl>("error", new PublicErrorImpl(this.error_escaped));
        }
        if(this.externalColumns && this.externalColumns.length != 0){        const externalColumnsArrValue: ColumnDefinitionImpl[] = []; this.externalColumns?.forEach(element => {externalColumnsArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("externalColumns", externalColumnsArrValue);
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: BaseItemImpl[] = []; this.items?.forEach(element => {itemsArrValue.push(new BaseItemImpl(element));});
        writer.writeCollectionOfObjectValues<BaseItemImpl>("items", itemsArrValue);
        }
        if(this.lists && this.lists.length != 0){        const listsArrValue: ListImpl[] = []; this.lists?.forEach(element => {listsArrValue.push(new ListImpl(element));});
        writer.writeCollectionOfObjectValues<ListImpl>("lists", listsArrValue);
        }
        if(this.onenote){
        writer.writeObjectValue<OnenoteImpl>("onenote", new OnenoteImpl(this.onenote));
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: RichLongRunningOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new RichLongRunningOperationImpl(element));});
        writer.writeCollectionOfObjectValues<RichLongRunningOperationImpl>("operations", operationsArrValue);
        }
        if(this.permissions && this.permissions.length != 0){        const permissionsArrValue: PermissionImpl[] = []; this.permissions?.forEach(element => {permissionsArrValue.push(new PermissionImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionImpl>("permissions", permissionsArrValue);
        }
        if(this.root){
        writer.writeObjectValue<RootImpl>("root", new RootImpl(this.root));
        }
        if(this.sharepointIds){
        writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", new SharepointIdsImpl(this.sharepointIds));
        }
        if(this.siteCollection){
        writer.writeObjectValue<SiteCollectionImpl>("siteCollection", new SiteCollectionImpl(this.siteCollection));
        }
        if(this.sites && this.sites.length != 0){        const sitesArrValue: SiteImpl[] = []; this.sites?.forEach(element => {sitesArrValue.push(new SiteImpl(element));});
        writer.writeCollectionOfObjectValues<SiteImpl>("sites", sitesArrValue);
        }
        if(this.termStore){
        writer.writeObjectValue<StoreImpl>("termStore", new StoreImpl(this.termStore));
        }
        if(this.termStores && this.termStores.length != 0){        const termStoresArrValue: StoreImpl[] = []; this.termStores?.forEach(element => {termStoresArrValue.push(new StoreImpl(element));});
        writer.writeCollectionOfObjectValues<StoreImpl>("termStores", termStoresArrValue);
        }
    };
}
