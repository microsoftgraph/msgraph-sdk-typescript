import {WeakAlgorithms} from './weakAlgorithms';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequestSignatureVerification implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _allowedWeakAlgorithms?: WeakAlgorithms | undefined;
    private _isSignedRequestRequired?: boolean | undefined;
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
     * Gets the allowedWeakAlgorithms property value. 
     * @returns a weakAlgorithms
     */
    public get allowedWeakAlgorithms() {
        return this._allowedWeakAlgorithms;
    };
    /**
     * Sets the allowedWeakAlgorithms property value. 
     * @param value Value to set for the allowedWeakAlgorithms property.
     */
    public set allowedWeakAlgorithms(value: WeakAlgorithms | undefined) {
        this._allowedWeakAlgorithms = value;
    };
    /**
     * Instantiates a new requestSignatureVerification and sets the default values.
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
            "allowedWeakAlgorithms": n => { this.allowedWeakAlgorithms = n.getEnumValue<WeakAlgorithms>(WeakAlgorithms); },
            "isSignedRequestRequired": n => { this.isSignedRequestRequired = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isSignedRequestRequired property value. 
     * @returns a boolean
     */
    public get isSignedRequestRequired() {
        return this._isSignedRequestRequired;
    };
    /**
     * Sets the isSignedRequestRequired property value. 
     * @param value Value to set for the isSignedRequestRequired property.
     */
    public set isSignedRequestRequired(value: boolean | undefined) {
        this._isSignedRequestRequired = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<WeakAlgorithms>("allowedWeakAlgorithms", this.allowedWeakAlgorithms);
        writer.writeBooleanValue("isSignedRequestRequired", this.isSignedRequestRequired);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
