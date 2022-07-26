import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SoftwareOathAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The secret key of the method. Always returns null. */
    private _secretKey?: string | undefined;
    /**
     * Instantiates a new SoftwareOathAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.softwareOathAuthenticationMethod";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "secretKey": n => { this.secretKey = n.getStringValue(); },
        };
    };
    /**
     * Gets the secretKey property value. The secret key of the method. Always returns null.
     * @returns a string
     */
    public get secretKey() {
        return this._secretKey;
    };
    /**
     * Sets the secretKey property value. The secret key of the method. Always returns null.
     * @param value Value to set for the secretKey property.
     */
    public set secretKey(value: string | undefined) {
        this._secretKey = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("secretKey", this.secretKey);
    };
}
