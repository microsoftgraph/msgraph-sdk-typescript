import {CallRecord} from './callRecords/';
import {createCallRecordFromDiscriminatorValue} from './callRecords/createCallRecordFromDiscriminatorValue';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {Call, OnlineMeeting, Presence} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudCommunications implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The callRecords property */
    private _callRecords?: CallRecord[] | undefined;
    /** The calls property */
    private _calls?: Call[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The onlineMeetings property */
    private _onlineMeetings?: OnlineMeeting[] | undefined;
    /** The presences property */
    private _presences?: Presence[] | undefined;
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
     * Gets the callRecords property value. The callRecords property
     * @returns a callRecord
     */
    public get callRecords() {
        return this._callRecords;
    };
    /**
     * Sets the callRecords property value. The callRecords property
     * @param value Value to set for the callRecords property.
     */
    public set callRecords(value: CallRecord[] | undefined) {
        this._callRecords = value;
    };
    /**
     * Gets the calls property value. The calls property
     * @returns a call
     */
    public get calls() {
        return this._calls;
    };
    /**
     * Sets the calls property value. The calls property
     * @param value Value to set for the calls property.
     */
    public set calls(value: Call[] | undefined) {
        this._calls = value;
    };
    /**
     * Instantiates a new CloudCommunications and sets the default values.
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
            "callRecords": n => { this.callRecords = n.getCollectionOfObjectValues<CallRecord>(createCallRecordFromDiscriminatorValue); },
            "calls": n => { this.calls = n.getCollectionOfObjectValues<Call>(createCallFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "onlineMeetings": n => { this.onlineMeetings = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); },
            "presences": n => { this.presences = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); },
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
     * Gets the onlineMeetings property value. The onlineMeetings property
     * @returns a onlineMeeting
     */
    public get onlineMeetings() {
        return this._onlineMeetings;
    };
    /**
     * Sets the onlineMeetings property value. The onlineMeetings property
     * @param value Value to set for the onlineMeetings property.
     */
    public set onlineMeetings(value: OnlineMeeting[] | undefined) {
        this._onlineMeetings = value;
    };
    /**
     * Gets the presences property value. The presences property
     * @returns a presence
     */
    public get presences() {
        return this._presences;
    };
    /**
     * Sets the presences property value. The presences property
     * @param value Value to set for the presences property.
     */
    public set presences(value: Presence[] | undefined) {
        this._presences = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<CallRecord>("callRecords", this.callRecords);
        writer.writeCollectionOfObjectValues<Call>("calls", this.calls);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<OnlineMeeting>("onlineMeetings", this.onlineMeetings);
        writer.writeCollectionOfObjectValues<Presence>("presences", this.presences);
        writer.writeAdditionalData(this.additionalData);
    };
}
