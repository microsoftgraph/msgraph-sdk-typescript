import {MobileLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsMobileMSI extends MobileLobApp implements Parsable {
    /** The command line. */
    private _commandLine?: string | undefined;
    /** A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature. */
    private _ignoreVersionDetection?: boolean | undefined;
    /** The product code. */
    private _productCode?: string | undefined;
    /** The product version of Windows Mobile MSI Line of Business (LoB) app. */
    private _productVersion?: string | undefined;
    /**
     * Gets the commandLine property value. The command line.
     * @returns a string
     */
    public get commandLine() {
        return this._commandLine;
    };
    /**
     * Sets the commandLine property value. The command line.
     * @param value Value to set for the commandLine property.
     */
    public set commandLine(value: string | undefined) {
        this._commandLine = value;
    };
    /**
     * Instantiates a new WindowsMobileMSI and sets the default values.
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
            "commandLine": n => { this.commandLine = n.getStringValue(); },
            "ignoreVersionDetection": n => { this.ignoreVersionDetection = n.getBooleanValue(); },
            "productCode": n => { this.productCode = n.getStringValue(); },
            "productVersion": n => { this.productVersion = n.getStringValue(); },
        };
    };
    /**
     * Gets the ignoreVersionDetection property value. A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature.
     * @returns a boolean
     */
    public get ignoreVersionDetection() {
        return this._ignoreVersionDetection;
    };
    /**
     * Sets the ignoreVersionDetection property value. A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature.
     * @param value Value to set for the ignoreVersionDetection property.
     */
    public set ignoreVersionDetection(value: boolean | undefined) {
        this._ignoreVersionDetection = value;
    };
    /**
     * Gets the productCode property value. The product code.
     * @returns a string
     */
    public get productCode() {
        return this._productCode;
    };
    /**
     * Sets the productCode property value. The product code.
     * @param value Value to set for the productCode property.
     */
    public set productCode(value: string | undefined) {
        this._productCode = value;
    };
    /**
     * Gets the productVersion property value. The product version of Windows Mobile MSI Line of Business (LoB) app.
     * @returns a string
     */
    public get productVersion() {
        return this._productVersion;
    };
    /**
     * Sets the productVersion property value. The product version of Windows Mobile MSI Line of Business (LoB) app.
     * @param value Value to set for the productVersion property.
     */
    public set productVersion(value: string | undefined) {
        this._productVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("commandLine", this.commandLine);
        writer.writeBooleanValue("ignoreVersionDetection", this.ignoreVersionDetection);
        writer.writeStringValue("productCode", this.productCode);
        writer.writeStringValue("productVersion", this.productVersion);
    };
}
