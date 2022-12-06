import {createCertificateAuthorityFromDiscriminatorValue} from './createCertificateAuthorityFromDiscriminatorValue';
import {CertificateAuthority, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class CertificateBasedAuthConfiguration extends Entity implements Parsable {
    /** Collection of certificate authorities which creates a trusted certificate chain. */
    private _certificateAuthorities?: CertificateAuthority[] | undefined;
    /**
     * Gets the certificateAuthorities property value. Collection of certificate authorities which creates a trusted certificate chain.
     * @returns a certificateAuthority
     */
    public get certificateAuthorities() {
        return this._certificateAuthorities;
    };
    /**
     * Sets the certificateAuthorities property value. Collection of certificate authorities which creates a trusted certificate chain.
     * @param value Value to set for the certificateAuthorities property.
     */
    public set certificateAuthorities(value: CertificateAuthority[] | undefined) {
        this._certificateAuthorities = value;
    };
    /**
     * Instantiates a new certificateBasedAuthConfiguration and sets the default values.
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
            "certificateAuthorities": n => { this.certificateAuthorities = n.getCollectionOfObjectValues<CertificateAuthority>(createCertificateAuthorityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<CertificateAuthority>("certificateAuthorities", this.certificateAuthorities);
    };
}
