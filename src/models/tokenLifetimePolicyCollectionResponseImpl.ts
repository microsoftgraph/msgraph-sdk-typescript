import {createTokenLifetimePolicyFromDiscriminatorValue} from './createTokenLifetimePolicyFromDiscriminatorValue';
import {TokenLifetimePolicyImpl} from './index';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {TokenLifetimePolicyCollectionResponse} from './tokenLifetimePolicyCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenLifetimePolicyCollectionResponseImpl implements AdditionalDataHolder, Parsable, TokenLifetimePolicyCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TokenLifetimePolicy[] | undefined;
    /**
     * Instantiates a new TokenLifetimePolicyCollectionResponse and sets the default values.
     * @param tokenLifetimePolicyCollectionResponseParameterValue 
     */
    public constructor(tokenLifetimePolicyCollectionResponseParameterValue?: TokenLifetimePolicyCollectionResponse | undefined) {
        this.additionalData = tokenLifetimePolicyCollectionResponseParameterValue?.additionalData ? tokenLifetimePolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = tokenLifetimePolicyCollectionResponseParameterValue?.nextLink ;
        this.value = tokenLifetimePolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TokenLifetimePolicyImpl>(createTokenLifetimePolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TokenLifetimePolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TokenLifetimePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<TokenLifetimePolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
