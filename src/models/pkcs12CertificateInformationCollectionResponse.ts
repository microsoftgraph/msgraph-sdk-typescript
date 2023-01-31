import {createPkcs12CertificateInformationFromDiscriminatorValue} from './createPkcs12CertificateInformationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Pkcs12CertificateInformation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Pkcs12CertificateInformationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: Pkcs12CertificateInformation[] | undefined;
    /**
     * Instantiates a new Pkcs12CertificateInformationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Pkcs12CertificateInformation>(createPkcs12CertificateInformationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Pkcs12CertificateInformation>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a pkcs12CertificateInformation
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: Pkcs12CertificateInformation[] | undefined) {
        this._value = value;
    };
}
