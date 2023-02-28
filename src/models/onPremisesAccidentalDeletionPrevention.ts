import {OnPremisesDirectorySynchronizationDeletionPreventionType} from './onPremisesDirectorySynchronizationDeletionPreventionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesAccidentalDeletionPrevention implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Threshold value which triggers accidental deletion prevention. The threshold is either an absolute number of objects or a percentage number of objects. */
    private _alertThreshold?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The status of the accidental deletion prevention feature. The possible values are: disabled, enabledForCount, enabledForPercentage, unknownFutureValue. */
    private _synchronizationPreventionType?: OnPremisesDirectorySynchronizationDeletionPreventionType | undefined;
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
     * Gets the alertThreshold property value. Threshold value which triggers accidental deletion prevention. The threshold is either an absolute number of objects or a percentage number of objects.
     * @returns a integer
     */
    public get alertThreshold() {
        return this._alertThreshold;
    };
    /**
     * Sets the alertThreshold property value. Threshold value which triggers accidental deletion prevention. The threshold is either an absolute number of objects or a percentage number of objects.
     * @param value Value to set for the alertThreshold property.
     */
    public set alertThreshold(value: number | undefined) {
        this._alertThreshold = value;
    };
    /**
     * Instantiates a new onPremisesAccidentalDeletionPrevention and sets the default values.
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
            "alertThreshold": n => { this.alertThreshold = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "synchronizationPreventionType": n => { this.synchronizationPreventionType = n.getEnumValue<OnPremisesDirectorySynchronizationDeletionPreventionType>(OnPremisesDirectorySynchronizationDeletionPreventionType); },
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
        writer.writeNumberValue("alertThreshold", this.alertThreshold);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<OnPremisesDirectorySynchronizationDeletionPreventionType>("synchronizationPreventionType", this.synchronizationPreventionType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the synchronizationPreventionType property value. The status of the accidental deletion prevention feature. The possible values are: disabled, enabledForCount, enabledForPercentage, unknownFutureValue.
     * @returns a onPremisesDirectorySynchronizationDeletionPreventionType
     */
    public get synchronizationPreventionType() {
        return this._synchronizationPreventionType;
    };
    /**
     * Sets the synchronizationPreventionType property value. The status of the accidental deletion prevention feature. The possible values are: disabled, enabledForCount, enabledForPercentage, unknownFutureValue.
     * @param value Value to set for the synchronizationPreventionType property.
     */
    public set synchronizationPreventionType(value: OnPremisesDirectorySynchronizationDeletionPreventionType | undefined) {
        this._synchronizationPreventionType = value;
    };
}
