import {RejectReason} from '../../../../models/microsoft/graph/rejectReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reject method.  */
export class RejectRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _callbackUri?: string | undefined;
    private _reason?: RejectReason | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the callbackUri property value. 
     * @returns a string
     */
    public get callbackUri() {
        return this._callbackUri;
    };
    /**
     * Sets the callbackUri property value. 
     * @param value Value to set for the callbackUri property.
     */
    public set callbackUri(value: string | undefined) {
        this._callbackUri = value;
    };
    /**
     * Instantiates a new rejectRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["callbackUri", (o, n) => { (o as unknown as RejectRequestBody).callbackUri = n.getStringValue(); }],
            ["reason", (o, n) => { (o as unknown as RejectRequestBody).reason = n.getEnumValue<RejectReason>(RejectReason); }],
        ]);
    };
    /**
     * Gets the reason property value. 
     * @returns a rejectReason
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. 
     * @param value Value to set for the reason property.
     */
    public set reason(value: RejectReason | undefined) {
        this._reason = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeEnumValue<RejectReason>("reason", this.reason);
        writer.writeAdditionalData(this.additionalData);
    };
}
