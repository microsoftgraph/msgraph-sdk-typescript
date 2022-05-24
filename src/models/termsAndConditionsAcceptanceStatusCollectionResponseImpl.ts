import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from './createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {TermsAndConditionsAcceptanceStatusImpl} from './index';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatusCollectionResponse} from './termsAndConditionsAcceptanceStatusCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsAndConditionsAcceptanceStatusCollectionResponseImpl implements AdditionalDataHolder, Parsable, TermsAndConditionsAcceptanceStatusCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TermsAndConditionsAcceptanceStatus[] | undefined;
    /**
     * Instantiates a new TermsAndConditionsAcceptanceStatusCollectionResponse and sets the default values.
     * @param termsAndConditionsAcceptanceStatusCollectionResponseParameterValue 
     */
    public constructor(termsAndConditionsAcceptanceStatusCollectionResponseParameterValue?: TermsAndConditionsAcceptanceStatusCollectionResponse | undefined) {
        this.additionalData = termsAndConditionsAcceptanceStatusCollectionResponseParameterValue?.additionalData ? termsAndConditionsAcceptanceStatusCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = termsAndConditionsAcceptanceStatusCollectionResponseParameterValue?.nextLink ;
        this.value = termsAndConditionsAcceptanceStatusCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TermsAndConditionsAcceptanceStatusImpl>(createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TermsAndConditionsAcceptanceStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TermsAndConditionsAcceptanceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<TermsAndConditionsAcceptanceStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
