import {createX509CertificateAuthenticationMethodConfigurationFromDiscriminatorValue} from './createX509CertificateAuthenticationMethodConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, X509CertificateAuthenticationMethodConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class X509CertificateAuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: X509CertificateAuthenticationMethodConfiguration[] | undefined;
    /**
     * Instantiates a new X509CertificateAuthenticationMethodConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<X509CertificateAuthenticationMethodConfiguration>(createX509CertificateAuthenticationMethodConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<X509CertificateAuthenticationMethodConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a x509CertificateAuthenticationMethodConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: X509CertificateAuthenticationMethodConfiguration[] | undefined) {
        this._value = value;
    };
}
