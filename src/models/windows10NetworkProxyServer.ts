import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Network Proxy Server Policy.
 */
export class Windows10NetworkProxyServer implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Address to the proxy server. Specify an address in the format [':'] */
    private _address?: string | undefined;
    /** Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with what is specified in this node. */
    private _exceptions?: string[] | undefined;
    private _odataType?: string | undefined;
    /** Specifies whether the proxy server should be used for local (intranet) addresses. */
    private _useForLocalAddresses?: boolean | undefined;
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
     * Gets the address property value. Address to the proxy server. Specify an address in the format [':']
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. Address to the proxy server. Specify an address in the format [':']
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new windows10NetworkProxyServer and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the exceptions property value. Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with what is specified in this node.
     * @returns a string
     */
    public get exceptions() {
        return this._exceptions;
    };
    /**
     * Sets the exceptions property value. Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with what is specified in this node.
     * @param value Value to set for the exceptions property.
     */
    public set exceptions(value: string[] | undefined) {
        this._exceptions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "exceptions": n => { this.exceptions = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "useForLocalAddresses": n => { this.useForLocalAddresses = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
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
        writer.writeStringValue("address", this.address);
        writer.writeCollectionOfPrimitiveValues<string>("exceptions", this.exceptions);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("useForLocalAddresses", this.useForLocalAddresses);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the useForLocalAddresses property value. Specifies whether the proxy server should be used for local (intranet) addresses.
     * @returns a boolean
     */
    public get useForLocalAddresses() {
        return this._useForLocalAddresses;
    };
    /**
     * Sets the useForLocalAddresses property value. Specifies whether the proxy server should be used for local (intranet) addresses.
     * @param value Value to set for the useForLocalAddresses property.
     */
    public set useForLocalAddresses(value: boolean | undefined) {
        this._useForLocalAddresses = value;
    };
}
