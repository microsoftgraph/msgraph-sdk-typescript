import {IdentitySet} from './identitySet';
import {RecordingStatus} from './recordingStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecordingInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The identities of recording initiator.  */
    private _initiator?: IdentitySet | undefined;
    /** Possible values are: unknown, notRecording, recording, or failed.  */
    private _recordingStatus?: RecordingStatus | undefined;
    /**
     * Instantiates a new recordingInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the initiator property value. The identities of recording initiator.
     * @returns a identitySet
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Gets the recordingStatus property value. Possible values are: unknown, notRecording, recording, or failed.
     * @returns a recordingStatus
     */
    public get recordingStatus() {
        return this._recordingStatus;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["initiator", (o, n) => { (o as unknown as RecordingInfo).initiator = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["recordingStatus", (o, n) => { (o as unknown as RecordingInfo).recordingStatus = n.getEnumValue<RecordingStatus>(RecordingStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeEnumValue<RecordingStatus>("recordingStatus", this.recordingStatus);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the initiator property value. The identities of recording initiator.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        this._initiator = value;
    };
    /**
     * Sets the recordingStatus property value. Possible values are: unknown, notRecording, recording, or failed.
     * @param value Value to set for the recordingStatus property.
     */
    public set recordingStatus(value: RecordingStatus | undefined) {
        this._recordingStatus = value;
    };
}
