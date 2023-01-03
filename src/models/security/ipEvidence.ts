import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IpEvidence extends AlertEvidence implements Parsable {
    /** The two-letter country code according to ISO 3166 format, for example: US, UK, CA, etc..). */
    private _countryLetterCode?: string | undefined;
    /** The value of the IP Address, can be either in V4 address or V6 address format. */
    private _ipAddress?: string | undefined;
    /**
     * Instantiates a new IpEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the countryLetterCode property value. The two-letter country code according to ISO 3166 format, for example: US, UK, CA, etc..).
     * @returns a string
     */
    public get countryLetterCode() {
        return this._countryLetterCode;
    };
    /**
     * Sets the countryLetterCode property value. The two-letter country code according to ISO 3166 format, for example: US, UK, CA, etc..).
     * @param value Value to set for the countryLetterCode property.
     */
    public set countryLetterCode(value: string | undefined) {
        this._countryLetterCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "countryLetterCode": n => { this.countryLetterCode = n.getStringValue(); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddress property value. The value of the IP Address, can be either in V4 address or V6 address format.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. The value of the IP Address, can be either in V4 address or V6 address format.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("countryLetterCode", this.countryLetterCode);
        writer.writeStringValue("ipAddress", this.ipAddress);
    };
}
