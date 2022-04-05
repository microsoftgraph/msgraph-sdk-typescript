import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharepointIds implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The unique identifier (guid) for the item's list in SharePoint.  */
    private _listId?: string | undefined;
    /** An integer identifier for the item within the containing list.  */
    private _listItemId?: string | undefined;
    /** The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site.  */
    private _listItemUniqueId?: string | undefined;
    /** The unique identifier (guid) for the item's site collection (SPSite).  */
    private _siteId?: string | undefined;
    /** The SharePoint URL for the site that contains the item.  */
    private _siteUrl?: string | undefined;
    /** The unique identifier (guid) for the tenancy.  */
    private _tenantId?: string | undefined;
    /** The unique identifier (guid) for the item's site (SPWeb).  */
    private _webId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new sharepointIds and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "listId": (o, n) => { (o as unknown as SharepointIds).listId = n.getStringValue(); },
            "listItemId": (o, n) => { (o as unknown as SharepointIds).listItemId = n.getStringValue(); },
            "listItemUniqueId": (o, n) => { (o as unknown as SharepointIds).listItemUniqueId = n.getStringValue(); },
            "siteId": (o, n) => { (o as unknown as SharepointIds).siteId = n.getStringValue(); },
            "siteUrl": (o, n) => { (o as unknown as SharepointIds).siteUrl = n.getStringValue(); },
            "tenantId": (o, n) => { (o as unknown as SharepointIds).tenantId = n.getStringValue(); },
            "webId": (o, n) => { (o as unknown as SharepointIds).webId = n.getStringValue(); },
        };
    };
    /**
     * Gets the listId property value. The unique identifier (guid) for the item's list in SharePoint.
     * @returns a string
     */
    public get listId() {
        return this._listId;
    };
    /**
     * Sets the listId property value. The unique identifier (guid) for the item's list in SharePoint.
     * @param value Value to set for the listId property.
     */
    public set listId(value: string | undefined) {
        this._listId = value;
    };
    /**
     * Gets the listItemId property value. An integer identifier for the item within the containing list.
     * @returns a string
     */
    public get listItemId() {
        return this._listItemId;
    };
    /**
     * Sets the listItemId property value. An integer identifier for the item within the containing list.
     * @param value Value to set for the listItemId property.
     */
    public set listItemId(value: string | undefined) {
        this._listItemId = value;
    };
    /**
     * Gets the listItemUniqueId property value. The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site.
     * @returns a string
     */
    public get listItemUniqueId() {
        return this._listItemUniqueId;
    };
    /**
     * Sets the listItemUniqueId property value. The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site.
     * @param value Value to set for the listItemUniqueId property.
     */
    public set listItemUniqueId(value: string | undefined) {
        this._listItemUniqueId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("listId", this.listId);
        writer.writeStringValue("listItemId", this.listItemId);
        writer.writeStringValue("listItemUniqueId", this.listItemUniqueId);
        writer.writeStringValue("siteId", this.siteId);
        writer.writeStringValue("siteUrl", this.siteUrl);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeStringValue("webId", this.webId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the siteId property value. The unique identifier (guid) for the item's site collection (SPSite).
     * @returns a string
     */
    public get siteId() {
        return this._siteId;
    };
    /**
     * Sets the siteId property value. The unique identifier (guid) for the item's site collection (SPSite).
     * @param value Value to set for the siteId property.
     */
    public set siteId(value: string | undefined) {
        this._siteId = value;
    };
    /**
     * Gets the siteUrl property value. The SharePoint URL for the site that contains the item.
     * @returns a string
     */
    public get siteUrl() {
        return this._siteUrl;
    };
    /**
     * Sets the siteUrl property value. The SharePoint URL for the site that contains the item.
     * @param value Value to set for the siteUrl property.
     */
    public set siteUrl(value: string | undefined) {
        this._siteUrl = value;
    };
    /**
     * Gets the tenantId property value. The unique identifier (guid) for the tenancy.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The unique identifier (guid) for the tenancy.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the webId property value. The unique identifier (guid) for the item's site (SPWeb).
     * @returns a string
     */
    public get webId() {
        return this._webId;
    };
    /**
     * Sets the webId property value. The unique identifier (guid) for the item's site (SPWeb).
     * @param value Value to set for the webId property.
     */
    public set webId(value: string | undefined) {
        this._webId = value;
    };
}
