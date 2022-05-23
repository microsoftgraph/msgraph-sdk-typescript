import {Contract} from './contract';
import {ContractCollectionResponse} from './contractCollectionResponse';
import {createContractFromDiscriminatorValue} from './createContractFromDiscriminatorValue';
import {ContractImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContractCollectionResponseImpl implements AdditionalDataHolder, ContractCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Contract[] | undefined;
    /**
     * Instantiates a new ContractCollectionResponse and sets the default values.
     * @param contractCollectionResponseParameterValue 
     */
    public constructor(contractCollectionResponseParameterValue?: ContractCollectionResponse | undefined) {
        this.additionalData = contractCollectionResponseParameterValue?.additionalData ? contractCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = contractCollectionResponseParameterValue?.nextLink ;
        this.value = contractCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ContractImpl>(createContractFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ContractImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ContractImpl(element));});
        writer.writeCollectionOfObjectValues<ContractImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
