import {AgreementFileVersion} from './agreementFileVersion';
import {AgreementFileVersionCollectionResponse} from './agreementFileVersionCollectionResponse';
import {createAgreementFileVersionFromDiscriminatorValue} from './createAgreementFileVersionFromDiscriminatorValue';
import {AgreementFileVersionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFileVersionCollectionResponseImpl implements AdditionalDataHolder, AgreementFileVersionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AgreementFileVersion[] | undefined;
    /**
     * Instantiates a new AgreementFileVersionCollectionResponse and sets the default values.
     * @param agreementFileVersionCollectionResponseParameterValue 
     */
    public constructor(agreementFileVersionCollectionResponseParameterValue?: AgreementFileVersionCollectionResponse | undefined) {
        this.additionalData = agreementFileVersionCollectionResponseParameterValue?.additionalData ? agreementFileVersionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = agreementFileVersionCollectionResponseParameterValue?.nextLink ;
        this.value = agreementFileVersionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AgreementFileVersionImpl>(createAgreementFileVersionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AgreementFileVersionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AgreementFileVersionImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementFileVersionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
