import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {SharepointIdsImpl} from './index';
import {ItemReference} from './itemReference';
import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemReferenceImpl implements ItemReference {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new itemReference and sets the default values.
     * @param itemReferenceParameterValue 
     */
    public constructor(itemReferenceParameterValue?: ItemReference | undefined) {
        this._additionalData = itemReferenceParameterValue?.additionalData ? itemReferenceParameterValue?.additionalData! : {};
        this._driveId = itemReferenceParameterValue?.driveId;
        this._driveType = itemReferenceParameterValue?.driveType;
        this._id = itemReferenceParameterValue?.id;
        this._name = itemReferenceParameterValue?.name;
        this._path = itemReferenceParameterValue?.path;
        this._shareId = itemReferenceParameterValue?.shareId;
        this._sharepointIds = itemReferenceParameterValue?.sharepointIds;
        this._siteId = itemReferenceParameterValue?.siteId;
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
        if(value) {
            this._driveId = value;
        }
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
        if(value) {
            this._driveType = value;
        }
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
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
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
        if(value) {
            this._id = value;
        }
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
        if(value) {
            this._name = value;
        }
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
        if(value) {
            this._path = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.driveId){
            writer.writeStringValue("driveId", this.driveId);
        }
        if(this.driveType){
            writer.writeStringValue("driveType", this.driveType);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.path){
            writer.writeStringValue("path", this.path);
        }
        if(this.shareId){
            writer.writeStringValue("shareId", this.shareId);
        }
        if(this.sharepointIds){
            writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", (this.sharepointIds instanceof SharepointIdsImpl? this.sharepointIds as SharepointIdsImpl: new SharepointIdsImpl(this.sharepointIds)));
        }
        if(this.siteId){
            writer.writeStringValue("siteId", this.siteId);
        }
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
        if(value) {
            this._shareId = value;
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
            this._sharepointIds = value instanceof SharepointIdsImpl? value as SharepointIdsImpl: new SharepointIdsImpl(value);
        }
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
        if(value) {
            this._siteId = value;
        }
    };
}
