import {createGenericErrorFromDiscriminatorValue} from './createGenericErrorFromDiscriminatorValue';
import {GenericError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConvertIdResult implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** An error object indicating the reason for the conversion failure. This value is not present if the conversion succeeded. */
    private _errorDetails?: GenericError | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The identifier that was converted. This value is the original, un-converted identifier. */
    private _sourceId?: string | undefined;
    /** The converted identifier. This value is not present if the conversion failed. */
    private _targetId?: string | undefined;
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
     * Instantiates a new convertIdResult and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the errorDetails property value. An error object indicating the reason for the conversion failure. This value is not present if the conversion succeeded.
     * @returns a genericError
     */
    public get errorDetails() {
        return this._errorDetails;
    };
    /**
     * Sets the errorDetails property value. An error object indicating the reason for the conversion failure. This value is not present if the conversion succeeded.
     * @param value Value to set for the errorDetails property.
     */
    public set errorDetails(value: GenericError | undefined) {
        this._errorDetails = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "errorDetails": n => { this.errorDetails = n.getObjectValue<GenericError>(createGenericErrorFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
            "targetId": n => { this.targetId = n.getStringValue(); },
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
        writer.writeObjectValue<GenericError>("errorDetails", this.errorDetails);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("sourceId", this.sourceId);
        writer.writeStringValue("targetId", this.targetId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceId property value. The identifier that was converted. This value is the original, un-converted identifier.
     * @returns a string
     */
    public get sourceId() {
        return this._sourceId;
    };
    /**
     * Sets the sourceId property value. The identifier that was converted. This value is the original, un-converted identifier.
     * @param value Value to set for the sourceId property.
     */
    public set sourceId(value: string | undefined) {
        this._sourceId = value;
    };
    /**
     * Gets the targetId property value. The converted identifier. This value is not present if the conversion failed.
     * @returns a string
     */
    public get targetId() {
        return this._targetId;
    };
    /**
     * Sets the targetId property value. The converted identifier. This value is not present if the conversion failed.
     * @param value Value to set for the targetId property.
     */
    public set targetId(value: string | undefined) {
        this._targetId = value;
    };
}
