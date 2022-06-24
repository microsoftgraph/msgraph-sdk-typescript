import {createResourceOperationFromDiscriminatorValue} from './createResourceOperationFromDiscriminatorValue';
import {ResourceOperationImpl} from './index';
import {ResourceOperation} from './resourceOperation';
import {ResourceOperationCollectionResponse} from './resourceOperationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceOperationCollectionResponseImpl implements ResourceOperationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ResourceOperation[] | undefined;
    /**
     * Instantiates a new ResourceOperationCollectionResponse and sets the default values.
     * @param resourceOperationCollectionResponseParameterValue 
     */
    public constructor(resourceOperationCollectionResponseParameterValue?: ResourceOperationCollectionResponse | undefined) {
        this.additionalData = resourceOperationCollectionResponseParameterValue?.additionalData ? resourceOperationCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = resourceOperationCollectionResponseParameterValue?.nextLink;
        const valueArrValue: ResourceOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof ResourceOperationImpl? element : new ResourceOperationImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ResourceOperationImpl>(createResourceOperationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ResourceOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof ResourceOperationImpl? element : new ResourceOperationImpl(element));});
            writer.writeCollectionOfObjectValues<ResourceOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
