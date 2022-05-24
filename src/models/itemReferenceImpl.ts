import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {SharepointIdsImpl} from './index';
import {ItemReference} from './itemReference';
import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemReferenceImpl implements AdditionalDataHolder, ItemReference, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier of the drive instance that contains the item. Read-only. */
    public driveId?: string | undefined;
    /** Identifies the type of drive. See [drive][] resource for values. */
    public driveType?: string | undefined;
    /** Unique identifier of the item in the drive. Read-only. */
    public id?: string | undefined;
    /** The name of the item being referenced. Read-only. */
    public name?: string | undefined;
    /** Path that can be used to navigate to the item. Read-only. */
    public path?: string | undefined;
    /** A unique identifier for a shared resource that can be accessed via the [Shares][] API. */
    public shareId?: string | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    public sharepointIds?: SharepointIds | undefined;
    /** For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated. */
    public siteId?: string | undefined;
    /**
     * Instantiates a new itemReference and sets the default values.
     * @param itemReferenceParameterValue 
     */
    public constructor(itemReferenceParameterValue?: ItemReference | undefined) {
        this.additionalData = itemReferenceParameterValue?.additionalData ? itemReferenceParameterValue?.additionalData! : {}
        this.driveId = itemReferenceParameterValue?.driveId ;
        this.driveType = itemReferenceParameterValue?.driveType ;
        this.id = itemReferenceParameterValue?.id ;
        this.name = itemReferenceParameterValue?.name ;
        this.path = itemReferenceParameterValue?.path ;
        this.shareId = itemReferenceParameterValue?.shareId ;
        this.sharepointIds = itemReferenceParameterValue?.sharepointIds ;
        this.siteId = itemReferenceParameterValue?.siteId ;
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
        writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", new SharepointIdsImpl(this.sharepointIds));
        }
        if(this.siteId){
        writer.writeStringValue("siteId", this.siteId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
