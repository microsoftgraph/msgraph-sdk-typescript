import {Win32LobAppReturnCodeType} from './win32LobAppReturnCodeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains return code properties for a Win32 App
 */
export class Win32LobAppReturnCode implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _odataType?: string | undefined;
    /** Return code. */
    private _returnCode?: number | undefined;
    /** Indicates the type of return code. */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new win32LobAppReturnCode and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "returnCode": n => { this.returnCode = n.getNumberValue(); },
            "type": n => { this.type = n.getEnumValue<Win32LobAppReturnCodeType>(Win32LobAppReturnCodeType); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
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
        this._returnCode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("returnCode", this.returnCode);
        writer.writeEnumValue<Win32LobAppReturnCodeType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Indicates the type of return code.
     * @returns a win32LobAppReturnCodeType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Indicates the type of return code.
     * @param value Value to set for the type property.
     */
    public set type(value: Win32LobAppReturnCodeType | undefined) {
        this._type = value;
    };
}
