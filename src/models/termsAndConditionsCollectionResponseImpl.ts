import {createTermsAndConditionsFromDiscriminatorValue} from './createTermsAndConditionsFromDiscriminatorValue';
import {TermsAndConditionsImpl} from './index';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsCollectionResponse} from './termsAndConditionsCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsAndConditionsCollectionResponseImpl implements AdditionalDataHolder, Parsable, TermsAndConditionsCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TermsAndConditions[] | undefined;
    /**
     * Instantiates a new TermsAndConditionsCollectionResponse and sets the default values.
     * @param termsAndConditionsCollectionResponseParameterValue 
     */
    public constructor(termsAndConditionsCollectionResponseParameterValue?: TermsAndConditionsCollectionResponse | undefined) {
        this.additionalData = termsAndConditionsCollectionResponseParameterValue?.additionalData ? termsAndConditionsCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = termsAndConditionsCollectionResponseParameterValue?.nextLink ;
        this.value = termsAndConditionsCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TermsAndConditionsImpl>(createTermsAndConditionsFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TermsAndConditionsImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TermsAndConditionsImpl(element));});
        writer.writeCollectionOfObjectValues<TermsAndConditionsImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
