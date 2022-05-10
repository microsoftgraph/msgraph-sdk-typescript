import {AgreementAcceptance} from './agreementAcceptance';
import {AgreementAcceptanceCollectionResponse} from './agreementAcceptanceCollectionResponse';
import {createAgreementAcceptanceFromDiscriminatorValue} from './createAgreementAcceptanceFromDiscriminatorValue';
import {AgreementAcceptanceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementAcceptanceCollectionResponseImpl implements AdditionalDataHolder, AgreementAcceptanceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: AgreementAcceptance[] | undefined;
    /**
     * Instantiates a new AgreementAcceptanceCollectionResponse and sets the default values.
     * @param agreementAcceptanceCollectionResponseParameterValue 
     */
    public constructor(agreementAcceptanceCollectionResponseParameterValue?: AgreementAcceptanceCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = agreementAcceptanceCollectionResponseParameterValue?.additionalData ? {} : agreementAcceptanceCollectionResponseParameterValue?.additionalData!
        this.nextLink = agreementAcceptanceCollectionResponseParameterValue?.nextLink ;
        this.value = agreementAcceptanceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AgreementAcceptanceImpl>(createAgreementAcceptanceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: AgreementAcceptanceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AgreementAcceptanceImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementAcceptanceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
