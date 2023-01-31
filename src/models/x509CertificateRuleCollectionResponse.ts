import {createX509CertificateRuleFromDiscriminatorValue} from './createX509CertificateRuleFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, X509CertificateRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class X509CertificateRuleCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: X509CertificateRule[] | undefined;
    /**
     * Instantiates a new X509CertificateRuleCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<X509CertificateRule>(createX509CertificateRuleFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<X509CertificateRule>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a x509CertificateRule
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: X509CertificateRule[] | undefined) {
        this._value = value;
    };
}
