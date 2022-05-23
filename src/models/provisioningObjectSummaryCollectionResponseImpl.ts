import {createProvisioningObjectSummaryFromDiscriminatorValue} from './createProvisioningObjectSummaryFromDiscriminatorValue';
import {ProvisioningObjectSummaryImpl} from './index';
import {ProvisioningObjectSummary} from './provisioningObjectSummary';
import {ProvisioningObjectSummaryCollectionResponse} from './provisioningObjectSummaryCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningObjectSummaryCollectionResponseImpl implements AdditionalDataHolder, Parsable, ProvisioningObjectSummaryCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ProvisioningObjectSummary[] | undefined;
    /**
     * Instantiates a new ProvisioningObjectSummaryCollectionResponse and sets the default values.
     * @param provisioningObjectSummaryCollectionResponseParameterValue 
     */
    public constructor(provisioningObjectSummaryCollectionResponseParameterValue?: ProvisioningObjectSummaryCollectionResponse | undefined) {
        this.additionalData = provisioningObjectSummaryCollectionResponseParameterValue?.additionalData ? provisioningObjectSummaryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = provisioningObjectSummaryCollectionResponseParameterValue?.nextLink ;
        this.value = provisioningObjectSummaryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ProvisioningObjectSummaryImpl>(createProvisioningObjectSummaryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ProvisioningObjectSummaryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ProvisioningObjectSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummaryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
