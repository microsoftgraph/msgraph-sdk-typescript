import {createHomeRealmDiscoveryPolicyFromDiscriminatorValue} from './createHomeRealmDiscoveryPolicyFromDiscriminatorValue';
import {HomeRealmDiscoveryPolicy} from './homeRealmDiscoveryPolicy';
import {HomeRealmDiscoveryPolicyCollectionResponse} from './homeRealmDiscoveryPolicyCollectionResponse';
import {HomeRealmDiscoveryPolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HomeRealmDiscoveryPolicyCollectionResponseImpl implements AdditionalDataHolder, HomeRealmDiscoveryPolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: HomeRealmDiscoveryPolicy[] | undefined;
    /**
     * Instantiates a new HomeRealmDiscoveryPolicyCollectionResponse and sets the default values.
     * @param homeRealmDiscoveryPolicyCollectionResponseParameterValue 
     */
    public constructor(homeRealmDiscoveryPolicyCollectionResponseParameterValue?: HomeRealmDiscoveryPolicyCollectionResponse | undefined) {
        this.additionalData = homeRealmDiscoveryPolicyCollectionResponseParameterValue?.additionalData ? homeRealmDiscoveryPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = homeRealmDiscoveryPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = homeRealmDiscoveryPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>(createHomeRealmDiscoveryPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: HomeRealmDiscoveryPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new HomeRealmDiscoveryPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
