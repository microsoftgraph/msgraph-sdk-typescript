import {createThumbnailSetFromDiscriminatorValue} from './createThumbnailSetFromDiscriminatorValue';
import {ThumbnailSetImpl} from './index';
import {ThumbnailSet} from './thumbnailSet';
import {ThumbnailSetCollectionResponse} from './thumbnailSetCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThumbnailSetCollectionResponseImpl implements AdditionalDataHolder, Parsable, ThumbnailSetCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ThumbnailSet[] | undefined;
    /**
     * Instantiates a new ThumbnailSetCollectionResponse and sets the default values.
     * @param thumbnailSetCollectionResponseParameterValue 
     */
    public constructor(thumbnailSetCollectionResponseParameterValue?: ThumbnailSetCollectionResponse | undefined) {
        this.additionalData = thumbnailSetCollectionResponseParameterValue?.additionalData ? thumbnailSetCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = thumbnailSetCollectionResponseParameterValue?.nextLink ;
        this.value = thumbnailSetCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ThumbnailSetImpl>(createThumbnailSetFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ThumbnailSetImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ThumbnailSetImpl(element));});
        writer.writeCollectionOfObjectValues<ThumbnailSetImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
