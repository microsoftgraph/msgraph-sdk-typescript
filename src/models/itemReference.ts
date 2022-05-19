import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {SharepointIds} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemReference implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Unique identifier of the drive instance that contains the item. Read-only. */
    private _driveId?: string | undefined;
    /** Identifies the type of drive. See [drive][] resource for values. */
    private _driveType?: string | undefined;
    /** Unique identifier of the item in the drive. Read-only. */
    private _id?: string | undefined;
    /** The name of the item being referenced. Read-only. */
    private _name?: string | undefined;
    /** Path that can be used to navigate to the item. Read-only. */
    private _path?: string | undefined;
    /** A unique identifier for a shared resource that can be accessed via the [Shares][] API. */
    private _shareId?: string | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    private _sharepointIds?: SharepointIds | undefined;
    /** For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated. */
    private _siteId?: string | undefined;
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
     * Instantiates a new itemReference and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the driveId property value. Unique identifier of the drive instance that contains the item. Read-only.
     * @returns a string
     */
    public get driveId() {
        return this._driveId;
    };
    /**
     * Sets the driveId property value. Unique identifier of the drive instance that contains the item. Read-only.
     * @param value Value to set for the driveId property.
     */
    public set driveId(value: string | undefined) {
        this._driveId = value;
    };
    /**
     * Gets the driveType property value. Identifies the type of drive. See [drive][] resource for values.
     * @returns a string
     */
    public get driveType() {
        return this._driveType;
    };
    /**
     * Sets the driveType property value. Identifies the type of drive. See [drive][] resource for values.
     * @param value Value to set for the driveType property.
     */
    public set driveType(value: string | undefined) {
        this._driveType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "driveId": n => { this.driveId = n.getStringValue(); },
            "driveType": n => { this.driveType = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "path": n => { this.path = n.getStringValue(); },
            "shareId": n => { this.shareId = n.getStringValue(); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
            "siteId": n => { this.siteId = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Unique identifier of the item in the drive. Read-only.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique identifier of the item in the drive. Read-only.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the name property value. The name of the item being referenced. Read-only.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the item being referenced. Read-only.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the path property value. Path that can be used to navigate to the item. Read-only.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. Path that can be used to navigate to the item. Read-only.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("driveId", this.driveId);
        writer.writeStringValue("driveType", this.driveType);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("path", this.path);
        writer.writeStringValue("shareId", this.shareId);
        writer.writeObjectValue<SharepointIds>("sharepointIds", this.sharepointIds);
        writer.writeStringValue("siteId", this.siteId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the shareId property value. A unique identifier for a shared resource that can be accessed via the [Shares][] API.
     * @returns a string
     */
    public get shareId() {
        return this._shareId;
    };
    /**
     * Sets the shareId property value. A unique identifier for a shared resource that can be accessed via the [Shares][] API.
     * @param value Value to set for the shareId property.
     */
    public set shareId(value: string | undefined) {
        this._shareId = value;
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
     * Gets the siteId property value. For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated.
     * @returns a string
     */
    public get siteId() {
        return this._siteId;
    };
    /**
     * Sets the siteId property value. For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated.
     * @param value Value to set for the siteId property.
     */
    public set siteId(value: string | undefined) {
        this._siteId = value;
    };
}
