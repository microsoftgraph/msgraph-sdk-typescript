import {CertificateAuthority} from './certificateAuthority';
import {createCertificateAuthorityFromDiscriminatorValue} from './createCertificateAuthorityFromDiscriminatorValue';
import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of certificateBasedAuthConfiguration entities.  */
export class CertificateBasedAuthConfiguration extends Entity implements Parsable {
    /** Collection of certificate authorities which creates a trusted certificate chain.  */
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
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["certificateAuthorities", (o, n) => { (o as unknown as CertificateBasedAuthConfiguration).certificateAuthorities = n.getCollectionOfObjectValues<CertificateAuthority>(createCertificateAuthorityFromDiscriminatorValue); }],
        ]);
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
