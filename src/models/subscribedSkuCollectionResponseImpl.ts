import {createSubscribedSkuFromDiscriminatorValue} from './createSubscribedSkuFromDiscriminatorValue';
import {SubscribedSkuImpl} from './index';
import {SubscribedSku} from './subscribedSku';
import {SubscribedSkuCollectionResponse} from './subscribedSkuCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubscribedSkuCollectionResponseImpl implements AdditionalDataHolder, Parsable, SubscribedSkuCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SubscribedSku[] | undefined;
    /**
     * Instantiates a new SubscribedSkuCollectionResponse and sets the default values.
     * @param subscribedSkuCollectionResponseParameterValue 
     */
    public constructor(subscribedSkuCollectionResponseParameterValue?: SubscribedSkuCollectionResponse | undefined) {
        this.additionalData = subscribedSkuCollectionResponseParameterValue?.additionalData ? subscribedSkuCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = subscribedSkuCollectionResponseParameterValue?.nextLink ;
        this.value = subscribedSkuCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SubscribedSkuImpl>(createSubscribedSkuFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SubscribedSkuImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SubscribedSkuImpl(element));});
        writer.writeCollectionOfObjectValues<SubscribedSkuImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
