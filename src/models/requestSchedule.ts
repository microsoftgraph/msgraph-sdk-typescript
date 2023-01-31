import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {ExpirationPattern, PatternedRecurrence} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequestSchedule implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** When the eligible or active assignment expires. */
    private _expiration?: ExpirationPattern | undefined;
    private _odataType?: string | undefined;
    /** The frequency of the  eligible or active assignment. This property is currently unsupported in PIM. */
    private _recurrence?: PatternedRecurrence | undefined;
    /** When the  eligible or active assignment becomes active. */
    private _startDateTime?: Date | undefined;
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
     * Instantiates a new requestSchedule and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expiration property value. When the eligible or active assignment expires.
     * @returns a expirationPattern
     */
    public get expiration() {
        return this._expiration;
    };
    /**
     * Sets the expiration property value. When the eligible or active assignment expires.
     * @param value Value to set for the expiration property.
     */
    public set expiration(value: ExpirationPattern | undefined) {
        this._expiration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expiration": n => { this.expiration = n.getObjectValue<ExpirationPattern>(createExpirationPatternFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
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
     * Gets the recurrence property value. The frequency of the  eligible or active assignment. This property is currently unsupported in PIM.
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The frequency of the  eligible or active assignment. This property is currently unsupported in PIM.
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ExpirationPattern>("expiration", this.expiration);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. When the  eligible or active assignment becomes active.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. When the  eligible or active assignment becomes active.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
