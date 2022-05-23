import {ResourceReference} from './resourceReference';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceReferenceImpl implements AdditionalDataHolder, Parsable, ResourceReference {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The item's unique identifier. */
    public id?: string | undefined;
    /** A string value that can be used to classify the item, such as 'microsoft.graph.driveItem' */
    public type?: string | undefined;
    /** A URL leading to the referenced item. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new resourceReference and sets the default values.
     * @param resourceReferenceParameterValue 
     */
    public constructor(resourceReferenceParameterValue?: ResourceReference | undefined) {
        this.additionalData = resourceReferenceParameterValue?.additionalData ? resourceReferenceParameterValue?.additionalData! : {}
        this.id = resourceReferenceParameterValue?.id ;
        this.type = resourceReferenceParameterValue?.type ;
        this.webUrl = resourceReferenceParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
