import {Win32LobAppReturnCode} from './win32LobAppReturnCode';
import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains return code properties for a Win32 App */
export class Win32LobAppReturnCodeImpl implements Win32LobAppReturnCode {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Return code. */
    public returnCode?: number | undefined;
    /** The type of return code. Possible values are: failed, success, softReboot, hardReboot, retry. */
    public type?: Win32LobAppReturnCodeType | undefined;
    /**
     * Instantiates a new win32LobAppReturnCode and sets the default values.
     * @param win32LobAppReturnCodeParameterValue 
     */
    public constructor(win32LobAppReturnCodeParameterValue?: Win32LobAppReturnCode | undefined) {
        this.additionalData = win32LobAppReturnCodeParameterValue?.additionalData ? win32LobAppReturnCodeParameterValue?.additionalData! : {};
        this.returnCode = win32LobAppReturnCodeParameterValue?.returnCode;
        this.type = win32LobAppReturnCodeParameterValue?.type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "returnCode": n => { this.returnCode = n.getNumberValue(); },
            "type": n => { this.type = n.getEnumValue<Win32LobAppReturnCodeType>(Win32LobAppReturnCodeType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.returnCode){
            writer.writeNumberValue("returnCode", this.returnCode);
        }
        if(this.type){
            writer.writeEnumValue<Win32LobAppReturnCodeType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
