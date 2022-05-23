import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {SubscriptionImpl} from './index';
import {Subscription} from './subscription';
import {SubscriptionCollectionResponse} from './subscriptionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubscriptionCollectionResponseImpl implements AdditionalDataHolder, Parsable, SubscriptionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Subscription[] | undefined;
    /**
     * Instantiates a new SubscriptionCollectionResponse and sets the default values.
     * @param subscriptionCollectionResponseParameterValue 
     */
    public constructor(subscriptionCollectionResponseParameterValue?: SubscriptionCollectionResponse | undefined) {
        this.additionalData = subscriptionCollectionResponseParameterValue?.additionalData ? subscriptionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = subscriptionCollectionResponseParameterValue?.nextLink ;
        this.value = subscriptionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SubscriptionImpl>(createSubscriptionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SubscriptionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SubscriptionImpl(element));});
        writer.writeCollectionOfObjectValues<SubscriptionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
