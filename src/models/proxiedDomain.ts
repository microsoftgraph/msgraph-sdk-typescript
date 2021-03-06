import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Proxied Domain */
export class ProxiedDomain implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The IP address or FQDN */
    private _ipAddressOrFQDN?: string | undefined;
    /** Proxy IP or FQDN */
    private _proxy?: string | undefined;
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
     * Instantiates a new proxiedDomain and sets the default values.
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
            "ipAddressOrFQDN": n => { this.ipAddressOrFQDN = n.getStringValue(); },
            "proxy": n => { this.proxy = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddressOrFQDN property value. The IP address or FQDN
     * @returns a string
     */
    public get ipAddressOrFQDN() {
        return this._ipAddressOrFQDN;
    };
    /**
     * Sets the ipAddressOrFQDN property value. The IP address or FQDN
     * @param value Value to set for the ipAddressOrFQDN property.
     */
    public set ipAddressOrFQDN(value: string | undefined) {
        this._ipAddressOrFQDN = value;
    };
    /**
     * Gets the proxy property value. Proxy IP or FQDN
     * @returns a string
     */
    public get proxy() {
        return this._proxy;
    };
    /**
     * Sets the proxy property value. Proxy IP or FQDN
     * @param value Value to set for the proxy property.
     */
    public set proxy(value: string | undefined) {
        this._proxy = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("ipAddressOrFQDN", this.ipAddressOrFQDN);
        writer.writeStringValue("proxy", this.proxy);
        writer.writeAdditionalData(this.additionalData);
    };
}
