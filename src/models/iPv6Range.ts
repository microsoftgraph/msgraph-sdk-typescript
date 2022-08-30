import {IpRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IPv6Range extends IpRange implements Parsable {
    /** Lower address. */
    private _lowerAddress?: string | undefined;
    /** Upper address. */
    private _upperAddress?: string | undefined;
    /**
     * Instantiates a new IPv6Range and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iPv6Range";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lowerAddress": n => { this.lowerAddress = n.getStringValue(); },
            "upperAddress": n => { this.upperAddress = n.getStringValue(); },
        };
    };
    /**
     * Gets the lowerAddress property value. Lower address.
     * @returns a string
     */
    public get lowerAddress() {
        return this._lowerAddress;
    };
    /**
     * Sets the lowerAddress property value. Lower address.
     * @param value Value to set for the lowerAddress property.
     */
    public set lowerAddress(value: string | undefined) {
        this._lowerAddress = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("lowerAddress", this.lowerAddress);
        writer.writeStringValue("upperAddress", this.upperAddress);
    };
    /**
     * Gets the upperAddress property value. Upper address.
     * @returns a string
     */
    public get upperAddress() {
        return this._upperAddress;
    };
    /**
     * Sets the upperAddress property value. Upper address.
     * @param value Value to set for the upperAddress property.
     */
    public set upperAddress(value: string | undefined) {
        this._upperAddress = value;
    };
}
