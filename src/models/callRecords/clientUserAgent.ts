import {ClientPlatform} from './clientPlatform';
import {UserAgent} from './index';
import {ProductFamily} from './productFamily';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClientUserAgent extends UserAgent implements Parsable {
    /** The unique identifier of the Azure AD application used by this endpoint. */
    private _azureADAppId?: string | undefined;
    /** Immutable resource identifier of the Azure Communication Service associated with this endpoint based on Communication Services APIs. */
    private _communicationServiceId?: string | undefined;
    private _platform?: ClientPlatform | undefined;
    private _productFamily?: ProductFamily | undefined;
    /**
     * Gets the azureADAppId property value. The unique identifier of the Azure AD application used by this endpoint.
     * @returns a string
     */
    public get azureADAppId() {
        return this._azureADAppId;
    };
    /**
     * Sets the azureADAppId property value. The unique identifier of the Azure AD application used by this endpoint.
     * @param value Value to set for the azureADAppId property.
     */
    public set azureADAppId(value: string | undefined) {
        this._azureADAppId = value;
    };
    /**
     * Gets the communicationServiceId property value. Immutable resource identifier of the Azure Communication Service associated with this endpoint based on Communication Services APIs.
     * @returns a string
     */
    public get communicationServiceId() {
        return this._communicationServiceId;
    };
    /**
     * Sets the communicationServiceId property value. Immutable resource identifier of the Azure Communication Service associated with this endpoint based on Communication Services APIs.
     * @param value Value to set for the communicationServiceId property.
     */
    public set communicationServiceId(value: string | undefined) {
        this._communicationServiceId = value;
    };
    /**
     * Instantiates a new ClientUserAgent and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.callRecords.clientUserAgent";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "azureADAppId": n => { this.azureADAppId = n.getStringValue(); },
            "communicationServiceId": n => { this.communicationServiceId = n.getStringValue(); },
            "platform": n => { this.platform = n.getEnumValue<ClientPlatform>(ClientPlatform); },
            "productFamily": n => { this.productFamily = n.getEnumValue<ProductFamily>(ProductFamily); },
        };
    };
    /**
     * Gets the platform property value. 
     * @returns a clientPlatform
     */
    public get platform() {
        return this._platform;
    };
    /**
     * Sets the platform property value. 
     * @param value Value to set for the platform property.
     */
    public set platform(value: ClientPlatform | undefined) {
        this._platform = value;
    };
    /**
     * Gets the productFamily property value. 
     * @returns a productFamily
     */
    public get productFamily() {
        return this._productFamily;
    };
    /**
     * Sets the productFamily property value. 
     * @param value Value to set for the productFamily property.
     */
    public set productFamily(value: ProductFamily | undefined) {
        this._productFamily = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("azureADAppId", this.azureADAppId);
        writer.writeStringValue("communicationServiceId", this.communicationServiceId);
        writer.writeEnumValue<ClientPlatform>("platform", this.platform);
        writer.writeEnumValue<ProductFamily>("productFamily", this.productFamily);
    };
}
