import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileLocalizationCollectionResponse} from './agreementFileLocalizationCollectionResponse';
import {createAgreementFileLocalizationFromDiscriminatorValue} from './createAgreementFileLocalizationFromDiscriminatorValue';
import {AgreementFileLocalizationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFileLocalizationCollectionResponseImpl implements AdditionalDataHolder, AgreementFileLocalizationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AgreementFileLocalization[] | undefined;
    /**
     * Instantiates a new AgreementFileLocalizationCollectionResponse and sets the default values.
     * @param agreementFileLocalizationCollectionResponseParameterValue 
     */
    public constructor(agreementFileLocalizationCollectionResponseParameterValue?: AgreementFileLocalizationCollectionResponse | undefined) {
        this.additionalData = agreementFileLocalizationCollectionResponseParameterValue?.additionalData ? agreementFileLocalizationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = agreementFileLocalizationCollectionResponseParameterValue?.nextLink ;
        this.value = agreementFileLocalizationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AgreementFileLocalizationImpl>(createAgreementFileLocalizationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AgreementFileLocalizationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AgreementFileLocalizationImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementFileLocalizationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
