import {CertificateAuthority} from './certificateAuthority';
import {CertificateBasedAuthConfiguration} from './certificateBasedAuthConfiguration';
import {createCertificateAuthorityFromDiscriminatorValue} from './createCertificateAuthorityFromDiscriminatorValue';
import {CertificateAuthorityImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of certificateBasedAuthConfiguration entities. */
export class CertificateBasedAuthConfigurationImpl extends EntityImpl implements CertificateBasedAuthConfiguration, Parsable {
    /** Collection of certificate authorities which creates a trusted certificate chain. */
    public certificateAuthorities?: CertificateAuthority[] | undefined;
    /**
     * Instantiates a new certificateBasedAuthConfiguration and sets the default values.
     * @param certificateBasedAuthConfigurationParameterValue 
     */
    public constructor(certificateBasedAuthConfigurationParameterValue?: CertificateBasedAuthConfiguration | undefined) {
        super();
        this.certificateAuthorities = certificateBasedAuthConfigurationParameterValue?.certificateAuthorities ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificateAuthorities": n => { this.certificateAuthorities = n.getCollectionOfObjectValues<CertificateAuthorityImpl>(createCertificateAuthorityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.certificateAuthorities && this.certificateAuthorities.length != 0){        const certificateAuthoritiesArrValue: CertificateAuthorityImpl[] = []; this.certificateAuthorities?.forEach(element => {certificateAuthoritiesArrValue.push(new CertificateAuthorityImpl(element));});
        writer.writeCollectionOfObjectValues<CertificateAuthorityImpl>("certificateAuthorities", certificateAuthoritiesArrValue);
        }
    };
}
