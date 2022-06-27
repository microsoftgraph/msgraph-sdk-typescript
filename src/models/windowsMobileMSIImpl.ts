import {MobileLobAppImpl} from './index';
import {WindowsMobileMSI} from './windowsMobileMSI';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsMobileMSIImpl extends MobileLobAppImpl implements WindowsMobileMSI {
    /** The command line. */
    public commandLine?: string | undefined;
    /** A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature. */
    public ignoreVersionDetection?: boolean | undefined;
    /** The product code. */
    public productCode?: string | undefined;
    /** The product version of Windows Mobile MSI Line of Business (LoB) app. */
    public productVersion?: string | undefined;
    /**
     * Instantiates a new WindowsMobileMSI and sets the default values.
     * @param windowsMobileMSIParameterValue 
     */
    public constructor(windowsMobileMSIParameterValue?: WindowsMobileMSI | undefined) {
        super(windowsMobileMSIParameterValue);
        this.commandLine = windowsMobileMSIParameterValue?.commandLine;
        this.ignoreVersionDetection = windowsMobileMSIParameterValue?.ignoreVersionDetection;
        this.productCode = windowsMobileMSIParameterValue?.productCode;
        this.productVersion = windowsMobileMSIParameterValue?.productVersion;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.commandLine){
            writer.writeStringValue("commandLine", this.commandLine);
        }
        if(this.ignoreVersionDetection){
            writer.writeBooleanValue("ignoreVersionDetection", this.ignoreVersionDetection);
        }
        if(this.productCode){
            writer.writeStringValue("productCode", this.productCode);
        }
        if(this.productVersion){
            writer.writeStringValue("productVersion", this.productVersion);
        }
    };
}
