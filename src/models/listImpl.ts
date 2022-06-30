import {ColumnDefinition} from './columnDefinition';
import {ContentType} from './contentType';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createListInfoFromDiscriminatorValue} from './createListInfoFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {Drive} from './drive';
import {BaseItemImpl, ColumnDefinitionImpl, ContentTypeImpl, DriveImpl, ListInfoImpl, ListItemImpl, RichLongRunningOperationImpl, SharepointIdsImpl, SubscriptionImpl, SystemFacetImpl} from './index';
import {List} from './list';
import {ListInfo} from './listInfo';
import {ListItem} from './listItem';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {SharepointIds} from './sharepointIds';
import {Subscription} from './subscription';
import {SystemFacet} from './systemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ListImpl extends BaseItemImpl implements List {
    /** The collection of field definitions for this list. */
    private _columns?: ColumnDefinition[] | undefined;
    /** The collection of content types present in this list. */
    private _contentTypes?: ContentType[] | undefined;
    /** The displayable title of the list. */
    private _displayName?: string | undefined;
    /** Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem]. */
    private _drive?: Drive | undefined;
    /** All items contained in the list. */
    private _items?: ListItem[] | undefined;
    /** Provides additional details about the list. */
    private _list?: ListInfo | undefined;
    /** The collection of long running operations for the list. */
    private _operations?: RichLongRunningOperation[] | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    private _sharepointIds?: SharepointIds | undefined;
    /** The set of subscriptions on the list. */
    private _subscriptions?: Subscription[] | undefined;
    /** If present, indicates that this is a system-managed list. Read-only. */
    private _system?: SystemFacet | undefined;
    /**
     * Gets the columns property value. The collection of field definitions for this list.
     * @returns a ColumnDefinitionInterface
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The collection of field definitions for this list.
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
     * Instantiates a new list and sets the default values.
     * @param listParameterValue 
     */
    public constructor(listParameterValue?: List | undefined) {
        super(listParameterValue);
        this._columns = listParameterValue?.columns;
        this._contentTypes = listParameterValue?.contentTypes;
        this._displayName = listParameterValue?.displayName;
        this._drive = listParameterValue?.drive;
        this._items = listParameterValue?.items;
        this._list = listParameterValue?.list;
        this._operations = listParameterValue?.operations;
        this._sharepointIds = listParameterValue?.sharepointIds;
        this._subscriptions = listParameterValue?.subscriptions;
        this._system = listParameterValue?.system;
    };
    /**
     * Gets the contentTypes property value. The collection of content types present in this list.
     * @returns a ContentTypeInterface
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Sets the contentTypes property value. The collection of content types present in this list.
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
     * Gets the displayName property value. The displayable title of the list.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayable title of the list.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
     * @returns a DriveInterface
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        if(value) {
            this._drive = value instanceof DriveImpl? value : new DriveImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "columns": n => { this.columns = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfObjectValues<ContentTypeImpl>(createContentTypeFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<DriveImpl>(createDriveFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<ListItemImpl>(createListItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<ListInfoImpl>(createListInfoFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<RichLongRunningOperationImpl>(createRichLongRunningOperationFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
            "subscriptions": n => { this.subscriptions = n.getCollectionOfObjectValues<SubscriptionImpl>(createSubscriptionFromDiscriminatorValue); },
            "system": n => { this.system = n.getObjectValue<SystemFacetImpl>(createSystemFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the items property value. All items contained in the list.
     * @returns a ListItemInterface
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. All items contained in the list.
     * @param value Value to set for the items property.
     */
    public set items(value: ListItem[] | undefined) {
        if(value) {
            const itemsArrValue: ListItemImpl[] = [];
            this.items?.forEach(element => {
                itemsArrValue.push((element instanceof ListItemImpl? element:new ListItemImpl(element)));
            });
            this._items = itemsArrValue;
        }
    };
    /**
     * Gets the list property value. Provides additional details about the list.
     * @returns a ListInfoInterface
     */
    public get list() {
        return this._list;
    };
    /**
     * Sets the list property value. Provides additional details about the list.
     * @param value Value to set for the list property.
     */
    public set list(value: ListInfo | undefined) {
        if(value) {
            this._list = value instanceof ListInfoImpl? value : new ListInfoImpl(value);
        }
    };
    /**
     * Gets the operations property value. The collection of long running operations for the list.
     * @returns a RichLongRunningOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The collection of long running operations for the list.
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
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
        if(this.items && this.items.length != 0){        const itemsArrValue: ListItemImpl[] = [];
        this.items?.forEach(element => {
            itemsArrValue.push((element instanceof ListItemImpl? element:new ListItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ListItemImpl>("items", itemsArrValue);
        }
        if(this.list){
            writer.writeObjectValue<ListInfoImpl>("list", (!this.list || this.list instanceof ListInfoImpl? this.list : new ListInfoImpl(this.list)));
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: RichLongRunningOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof RichLongRunningOperationImpl? element:new RichLongRunningOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RichLongRunningOperationImpl>("operations", operationsArrValue);
        }
        if(this.sharepointIds){
            writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", (!this.sharepointIds || this.sharepointIds instanceof SharepointIdsImpl? this.sharepointIds : new SharepointIdsImpl(this.sharepointIds)));
        }
        if(this.subscriptions && this.subscriptions.length != 0){        const subscriptionsArrValue: SubscriptionImpl[] = [];
        this.subscriptions?.forEach(element => {
            subscriptionsArrValue.push((element instanceof SubscriptionImpl? element:new SubscriptionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubscriptionImpl>("subscriptions", subscriptionsArrValue);
        }
        if(this.system){
            writer.writeObjectValue<SystemFacetImpl>("system", (!this.system || this.system instanceof SystemFacetImpl? this.system : new SystemFacetImpl(this.system)));
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
     * Gets the subscriptions property value. The set of subscriptions on the list.
     * @returns a SubscriptionInterface
     */
    public get subscriptions() {
        return this._subscriptions;
    };
    /**
     * Sets the subscriptions property value. The set of subscriptions on the list.
     * @param value Value to set for the subscriptions property.
     */
    public set subscriptions(value: Subscription[] | undefined) {
        if(value) {
            const subscriptionsArrValue: SubscriptionImpl[] = [];
            this.subscriptions?.forEach(element => {
                subscriptionsArrValue.push((element instanceof SubscriptionImpl? element:new SubscriptionImpl(element)));
            });
            this._subscriptions = subscriptionsArrValue;
        }
    };
    /**
     * Gets the system property value. If present, indicates that this is a system-managed list. Read-only.
     * @returns a SystemFacetInterface
     */
    public get system() {
        return this._system;
    };
    /**
     * Sets the system property value. If present, indicates that this is a system-managed list. Read-only.
     * @param value Value to set for the system property.
     */
    public set system(value: SystemFacet | undefined) {
        if(value) {
            this._system = value instanceof SystemFacetImpl? value : new SystemFacetImpl(value);
        }
    };
}
