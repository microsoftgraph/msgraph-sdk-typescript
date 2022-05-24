import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {CertificateBasedAuthConfigurationCollectionResponse} from './certificateBasedAuthConfigurationCollectionResponse';
import {createCertificateBasedAuthConfigurationFromDiscriminatorValue} from './createCertificateBasedAuthConfigurationFromDiscriminatorValue';
import {CertificateBasedAuthConfigurationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificateBasedAuthConfigurationCollectionResponseImpl implements AdditionalDataHolder, CertificateBasedAuthConfigurationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: CertificateBasedAuthConfiguration[] | undefined;
    /**
     * Instantiates a new CertificateBasedAuthConfigurationCollectionResponse and sets the default values.
     * @param certificateBasedAuthConfigurationCollectionResponseParameterValue 
     */
    public constructor(certificateBasedAuthConfigurationCollectionResponseParameterValue?: CertificateBasedAuthConfigurationCollectionResponse | undefined) {
        this.additionalData = certificateBasedAuthConfigurationCollectionResponseParameterValue?.additionalData ? certificateBasedAuthConfigurationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = certificateBasedAuthConfigurationCollectionResponseParameterValue?.nextLink ;
        this.value = certificateBasedAuthConfigurationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<CertificateBasedAuthConfigurationImpl>(createCertificateBasedAuthConfigurationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: CertificateBasedAuthConfigurationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new CertificateBasedAuthConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<CertificateBasedAuthConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
