import {createDataPolicyOperationFromDiscriminatorValue} from './createDataPolicyOperationFromDiscriminatorValue';
import {DataPolicyOperation} from './dataPolicyOperation';
import {DataPolicyOperationCollectionResponse} from './dataPolicyOperationCollectionResponse';
import {DataPolicyOperationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DataPolicyOperationCollectionResponseImpl implements DataPolicyOperationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DataPolicyOperation[] | undefined;
    /**
     * Instantiates a new DataPolicyOperationCollectionResponse and sets the default values.
     * @param dataPolicyOperationCollectionResponseParameterValue 
     */
    public constructor(dataPolicyOperationCollectionResponseParameterValue?: DataPolicyOperationCollectionResponse | undefined) {
        this.additionalData = dataPolicyOperationCollectionResponseParameterValue?.additionalData ? dataPolicyOperationCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = dataPolicyOperationCollectionResponseParameterValue?.nextLink;
        const valueArrValue: DataPolicyOperationImpl[] = []; dataPolicyOperationCollectionResponseParameterValue.value?.forEach(element => {valueArrValue.push(element instanceof DataPolicyOperationImpl? element : new DataPolicyOperationImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DataPolicyOperationImpl>(createDataPolicyOperationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DataPolicyOperationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof DataPolicyOperationImpl? element : new DataPolicyOperationImpl(element));});
            writer.writeCollectionOfObjectValues<DataPolicyOperationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
