import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {PostImpl} from './index';
import {Post} from './post';
import {PostCollectionResponse} from './postCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PostCollectionResponseImpl implements AdditionalDataHolder, Parsable, PostCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Post[] | undefined;
    /**
     * Instantiates a new PostCollectionResponse and sets the default values.
     * @param postCollectionResponseParameterValue 
     */
    public constructor(postCollectionResponseParameterValue?: PostCollectionResponse | undefined) {
        this.additionalData = postCollectionResponseParameterValue?.additionalData ? postCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = postCollectionResponseParameterValue?.nextLink ;
        this.value = postCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PostImpl>(createPostFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: PostImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PostImpl(element));});
        writer.writeCollectionOfObjectValues<PostImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
