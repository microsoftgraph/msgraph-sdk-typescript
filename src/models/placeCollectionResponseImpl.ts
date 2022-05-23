import {createPlaceFromDiscriminatorValue} from './createPlaceFromDiscriminatorValue';
import {PlaceImpl} from './index';
import {Place} from './place';
import {PlaceCollectionResponse} from './placeCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlaceCollectionResponseImpl implements AdditionalDataHolder, Parsable, PlaceCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Place[] | undefined;
    /**
     * Instantiates a new PlaceCollectionResponse and sets the default values.
     * @param placeCollectionResponseParameterValue 
     */
    public constructor(placeCollectionResponseParameterValue?: PlaceCollectionResponse | undefined) {
        this.additionalData = placeCollectionResponseParameterValue?.additionalData ? placeCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = placeCollectionResponseParameterValue?.nextLink ;
        this.value = placeCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PlaceImpl>(createPlaceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PlaceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PlaceImpl(element));});
        writer.writeCollectionOfObjectValues<PlaceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
