import {ColumnLink} from './columnLink';
import {ContentTypeOrder} from './contentTypeOrder';
import {Entity} from './entity';
import {ItemReference} from './itemReference';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class ContentType extends Entity implements Parsable {
    /** The collection of columns that are required by this content type  */
    private _columnLinks?: ColumnLink[] | undefined;
    /** The descriptive text for the item.  */
    private _description?: string | undefined;
    /** The name of the group this content type belongs to. Helps organize related content types.  */
    private _group?: string | undefined;
    /** Indicates whether the content type is hidden in the list's 'New' menu.  */
    private _hidden?: boolean | undefined;
    /** If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.  */
    private _inheritedFrom?: ItemReference | undefined;
    /** The name of the content type.  */
    private _name?: string | undefined;
    /** Specifies the order in which the content type appears in the selection UI.  */
    private _order?: ContentTypeOrder | undefined;
    /** The unique identifier of the content type.  */
    private _parentId?: string | undefined;
    /** If true, the content type cannot be modified unless this value is first set to false.  */
    private _readOnly?: boolean | undefined;
    /** If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.  */
    private _sealed?: boolean | undefined;
    /**
     * Instantiates a new contentType and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the columnLinks property value. The collection of columns that are required by this content type
     * @returns a columnLink
     */
    public get columnLinks() {
        return this._columnLinks;
    };
    /**
     * Gets the description property value. The descriptive text for the item.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the group property value. The name of the group this content type belongs to. Helps organize related content types.
     * @returns a string
     */
    public get group() {
        return this._group;
    };
    /**
     * Gets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Gets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
     * @returns a itemReference
     */
    public get inheritedFrom() {
        return this._inheritedFrom;
    };
    /**
     * Gets the name property value. The name of the content type.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the order property value. Specifies the order in which the content type appears in the selection UI.
     * @returns a contentTypeOrder
     */
    public get order() {
        return this._order;
    };
    /**
     * Gets the parentId property value. The unique identifier of the content type.
     * @returns a string
     */
    public get parentId() {
        return this._parentId;
    };
    /**
     * Gets the readOnly property value. If true, the content type cannot be modified unless this value is first set to false.
     * @returns a boolean
     */
    public get readOnly() {
        return this._readOnly;
    };
    /**
     * Gets the sealed property value. If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
     * @returns a boolean
     */
    public get sealed() {
        return this._sealed;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["columnLinks", (o, n) => { (o as unknown as ContentType).columnLinks = n.getCollectionOfObjectValues<ColumnLink>(ColumnLink); }],
            ["description", (o, n) => { (o as unknown as ContentType).description = n.getStringValue(); }],
            ["group", (o, n) => { (o as unknown as ContentType).group = n.getStringValue(); }],
            ["hidden", (o, n) => { (o as unknown as ContentType).hidden = n.getBooleanValue(); }],
            ["inheritedFrom", (o, n) => { (o as unknown as ContentType).inheritedFrom = n.getObjectValue<ItemReference>(ItemReference); }],
            ["name", (o, n) => { (o as unknown as ContentType).name = n.getStringValue(); }],
            ["order", (o, n) => { (o as unknown as ContentType).order = n.getObjectValue<ContentTypeOrder>(ContentTypeOrder); }],
            ["parentId", (o, n) => { (o as unknown as ContentType).parentId = n.getStringValue(); }],
            ["readOnly", (o, n) => { (o as unknown as ContentType).readOnly = n.getBooleanValue(); }],
            ["sealed", (o, n) => { (o as unknown as ContentType).sealed = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ColumnLink>("columnLinks", this.columnLinks);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("group", this.group);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue<ItemReference>("inheritedFrom", this.inheritedFrom);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<ContentTypeOrder>("order", this.order);
        writer.writeStringValue("parentId", this.parentId);
        writer.writeBooleanValue("readOnly", this.readOnly);
        writer.writeBooleanValue("sealed", this.sealed);
    };
    /**
     * Sets the columnLinks property value. The collection of columns that are required by this content type
     * @param value Value to set for the columnLinks property.
     */
    public set columnLinks(value: ColumnLink[] | undefined) {
        this._columnLinks = value;
    };
    /**
     * Sets the description property value. The descriptive text for the item.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the group property value. The name of the group this content type belongs to. Helps organize related content types.
     * @param value Value to set for the group property.
     */
    public set group(value: string | undefined) {
        this._group = value;
    };
    /**
     * Sets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Sets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
     * @param value Value to set for the inheritedFrom property.
     */
    public set inheritedFrom(value: ItemReference | undefined) {
        this._inheritedFrom = value;
    };
    /**
     * Sets the name property value. The name of the content type.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the order property value. Specifies the order in which the content type appears in the selection UI.
     * @param value Value to set for the order property.
     */
    public set order(value: ContentTypeOrder | undefined) {
        this._order = value;
    };
    /**
     * Sets the parentId property value. The unique identifier of the content type.
     * @param value Value to set for the parentId property.
     */
    public set parentId(value: string | undefined) {
        this._parentId = value;
    };
    /**
     * Sets the readOnly property value. If true, the content type cannot be modified unless this value is first set to false.
     * @param value Value to set for the readOnly property.
     */
    public set readOnly(value: boolean | undefined) {
        this._readOnly = value;
    };
    /**
     * Sets the sealed property value. If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
     * @param value Value to set for the sealed property.
     */
    public set sealed(value: boolean | undefined) {
        this._sealed = value;
    };
}
