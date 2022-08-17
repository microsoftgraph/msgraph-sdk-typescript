import {ClientPlatform} from './clientPlatform';
import {UserAgent} from './index';
import {ProductFamily} from './productFamily';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ClientUserAgent extends UserAgent implements Parsable {
    /** The platform property */
    private _platform?: ClientPlatform | undefined;
    /** The productFamily property */
    private _productFamily?: ProductFamily | undefined;
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
            "platform": n => { this.platform = n.getEnumValue<ClientPlatform>(ClientPlatform); },
            "productFamily": n => { this.productFamily = n.getEnumValue<ProductFamily>(ProductFamily); },
        };
    };
    /**
     * Gets the platform property value. The platform property
     * @returns a clientPlatform
     */
    public get platform() {
        return this._platform;
    };
    /**
     * Sets the platform property value. The platform property
     * @param value Value to set for the platform property.
     */
    public set platform(value: ClientPlatform | undefined) {
        this._platform = value;
    };
    /**
     * Gets the productFamily property value. The productFamily property
     * @returns a productFamily
     */
    public get productFamily() {
        return this._productFamily;
    };
    /**
     * Sets the productFamily property value. The productFamily property
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
