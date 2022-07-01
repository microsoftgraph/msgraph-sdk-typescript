import {Win32LobAppReturnCode} from './win32LobAppReturnCode';
import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains return code properties for a Win32 App */
export class Win32LobAppReturnCodeImpl implements Win32LobAppReturnCode {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Return code. */
    private _returnCode?: number | undefined;
    /** The type of return code. Possible values are: failed, success, softReboot, hardReboot, retry. */
    private _type?: Win32LobAppReturnCodeType | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new win32LobAppReturnCode and sets the default values.
     * @param win32LobAppReturnCodeParameterValue 
     */
    public constructor(win32LobAppReturnCodeParameterValue?: Win32LobAppReturnCode | undefined) {
        this._additionalData = win32LobAppReturnCodeParameterValue?.additionalData ? win32LobAppReturnCodeParameterValue?.additionalData! : {};
        this._returnCode = win32LobAppReturnCodeParameterValue?.returnCode;
        this._type = win32LobAppReturnCodeParameterValue?.type;
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
     * Gets the returnCode property value. Return code.
     * @returns a integer
     */
    public get returnCode() {
        return this._returnCode;
    };
    /**
     * Sets the returnCode property value. Return code.
     * @param value Value to set for the returnCode property.
     */
    public set returnCode(value: number | undefined) {
        if(value) {
            this._returnCode = value;
        }
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
    /**
     * Gets the type property value. The type of return code. Possible values are: failed, success, softReboot, hardReboot, retry.
     * @returns a win32LobAppReturnCodeType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of return code. Possible values are: failed, success, softReboot, hardReboot, retry.
     * @param value Value to set for the type property.
     */
    public set type(value: Win32LobAppReturnCodeType | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
