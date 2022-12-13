import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IpEvidence extends AlertEvidence implements Parsable {
    /** The countryLetterCode property */
    private _countryLetterCode?: string | undefined;
    /** The ipAddress property */
    private _ipAddress?: string | undefined;
    /**
     * Instantiates a new IpEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the countryLetterCode property value. The countryLetterCode property
     * @returns a string
     */
    public get countryLetterCode() {
        return this._countryLetterCode;
    };
    /**
     * Sets the countryLetterCode property value. The countryLetterCode property
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
     * Gets the ipAddress property value. The ipAddress property
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. The ipAddress property
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
