import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {RecordingInfo} from './recordingInfo';
import {RecordingStatus} from './recordingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecordingInfoImpl implements RecordingInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The identities of recording initiator. */
    private _initiator?: IdentitySet | undefined;
    /** Possible values are: unknown, notRecording, recording, or failed. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new recordingInfo and sets the default values.
     * @param recordingInfoParameterValue 
     */
    public constructor(recordingInfoParameterValue?: RecordingInfo | undefined) {
        this._additionalData = recordingInfoParameterValue?.additionalData ? recordingInfoParameterValue?.additionalData! : {};
        this._initiator = recordingInfoParameterValue?.initiator;
        this._recordingStatus = recordingInfoParameterValue?.recordingStatus;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "recordingStatus": n => { this.recordingStatus = n.getEnumValue<RecordingStatus>(RecordingStatus); },
        };
    };
    /**
     * Gets the initiator property value. The identities of recording initiator.
     * @returns a IdentitySetInterface
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. The identities of recording initiator.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        if(value) {
            this._initiator = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the recordingStatus property value. Possible values are: unknown, notRecording, recording, or failed.
     * @returns a recordingStatus
     */
    public get recordingStatus() {
        return this._recordingStatus;
    };
    /**
     * Sets the recordingStatus property value. Possible values are: unknown, notRecording, recording, or failed.
     * @param value Value to set for the recordingStatus property.
     */
    public set recordingStatus(value: RecordingStatus | undefined) {
        if(value) {
            this._recordingStatus = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", (!this.initiator || this.initiator instanceof IdentitySetImpl? this.initiator : new IdentitySetImpl(this.initiator)));
        }
        if(this.recordingStatus){
            writer.writeEnumValue<RecordingStatus>("recordingStatus", this.recordingStatus);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
