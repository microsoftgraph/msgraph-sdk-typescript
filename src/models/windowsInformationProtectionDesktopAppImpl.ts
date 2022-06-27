import {WindowsInformationProtectionAppImpl} from './index';
import {WindowsInformationProtectionDesktopApp} from './windowsInformationProtectionDesktopApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionDesktopAppImpl extends WindowsInformationProtectionAppImpl implements WindowsInformationProtectionDesktopApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The binary name. */
    public binaryName?: string | undefined;
    /** The high binary version. */
    public binaryVersionHigh?: string | undefined;
    /** The lower binary version. */
    public binaryVersionLow?: string | undefined;
    /**
     * Instantiates a new WindowsInformationProtectionDesktopApp and sets the default values.
     * @param windowsInformationProtectionDesktopAppParameterValue 
     */
    public constructor(windowsInformationProtectionDesktopAppParameterValue?: WindowsInformationProtectionDesktopApp | undefined) {
        super(windowsInformationProtectionDesktopAppParameterValue);
        this.additionalData = windowsInformationProtectionDesktopAppParameterValue?.additionalData ? windowsInformationProtectionDesktopAppParameterValue?.additionalData! : {};
        this.binaryName = windowsInformationProtectionDesktopAppParameterValue?.binaryName;
        this.binaryVersionHigh = windowsInformationProtectionDesktopAppParameterValue?.binaryVersionHigh;
        this.binaryVersionLow = windowsInformationProtectionDesktopAppParameterValue?.binaryVersionLow;
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
        if(this.binaryName){
            writer.writeStringValue("binaryName", this.binaryName);
        }
        if(this.binaryVersionHigh){
            writer.writeStringValue("binaryVersionHigh", this.binaryVersionHigh);
        }
        if(this.binaryVersionLow){
            writer.writeStringValue("binaryVersionLow", this.binaryVersionLow);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
