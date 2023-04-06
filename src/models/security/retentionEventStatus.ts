import {PublicError} from '../';
import {createPublicErrorFromDiscriminatorValue} from '../createPublicErrorFromDiscriminatorValue';
import {EventStatusType} from './eventStatusType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RetentionEventStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The error if the status is not successful. */
    private _errorEscaped?: PublicError | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The status of the distribution. The possible values are: pending, error, success, notAvaliable. */
    private _status?: EventStatusType | undefined;
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
     * Instantiates a new retentionEventStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the error property value. The error if the status is not successful.
     * @returns a publicError
     */
    public get errorEscaped() {
        return this._errorEscaped;
    };
    /**
     * Sets the error property value. The error if the status is not successful.
     * @param value Value to set for the errorEscaped property.
     */
    public set errorEscaped(value: PublicError | undefined) {
        this._errorEscaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error": n => { this.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<EventStatusType>(EventStatusType); },
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
        writer.writeObjectValue<PublicError>("error", this.errorEscaped);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<EventStatusType>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. The status of the distribution. The possible values are: pending, error, success, notAvaliable.
     * @returns a eventStatusType
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the distribution. The possible values are: pending, error, success, notAvaliable.
     * @param value Value to set for the status property.
     */
    public set status(value: EventStatusType | undefined) {
        this._status = value;
    };
}
