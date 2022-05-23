import {createServiceUpdateMessageFromDiscriminatorValue} from './createServiceUpdateMessageFromDiscriminatorValue';
import {ServiceUpdateMessageImpl} from './index';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {ServiceUpdateMessageCollectionResponse} from './serviceUpdateMessageCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUpdateMessageCollectionResponseImpl implements AdditionalDataHolder, Parsable, ServiceUpdateMessageCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ServiceUpdateMessage[] | undefined;
    /**
     * Instantiates a new ServiceUpdateMessageCollectionResponse and sets the default values.
     * @param serviceUpdateMessageCollectionResponseParameterValue 
     */
    public constructor(serviceUpdateMessageCollectionResponseParameterValue?: ServiceUpdateMessageCollectionResponse | undefined) {
        this.additionalData = serviceUpdateMessageCollectionResponseParameterValue?.additionalData ? serviceUpdateMessageCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = serviceUpdateMessageCollectionResponseParameterValue?.nextLink ;
        this.value = serviceUpdateMessageCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ServiceUpdateMessageImpl>(createServiceUpdateMessageFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ServiceUpdateMessageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ServiceUpdateMessageImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceUpdateMessageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
