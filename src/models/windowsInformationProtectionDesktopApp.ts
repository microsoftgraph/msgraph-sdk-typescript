import {WindowsInformationProtectionApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionDesktopApp extends WindowsInformationProtectionApp implements Parsable {
    /** The binary name. */
    private _binaryName?: string | undefined;
    /** The high binary version. */
    private _binaryVersionHigh?: string | undefined;
    /** The lower binary version. */
    private _binaryVersionLow?: string | undefined;
    /**
     * Gets the binaryName property value. The binary name.
     * @returns a string
     */
    public get binaryName() {
        return this._binaryName;
    };
    /**
     * Sets the binaryName property value. The binary name.
     * @param value Value to set for the binaryName property.
     */
    public set binaryName(value: string | undefined) {
        this._binaryName = value;
    };
    /**
     * Gets the binaryVersionHigh property value. The high binary version.
     * @returns a string
     */
    public get binaryVersionHigh() {
        return this._binaryVersionHigh;
    };
    /**
     * Sets the binaryVersionHigh property value. The high binary version.
     * @param value Value to set for the binaryVersionHigh property.
     */
    public set binaryVersionHigh(value: string | undefined) {
        this._binaryVersionHigh = value;
    };
    /**
     * Gets the binaryVersionLow property value. The lower binary version.
     * @returns a string
     */
    public get binaryVersionLow() {
        return this._binaryVersionLow;
    };
    /**
     * Sets the binaryVersionLow property value. The lower binary version.
     * @param value Value to set for the binaryVersionLow property.
     */
    public set binaryVersionLow(value: string | undefined) {
        this._binaryVersionLow = value;
    };
    /**
     * Instantiates a new WindowsInformationProtectionDesktopApp and sets the default values.
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
            "binaryName": n => { this.binaryName = n.getStringValue(); },
            "binaryVersionHigh": n => { this.binaryVersionHigh = n.getStringValue(); },
            "binaryVersionLow": n => { this.binaryVersionLow = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("binaryName", this.binaryName);
        writer.writeStringValue("binaryVersionHigh", this.binaryVersionHigh);
        writer.writeStringValue("binaryVersionLow", this.binaryVersionLow);
    };
}
