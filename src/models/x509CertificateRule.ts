import {X509CertificateAuthenticationMode} from './x509CertificateAuthenticationMode';
import {X509CertificateRuleType} from './x509CertificateRuleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class X509CertificateRule implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The identifier of the X.509 certificate. Required. */
    private _identifier?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The type of strong authentication mode. The possible values are: x509CertificateSingleFactor, x509CertificateMultiFactor, unknownFutureValue. Required. */
    private _x509CertificateAuthenticationMode?: X509CertificateAuthenticationMode | undefined;
    /** The type of the X.509 certificate mode configuration rule. The possible values are: issuerSubject, policyOID, unknownFutureValue. Required. */
    private _x509CertificateRuleType?: X509CertificateRuleType | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new x509CertificateRule and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "identifier": n => { this.identifier = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "x509CertificateAuthenticationMode": n => { this.x509CertificateAuthenticationMode = n.getEnumValue<X509CertificateAuthenticationMode>(X509CertificateAuthenticationMode); },
            "x509CertificateRuleType": n => { this.x509CertificateRuleType = n.getEnumValue<X509CertificateRuleType>(X509CertificateRuleType); },
        };
    };
    /**
     * Gets the identifier property value. The identifier of the X.509 certificate. Required.
     * @returns a string
     */
    public get identifier() {
        return this._identifier;
    };
    /**
     * Sets the identifier property value. The identifier of the X.509 certificate. Required.
     * @param value Value to set for the identifier property.
     */
    public set identifier(value: string | undefined) {
        this._identifier = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("identifier", this.identifier);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<X509CertificateAuthenticationMode>("x509CertificateAuthenticationMode", this.x509CertificateAuthenticationMode);
        writer.writeEnumValue<X509CertificateRuleType>("x509CertificateRuleType", this.x509CertificateRuleType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the x509CertificateAuthenticationMode property value. The type of strong authentication mode. The possible values are: x509CertificateSingleFactor, x509CertificateMultiFactor, unknownFutureValue. Required.
     * @returns a x509CertificateAuthenticationMode
     */
    public get x509CertificateAuthenticationMode() {
        return this._x509CertificateAuthenticationMode;
    };
    /**
     * Sets the x509CertificateAuthenticationMode property value. The type of strong authentication mode. The possible values are: x509CertificateSingleFactor, x509CertificateMultiFactor, unknownFutureValue. Required.
     * @param value Value to set for the x509CertificateAuthenticationMode property.
     */
    public set x509CertificateAuthenticationMode(value: X509CertificateAuthenticationMode | undefined) {
        this._x509CertificateAuthenticationMode = value;
    };
    /**
     * Gets the x509CertificateRuleType property value. The type of the X.509 certificate mode configuration rule. The possible values are: issuerSubject, policyOID, unknownFutureValue. Required.
     * @returns a x509CertificateRuleType
     */
    public get x509CertificateRuleType() {
        return this._x509CertificateRuleType;
    };
    /**
     * Sets the x509CertificateRuleType property value. The type of the X.509 certificate mode configuration rule. The possible values are: issuerSubject, policyOID, unknownFutureValue. Required.
     * @param value Value to set for the x509CertificateRuleType property.
     */
    public set x509CertificateRuleType(value: X509CertificateRuleType | undefined) {
        this._x509CertificateRuleType = value;
    };
}
