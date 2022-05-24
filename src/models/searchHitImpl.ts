import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {Entity} from './entity';
import {EntityImpl} from './index';
import {SearchHit} from './searchHit';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchHitImpl implements AdditionalDataHolder, Parsable, SearchHit {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the content source which the externalItem is part of . */
    public contentSource?: string | undefined;
    /** The internal identifier for the item. */
    public hitId?: string | undefined;
    /** The rank or the order of the result. */
    public rank?: number | undefined;
    /** The resource property */
    public resource?: Entity | undefined;
    /** ID of the result template for rendering the search result. This ID must map to a display layout in the resultTemplates dictionary, included in the searchresponse as well. */
    public resultTemplateId?: string | undefined;
    /** A summary of the result, if a summary is available. */
    public summary?: string | undefined;
    /**
     * Instantiates a new searchHit and sets the default values.
     * @param searchHitParameterValue 
     */
    public constructor(searchHitParameterValue?: SearchHit | undefined) {
        this.additionalData = searchHitParameterValue?.additionalData ? searchHitParameterValue?.additionalData! : {}
        this.contentSource = searchHitParameterValue?.contentSource ;
        this.hitId = searchHitParameterValue?.hitId ;
        this.rank = searchHitParameterValue?.rank ;
        this.resource = searchHitParameterValue?.resource ;
        this.resultTemplateId = searchHitParameterValue?.resultTemplateId ;
        this.summary = searchHitParameterValue?.summary ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentSource": n => { this.contentSource = n.getStringValue(); },
            "hitId": n => { this.hitId = n.getStringValue(); },
            "rank": n => { this.rank = n.getNumberValue(); },
            "resource": n => { this.resource = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resultTemplateId": n => { this.resultTemplateId = n.getStringValue(); },
            "summary": n => { this.summary = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contentSource){
        writer.writeStringValue("contentSource", this.contentSource);
        }
        if(this.hitId){
        writer.writeStringValue("hitId", this.hitId);
        }
        if(this.rank){
        writer.writeNumberValue("rank", this.rank);
        }
        if(this.resource){
        writer.writeObjectValue<EntityImpl>("resource", new EntityImpl(this.resource));
        }
        if(this.resultTemplateId){
        writer.writeStringValue("resultTemplateId", this.resultTemplateId);
        }
        if(this.summary){
        writer.writeStringValue("summary", this.summary);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
