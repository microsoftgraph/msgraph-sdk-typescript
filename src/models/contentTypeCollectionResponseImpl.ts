import {ContentType} from './contentType';
import {ContentTypeCollectionResponse} from './contentTypeCollectionResponse';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {ContentTypeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContentTypeCollectionResponseImpl implements AdditionalDataHolder, ContentTypeCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ContentType[] | undefined;
    /**
     * Instantiates a new ContentTypeCollectionResponse and sets the default values.
     * @param contentTypeCollectionResponseParameterValue 
     */
    public constructor(contentTypeCollectionResponseParameterValue?: ContentTypeCollectionResponse | undefined) {
        this.additionalData = contentTypeCollectionResponseParameterValue?.additionalData ? contentTypeCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = contentTypeCollectionResponseParameterValue?.nextLink ;
        this.value = contentTypeCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ContentTypeImpl>(createContentTypeFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ContentTypeImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ContentTypeImpl(element));});
        writer.writeCollectionOfObjectValues<ContentTypeImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
