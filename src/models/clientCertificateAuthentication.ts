import {AdminMember1, ApiAuthenticationConfigurationBase, Pkcs12CertificateInformation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClientCertificateAuthentication extends ApiAuthenticationConfigurationBase implements Parsable {
    /** The list of certificates uploaded for this API connector. */
    private _certificateList?: Pkcs12CertificateInformation | AdminMember1[] | undefined;
    /**
     * Gets the certificateList property value. The list of certificates uploaded for this API connector.
     * @returns a admin
     */
    public get certificateList() {
        return this._certificateList;
    };
    /**
     * Sets the certificateList property value. The list of certificates uploaded for this API connector.
     * @param value Value to set for the certificateList property.
     */
    public set certificateList(value: Pkcs12CertificateInformation | AdminMember1[] | undefined) {
        this._certificateList = value;
    };
    /**
     * Instantiates a new ClientCertificateAuthentication and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificateList": n => { this.certificateList = n.getObjectValue<Pkcs12CertificateInformation>(createPkcs12CertificateInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Pkcs12CertificateInformation>("certificateList", this.certificateList);
    };
}
