import {ClientCertificateAuthentication} from './clientCertificateAuthentication';
import {createPkcs12CertificateInformationFromDiscriminatorValue} from './createPkcs12CertificateInformationFromDiscriminatorValue';
import {ApiAuthenticationConfigurationBaseImpl, Pkcs12CertificateInformationImpl} from './index';
import {Pkcs12CertificateInformation} from './pkcs12CertificateInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClientCertificateAuthenticationImpl extends ApiAuthenticationConfigurationBaseImpl implements ClientCertificateAuthentication {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The list of certificates uploaded for this API connector. */
    public certificateList?: Pkcs12CertificateInformation[] | undefined;
    /**
     * Instantiates a new ClientCertificateAuthentication and sets the default values.
     * @param clientCertificateAuthenticationParameterValue 
     */
    public constructor(clientCertificateAuthenticationParameterValue?: ClientCertificateAuthentication | undefined) {
        super(clientCertificateAuthenticationParameterValue);
        this.additionalData = clientCertificateAuthenticationParameterValue?.additionalData ? clientCertificateAuthenticationParameterValue?.additionalData! : {};
        const certificateListArrValue: Pkcs12CertificateInformationImpl[] = []; clientCertificateAuthenticationParameterValue.certificateList?.forEach(element => {certificateListArrValue.push(element instanceof Pkcs12CertificateInformationImpl? element : new Pkcs12CertificateInformationImpl(element));});
        this.certificateList = certificateListArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificateList": n => { this.certificateList = n.getCollectionOfObjectValues<Pkcs12CertificateInformationImpl>(createPkcs12CertificateInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.certificateList && this.certificateList.length != 0){        const certificateListArrValue: Pkcs12CertificateInformationImpl[] = []; this.certificateList?.forEach(element => {certificateListArrValue.push(element instanceof Pkcs12CertificateInformationImpl? element : new Pkcs12CertificateInformationImpl(element));});
            writer.writeCollectionOfObjectValues<Pkcs12CertificateInformationImpl>("certificateList", certificateListArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
