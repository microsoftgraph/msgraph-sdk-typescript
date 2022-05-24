import {createTokenIssuancePolicyFromDiscriminatorValue} from './createTokenIssuancePolicyFromDiscriminatorValue';
import {TokenIssuancePolicyImpl} from './index';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {TokenIssuancePolicyCollectionResponse} from './tokenIssuancePolicyCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenIssuancePolicyCollectionResponseImpl implements AdditionalDataHolder, Parsable, TokenIssuancePolicyCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TokenIssuancePolicy[] | undefined;
    /**
     * Instantiates a new TokenIssuancePolicyCollectionResponse and sets the default values.
     * @param tokenIssuancePolicyCollectionResponseParameterValue 
     */
    public constructor(tokenIssuancePolicyCollectionResponseParameterValue?: TokenIssuancePolicyCollectionResponse | undefined) {
        this.additionalData = tokenIssuancePolicyCollectionResponseParameterValue?.additionalData ? tokenIssuancePolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = tokenIssuancePolicyCollectionResponseParameterValue?.nextLink ;
        this.value = tokenIssuancePolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TokenIssuancePolicyImpl>(createTokenIssuancePolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TokenIssuancePolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TokenIssuancePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenIssuancePolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
