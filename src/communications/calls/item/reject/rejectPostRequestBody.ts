import {RejectReason} from '../../../../models/rejectReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RejectPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The callbackUri property */
    private _callbackUri?: string | undefined;
    /** The reason property */
    private _reason?: RejectReason | undefined;
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
     * Gets the callbackUri property value. The callbackUri property
     * @returns a string
     */
    public get callbackUri() {
        return this._callbackUri;
    };
    /**
     * Sets the callbackUri property value. The callbackUri property
     * @param value Value to set for the callbackUri property.
     */
    public set callbackUri(value: string | undefined) {
        this._callbackUri = value;
    };
    /**
     * Instantiates a new rejectPostRequestBody and sets the default values.
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
            "callbackUri": n => { this.callbackUri = n.getStringValue(); },
            "reason": n => { this.reason = n.getEnumValue<RejectReason>(RejectReason); },
        };
    };
    /**
     * Gets the reason property value. The reason property
     * @returns a rejectReason
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. The reason property
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
