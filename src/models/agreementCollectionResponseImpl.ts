import {Agreement} from './agreement';
import {AgreementCollectionResponse} from './agreementCollectionResponse';
import {createAgreementFromDiscriminatorValue} from './createAgreementFromDiscriminatorValue';
import {AgreementImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementCollectionResponseImpl implements AdditionalDataHolder, AgreementCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Agreement[] | undefined;
    /**
     * Instantiates a new AgreementCollectionResponse and sets the default values.
     * @param agreementCollectionResponseParameterValue 
     */
    public constructor(agreementCollectionResponseParameterValue?: AgreementCollectionResponse | undefined) {
        this.additionalData = agreementCollectionResponseParameterValue?.additionalData ? agreementCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = agreementCollectionResponseParameterValue?.nextLink ;
        this.value = agreementCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AgreementImpl>(createAgreementFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AgreementImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AgreementImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
