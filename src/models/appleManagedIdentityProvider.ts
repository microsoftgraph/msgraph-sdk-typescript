import {IdentityProviderBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppleManagedIdentityProvider extends IdentityProviderBase implements Parsable {
    /** The certificate data, which is a long string of text from the certificate. Can be null. */
    private _certificateData?: string | undefined;
    /** The Apple developer identifier. Required. */
    private _developerId?: string | undefined;
    /** The Apple key identifier. Required. */
    private _keyId?: string | undefined;
    /** The Apple service identifier. Required. */
    private _serviceId?: string | undefined;
    /**
     * Gets the certificateData property value. The certificate data, which is a long string of text from the certificate. Can be null.
     * @returns a string
     */
    public get certificateData() {
        return this._certificateData;
    };
    /**
     * Sets the certificateData property value. The certificate data, which is a long string of text from the certificate. Can be null.
     * @param value Value to set for the certificateData property.
     */
    public set certificateData(value: string | undefined) {
        this._certificateData = value;
    };
    /**
     * Instantiates a new AppleManagedIdentityProvider and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.appleManagedIdentityProvider";
    };
    /**
     * Gets the developerId property value. The Apple developer identifier. Required.
     * @returns a string
     */
    public get developerId() {
        return this._developerId;
    };
    /**
     * Sets the developerId property value. The Apple developer identifier. Required.
     * @param value Value to set for the developerId property.
     */
    public set developerId(value: string | undefined) {
        this._developerId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificateData": n => { this.certificateData = n.getStringValue(); },
            "developerId": n => { this.developerId = n.getStringValue(); },
            "keyId": n => { this.keyId = n.getStringValue(); },
            "serviceId": n => { this.serviceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the keyId property value. The Apple key identifier. Required.
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Sets the keyId property value. The Apple key identifier. Required.
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("certificateData", this.certificateData);
        writer.writeStringValue("developerId", this.developerId);
        writer.writeStringValue("keyId", this.keyId);
        writer.writeStringValue("serviceId", this.serviceId);
    };
    /**
     * Gets the serviceId property value. The Apple service identifier. Required.
     * @returns a string
     */
    public get serviceId() {
        return this._serviceId;
    };
    /**
     * Sets the serviceId property value. The Apple service identifier. Required.
     * @param value Value to set for the serviceId property.
     */
    public set serviceId(value: string | undefined) {
        this._serviceId = value;
    };
}
