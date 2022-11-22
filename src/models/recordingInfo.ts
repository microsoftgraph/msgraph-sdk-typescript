import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {RecordingStatus} from './recordingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecordingInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The identities of the recording initiator. */
    private _initiator?: IdentitySet | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The recordingStatus property */
    private _recordingStatus?: RecordingStatus | undefined;
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
     * Instantiates a new recordingInfo and sets the default values.
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
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "recordingStatus": n => { this.recordingStatus = n.getEnumValue<RecordingStatus>(RecordingStatus); },
        };
    };
    /**
     * Gets the initiator property value. The identities of the recording initiator.
     * @returns a identitySet
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. The identities of the recording initiator.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        this._initiator = value;
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
     * Gets the recordingStatus property value. The recordingStatus property
     * @returns a recordingStatus
     */
    public get recordingStatus() {
        return this._recordingStatus;
    };
    /**
     * Sets the recordingStatus property value. The recordingStatus property
     * @param value Value to set for the recordingStatus property.
     */
    public set recordingStatus(value: RecordingStatus | undefined) {
        this._recordingStatus = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeEnumValue<RecordingStatus>("recordingStatus", this.recordingStatus);
        writer.writeAdditionalData(this.additionalData);
    };
}
