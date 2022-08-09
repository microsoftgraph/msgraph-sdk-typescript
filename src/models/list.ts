import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createListInfoFromDiscriminatorValue} from './createListInfoFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {BaseItem, ColumnDefinition, ContentType, Drive, ListInfo, ListItem, RichLongRunningOperation, SharepointIds, Subscription, SystemFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class List extends BaseItem implements Parsable {
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
     * @returns a columnDefinition
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The collection of field definitions for this list.
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        this._columns = value;
    };
    /**
     * Instantiates a new list and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.list";
    };
    /**
     * Gets the contentTypes property value. The collection of content types present in this list.
     * @returns a contentType
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Sets the contentTypes property value. The collection of content types present in this list.
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: ContentType[] | undefined) {
        this._contentTypes = value;
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
        this._displayName = value;
    };
    /**
     * Gets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
     * @returns a drive
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Sets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        this._drive = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "columns": n => { this.columns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<Drive>(createDriveFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<ListItem>(createListItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<ListInfo>(createListInfoFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<RichLongRunningOperation>(createRichLongRunningOperationFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
            "subscriptions": n => { this.subscriptions = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); },
            "system": n => { this.system = n.getObjectValue<SystemFacet>(createSystemFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the items property value. All items contained in the list.
     * @returns a listItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. All items contained in the list.
     * @param value Value to set for the items property.
     */
    public set items(value: ListItem[] | undefined) {
        this._items = value;
    };
    /**
     * Gets the list property value. Provides additional details about the list.
     * @returns a listInfo
     */
    public get list() {
        return this._list;
    };
    /**
     * Sets the list property value. Provides additional details about the list.
     * @param value Value to set for the list property.
     */
    public set list(value: ListInfo | undefined) {
        this._list = value;
    };
    /**
     * Gets the operations property value. The collection of long running operations for the list.
     * @returns a richLongRunningOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The collection of long running operations for the list.
     * @param value Value to set for the operations property.
     */
    public set operations(value: RichLongRunningOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", this.columns);
        writer.writeCollectionOfObjectValues<ContentType>("contentTypes", this.contentTypes);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<Drive>("drive", this.drive);
        writer.writeCollectionOfObjectValues<ListItem>("items", this.items);
        writer.writeObjectValue<ListInfo>("list", this.list);
        writer.writeCollectionOfObjectValues<RichLongRunningOperation>("operations", this.operations);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeCollectionOfObjectValues<Subscription>("subscriptions", this.subscriptions);
        writer.writeObjectValue<SystemFacet>("system", this.system);
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Gets the subscriptions property value. The set of subscriptions on the list.
     * @returns a subscription
     */
    public get subscriptions() {
        return this._subscriptions;
    };
    /**
     * Sets the subscriptions property value. The set of subscriptions on the list.
     * @param value Value to set for the subscriptions property.
     */
    public set subscriptions(value: Subscription[] | undefined) {
        this._subscriptions = value;
    };
    /**
     * Gets the system property value. If present, indicates that this is a system-managed list. Read-only.
     * @returns a systemFacet
     */
    public get system() {
        return this._system;
    };
    /**
     * Sets the system property value. If present, indicates that this is a system-managed list. Read-only.
     * @param value Value to set for the system property.
     */
    public set system(value: SystemFacet | undefined) {
        this._system = value;
    };
}
