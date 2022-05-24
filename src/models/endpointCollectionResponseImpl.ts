import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {Endpoint} from './endpoint';
import {EndpointCollectionResponse} from './endpointCollectionResponse';
import {EndpointImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EndpointCollectionResponseImpl implements AdditionalDataHolder, EndpointCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Endpoint[] | undefined;
    /**
     * Instantiates a new EndpointCollectionResponse and sets the default values.
     * @param endpointCollectionResponseParameterValue 
     */
    public constructor(endpointCollectionResponseParameterValue?: EndpointCollectionResponse | undefined) {
        this.additionalData = endpointCollectionResponseParameterValue?.additionalData ? endpointCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = endpointCollectionResponseParameterValue?.nextLink ;
        this.value = endpointCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EndpointImpl>(createEndpointFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EndpointImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EndpointImpl(element));});
        writer.writeCollectionOfObjectValues<EndpointImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
