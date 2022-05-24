import {createServiceHealthFromDiscriminatorValue} from './createServiceHealthFromDiscriminatorValue';
import {ServiceHealthImpl} from './index';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthCollectionResponse} from './serviceHealthCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthCollectionResponseImpl implements AdditionalDataHolder, Parsable, ServiceHealthCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ServiceHealth[] | undefined;
    /**
     * Instantiates a new ServiceHealthCollectionResponse and sets the default values.
     * @param serviceHealthCollectionResponseParameterValue 
     */
    public constructor(serviceHealthCollectionResponseParameterValue?: ServiceHealthCollectionResponse | undefined) {
        this.additionalData = serviceHealthCollectionResponseParameterValue?.additionalData ? serviceHealthCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = serviceHealthCollectionResponseParameterValue?.nextLink ;
        this.value = serviceHealthCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ServiceHealthImpl>(createServiceHealthFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ServiceHealthImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ServiceHealthImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceHealthImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
