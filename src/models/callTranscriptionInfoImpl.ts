import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {CallTranscriptionState} from './callTranscriptionState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallTranscriptionInfoImpl implements CallTranscriptionInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The state modified time in UTC. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Possible values are: notStarted, active, inactive. */
    private _state?: CallTranscriptionState | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new callTranscriptionInfo and sets the default values.
     * @param callTranscriptionInfoParameterValue 
     */
    public constructor(callTranscriptionInfoParameterValue?: CallTranscriptionInfo | undefined) {
        this._additionalData = callTranscriptionInfoParameterValue?.additionalData ? callTranscriptionInfoParameterValue?.additionalData! : {};
        this._lastModifiedDateTime = callTranscriptionInfoParameterValue?.lastModifiedDateTime;
        this._state = callTranscriptionInfoParameterValue?.state;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<CallTranscriptionState>(CallTranscriptionState); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The state modified time in UTC.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The state modified time in UTC.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.state){
            writer.writeEnumValue<CallTranscriptionState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. Possible values are: notStarted, active, inactive.
     * @returns a callTranscriptionState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Possible values are: notStarted, active, inactive.
     * @param value Value to set for the state property.
     */
    public set state(value: CallTranscriptionState | undefined) {
        if(value) {
            this._state = value;
        }
    };
}
