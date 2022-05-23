import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharepointIdsImpl implements AdditionalDataHolder, Parsable, SharepointIds {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The unique identifier (guid) for the item's list in SharePoint. */
    public listId?: string | undefined;
    /** An integer identifier for the item within the containing list. */
    public listItemId?: string | undefined;
    /** The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site. */
    public listItemUniqueId?: string | undefined;
    /** The unique identifier (guid) for the item's site collection (SPSite). */
    public siteId?: string | undefined;
    /** The SharePoint URL for the site that contains the item. */
    public siteUrl?: string | undefined;
    /** The unique identifier (guid) for the tenancy. */
    public tenantId?: string | undefined;
    /** The unique identifier (guid) for the item's site (SPWeb). */
    public webId?: string | undefined;
    /**
     * Instantiates a new sharepointIds and sets the default values.
     * @param sharepointIdsParameterValue 
     */
    public constructor(sharepointIdsParameterValue?: SharepointIds | undefined) {
        this.additionalData = sharepointIdsParameterValue?.additionalData ? sharepointIdsParameterValue?.additionalData! : {}
        this.listId = sharepointIdsParameterValue?.listId ;
        this.listItemId = sharepointIdsParameterValue?.listItemId ;
        this.listItemUniqueId = sharepointIdsParameterValue?.listItemUniqueId ;
        this.siteId = sharepointIdsParameterValue?.siteId ;
        this.siteUrl = sharepointIdsParameterValue?.siteUrl ;
        this.tenantId = sharepointIdsParameterValue?.tenantId ;
        this.webId = sharepointIdsParameterValue?.webId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "listId": n => { this.listId = n.getStringValue(); },
            "listItemId": n => { this.listItemId = n.getStringValue(); },
            "listItemUniqueId": n => { this.listItemUniqueId = n.getStringValue(); },
            "siteId": n => { this.siteId = n.getStringValue(); },
            "siteUrl": n => { this.siteUrl = n.getStringValue(); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "webId": n => { this.webId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.listId){
        writer.writeStringValue("listId", this.listId);
        }
        if(this.listItemId){
        writer.writeStringValue("listItemId", this.listItemId);
        }
        if(this.listItemUniqueId){
        writer.writeStringValue("listItemUniqueId", this.listItemUniqueId);
        }
        if(this.siteId){
        writer.writeStringValue("siteId", this.siteId);
        }
        if(this.siteUrl){
        writer.writeStringValue("siteUrl", this.siteUrl);
        }
        if(this.tenantId){
        writer.writeStringValue("tenantId", this.tenantId);
        }
        if(this.webId){
        writer.writeStringValue("webId", this.webId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
