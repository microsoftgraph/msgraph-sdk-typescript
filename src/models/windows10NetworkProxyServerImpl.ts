import {Windows10NetworkProxyServer} from './windows10NetworkProxyServer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Network Proxy Server Policy. */
export class Windows10NetworkProxyServerImpl implements Windows10NetworkProxyServer {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Address to the proxy server. Specify an address in the format <server>[':'<port>] */
    private _address?: string | undefined;
    /** Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with what is specified in this node. */
    private _exceptions?: string[] | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the address property value. Address to the proxy server. Specify an address in the format <server>[':'<port>]
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. Address to the proxy server. Specify an address in the format <server>[':'<port>]
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        if(value) {
            this._address = value;
        }
    };
    /**
     * Instantiates a new windows10NetworkProxyServer and sets the default values.
     * @param windows10NetworkProxyServerParameterValue 
     */
    public constructor(windows10NetworkProxyServerParameterValue?: Windows10NetworkProxyServer | undefined) {
        this._additionalData = windows10NetworkProxyServerParameterValue?.additionalData ? windows10NetworkProxyServerParameterValue?.additionalData! : {};
        this._address = windows10NetworkProxyServerParameterValue?.address;
        this._exceptions = windows10NetworkProxyServerParameterValue?.exceptions;
        this._useForLocalAddresses = windows10NetworkProxyServerParameterValue?.useForLocalAddresses;
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
        if(value) {
            this._exceptions = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "exceptions": n => { this.exceptions = n.getCollectionOfPrimitiveValues<string>(); },
            "useForLocalAddresses": n => { this.useForLocalAddresses = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
            writer.writeStringValue("address", this.address);
        }
        if(this.exceptions){
            writer.writeCollectionOfPrimitiveValues<string>("exceptions", this.exceptions);
        }
        if(this.useForLocalAddresses){
            writer.writeBooleanValue("useForLocalAddresses", this.useForLocalAddresses);
        }
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
        if(value) {
            this._useForLocalAddresses = value;
        }
    };
}
