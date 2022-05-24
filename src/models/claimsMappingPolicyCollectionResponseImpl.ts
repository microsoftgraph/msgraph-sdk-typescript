import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {ClaimsMappingPolicyCollectionResponse} from './claimsMappingPolicyCollectionResponse';
import {createClaimsMappingPolicyFromDiscriminatorValue} from './createClaimsMappingPolicyFromDiscriminatorValue';
import {ClaimsMappingPolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClaimsMappingPolicyCollectionResponseImpl implements AdditionalDataHolder, ClaimsMappingPolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ClaimsMappingPolicy[] | undefined;
    /**
     * Instantiates a new ClaimsMappingPolicyCollectionResponse and sets the default values.
     * @param claimsMappingPolicyCollectionResponseParameterValue 
     */
    public constructor(claimsMappingPolicyCollectionResponseParameterValue?: ClaimsMappingPolicyCollectionResponse | undefined) {
        this.additionalData = claimsMappingPolicyCollectionResponseParameterValue?.additionalData ? claimsMappingPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = claimsMappingPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = claimsMappingPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ClaimsMappingPolicyImpl>(createClaimsMappingPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ClaimsMappingPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ClaimsMappingPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
