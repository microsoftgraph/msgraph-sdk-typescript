import {ClientPlatform} from './clientPlatform';
import {UserAgent} from './index';
import {ProductFamily} from './productFamily';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClientUserAgent extends UserAgent implements Parsable {
    /** Identifies the platform used by this endpoint. Possible values are: unknown, windows, macOS, iOS, android, web, ipPhone, roomSystem, surfaceHub, holoLens, unknownFutureValue. */
    private _platform?: ClientPlatform | undefined;
    /** Identifies the family of application software used by this endpoint. Possible values are: unknown, teams, skypeForBusiness, lync, unknownFutureValue, azureCommunicationServices.  Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: azureCommunicationServices. */
    private _productFamily?: ProductFamily | undefined;
    /**
     * Instantiates a new ClientUserAgent and sets the default values.
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
            "platform": n => { this.platform = n.getEnumValue<ClientPlatform>(ClientPlatform); },
            "productFamily": n => { this.productFamily = n.getEnumValue<ProductFamily>(ProductFamily); },
        };
    };
    /**
     * Gets the platform property value. Identifies the platform used by this endpoint. Possible values are: unknown, windows, macOS, iOS, android, web, ipPhone, roomSystem, surfaceHub, holoLens, unknownFutureValue.
     * @returns a clientPlatform
     */
    public get platform() {
        return this._platform;
    };
    /**
     * Sets the platform property value. Identifies the platform used by this endpoint. Possible values are: unknown, windows, macOS, iOS, android, web, ipPhone, roomSystem, surfaceHub, holoLens, unknownFutureValue.
     * @param value Value to set for the platform property.
     */
    public set platform(value: ClientPlatform | undefined) {
        this._platform = value;
    };
    /**
     * Gets the productFamily property value. Identifies the family of application software used by this endpoint. Possible values are: unknown, teams, skypeForBusiness, lync, unknownFutureValue, azureCommunicationServices.  Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: azureCommunicationServices.
     * @returns a productFamily
     */
    public get productFamily() {
        return this._productFamily;
    };
    /**
     * Sets the productFamily property value. Identifies the family of application software used by this endpoint. Possible values are: unknown, teams, skypeForBusiness, lync, unknownFutureValue, azureCommunicationServices.  Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: azureCommunicationServices.
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
        writer.writeEnumValue<ClientPlatform>("platform", this.platform);
        writer.writeEnumValue<ProductFamily>("productFamily", this.productFamily);
    };
}
