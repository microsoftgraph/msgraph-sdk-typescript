import {BaseItem} from './baseItem';
import {ColumnDefinition} from './columnDefinition';
import {ContentType} from './contentType';
import {Drive} from './drive';
import {ListInfo} from './listInfo';
import {ListItem} from './listItem';
import {SharepointIds} from './sharepointIds';
import {Subscription} from './subscription';
import {SystemFacet} from './systemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class List extends BaseItem implements Parsable {
    /** The collection of field definitions for this list.  */
    private _columns?: ColumnDefinition[] | undefined;
    /** The collection of content types present in this list.  */
    private _contentTypes?: ContentType[] | undefined;
    /** The displayable title of the list.  */
    private _displayName?: string | undefined;
    /** Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].  */
    private _drive?: Drive | undefined;
    /** All items contained in the list.  */
    private _items?: ListItem[] | undefined;
    /** Provides additional details about the list.  */
    private _list?: ListInfo | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only.  */
    private _sharepointIds?: SharepointIds | undefined;
    /** The set of subscriptions on the list.  */
    private _subscriptions?: Subscription[] | undefined;
    /** If present, indicates that this is a system-managed list. Read-only.  */
    private _system?: SystemFacet | undefined;
    /**
     * Instantiates a new list and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the columns property value. The collection of field definitions for this list.
     * @returns a columnDefinition
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Gets the contentTypes property value. The collection of content types present in this list.
     * @returns a contentType
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Gets the displayName property value. The displayable title of the list.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
     * @returns a drive
     */
    public get drive() {
        return this._drive;
    };
    /**
     * Gets the items property value. All items contained in the list.
     * @returns a listItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Gets the list property value. Provides additional details about the list.
     * @returns a listInfo
     */
    public get list() {
        return this._list;
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a sharepointIds
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Gets the subscriptions property value. The set of subscriptions on the list.
     * @returns a subscription
     */
    public get subscriptions() {
        return this._subscriptions;
    };
    /**
     * Gets the system property value. If present, indicates that this is a system-managed list. Read-only.
     * @returns a systemFacet
     */
    public get system() {
        return this._system;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["columns", (o, n) => { (o as unknown as List).columns = n.getCollectionOfObjectValues<ColumnDefinition>(ColumnDefinition); }],
            ["contentTypes", (o, n) => { (o as unknown as List).contentTypes = n.getCollectionOfObjectValues<ContentType>(ContentType); }],
            ["displayName", (o, n) => { (o as unknown as List).displayName = n.getStringValue(); }],
            ["drive", (o, n) => { (o as unknown as List).drive = n.getObjectValue<Drive>(Drive); }],
            ["items", (o, n) => { (o as unknown as List).items = n.getCollectionOfObjectValues<ListItem>(ListItem); }],
            ["list", (o, n) => { (o as unknown as List).list = n.getObjectValue<ListInfo>(ListInfo); }],
            ["sharepointIds", (o, n) => { (o as unknown as List).sharepointIds = n.getObjectValue<SharepointIds>(SharepointIds); }],
            ["subscriptions", (o, n) => { (o as unknown as List).subscriptions = n.getCollectionOfObjectValues<Subscription>(Subscription); }],
            ["system", (o, n) => { (o as unknown as List).system = n.getObjectValue<SystemFacet>(SystemFacet); }],
        ]);
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
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeCollectionOfObjectValues<Subscription>("subscriptions", this.subscriptions);
        writer.writeObjectValue<SystemFacet>("system", this.system);
    };
    /**
     * Sets the columns property value. The collection of field definitions for this list.
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        this._columns = value;
    };
    /**
     * Sets the contentTypes property value. The collection of content types present in this list.
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: ContentType[] | undefined) {
        this._contentTypes = value;
    };
    /**
     * Sets the displayName property value. The displayable title of the list.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the drive property value. Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
     * @param value Value to set for the drive property.
     */
    public set drive(value: Drive | undefined) {
        this._drive = value;
    };
    /**
     * Sets the items property value. All items contained in the list.
     * @param value Value to set for the items property.
     */
    public set items(value: ListItem[] | undefined) {
        this._items = value;
    };
    /**
     * Sets the list property value. Provides additional details about the list.
     * @param value Value to set for the list property.
     */
    public set list(value: ListInfo | undefined) {
        this._list = value;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        this._sharepointIds = value;
    };
    /**
     * Sets the subscriptions property value. The set of subscriptions on the list.
     * @param value Value to set for the subscriptions property.
     */
    public set subscriptions(value: Subscription[] | undefined) {
        this._subscriptions = value;
    };
    /**
     * Sets the system property value. If present, indicates that this is a system-managed list. Read-only.
     * @param value Value to set for the system property.
     */
    public set system(value: SystemFacet | undefined) {
        this._system = value;
    };
}
