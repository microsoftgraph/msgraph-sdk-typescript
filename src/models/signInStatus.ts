import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Provides additional details on the sign-in activity */
    private _additionalDetails?: string | undefined;
    /** Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages. */
    private _errorCode?: number | undefined;
    /** Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages. */
    private _failureReason?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Gets the additionalDetails property value. Provides additional details on the sign-in activity
     * @returns a string
     */
    public get additionalDetails() {
        return this._additionalDetails;
    };
    /**
     * Sets the additionalDetails property value. Provides additional details on the sign-in activity
     * @param value Value to set for the additionalDetails property.
     */
    public set additionalDetails(value: string | undefined) {
        this._additionalDetails = value;
    };
    /**
     * Instantiates a new signInStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.signInStatus";
    };
    /**
     * Gets the errorCode property value. Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages.
     * @returns a integer
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and messages.
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: number | undefined) {
        this._errorCode = value;
    };
    /**
     * Gets the failureReason property value. Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages.
     * @returns a string
     */
    public get failureReason() {
        return this._failureReason;
    };
    /**
     * Sets the failureReason property value. Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of error codes and messages.
     * @param value Value to set for the failureReason property.
     */
    public set failureReason(value: string | undefined) {
        this._failureReason = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "additionalDetails": n => { this.additionalDetails = n.getStringValue(); },
            "errorCode": n => { this.errorCode = n.getNumberValue(); },
            "failureReason": n => { this.failureReason = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("additionalDetails", this.additionalDetails);
        writer.writeNumberValue("errorCode", this.errorCode);
        writer.writeStringValue("failureReason", this.failureReason);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
