import {createOfferShiftRequestFromDiscriminatorValue} from './createOfferShiftRequestFromDiscriminatorValue';
import {OfferShiftRequestImpl} from './index';
import {OfferShiftRequest} from './offerShiftRequest';
import {OfferShiftRequestCollectionResponse} from './offerShiftRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OfferShiftRequestCollectionResponseImpl implements AdditionalDataHolder, OfferShiftRequestCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OfferShiftRequest[] | undefined;
    /**
     * Instantiates a new OfferShiftRequestCollectionResponse and sets the default values.
     * @param offerShiftRequestCollectionResponseParameterValue 
     */
    public constructor(offerShiftRequestCollectionResponseParameterValue?: OfferShiftRequestCollectionResponse | undefined) {
        this.additionalData = offerShiftRequestCollectionResponseParameterValue?.additionalData ? offerShiftRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = offerShiftRequestCollectionResponseParameterValue?.nextLink ;
        this.value = offerShiftRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OfferShiftRequestImpl>(createOfferShiftRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OfferShiftRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OfferShiftRequestImpl(element));});
        writer.writeCollectionOfObjectValues<OfferShiftRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
