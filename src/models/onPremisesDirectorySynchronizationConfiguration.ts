import {createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue} from './createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue';
import {OnPremisesAccidentalDeletionPrevention} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesDirectorySynchronizationConfiguration implements AdditionalDataHolder, Parsable {
    /** Contains the accidental deletion prevention configuration for a tenant. */
    private _accidentalDeletionPrevention?: OnPremisesAccidentalDeletionPrevention | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /**
     * Gets the accidentalDeletionPrevention property value. Contains the accidental deletion prevention configuration for a tenant.
     * @returns a onPremisesAccidentalDeletionPrevention
     */
    public get accidentalDeletionPrevention() {
        return this._accidentalDeletionPrevention;
    };
    /**
     * Sets the accidentalDeletionPrevention property value. Contains the accidental deletion prevention configuration for a tenant.
     * @param value Value to set for the accidentalDeletionPrevention property.
     */
    public set accidentalDeletionPrevention(value: OnPremisesAccidentalDeletionPrevention | undefined) {
        this._accidentalDeletionPrevention = value;
    };
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
     * Instantiates a new onPremisesDirectorySynchronizationConfiguration and sets the default values.
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
            "accidentalDeletionPrevention": n => { this.accidentalDeletionPrevention = n.getObjectValue<OnPremisesAccidentalDeletionPrevention>(createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue); },
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
        writer.writeObjectValue<OnPremisesAccidentalDeletionPrevention>("accidentalDeletionPrevention", this.accidentalDeletionPrevention);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
