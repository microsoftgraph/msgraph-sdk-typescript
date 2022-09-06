import {createMeetingTimeSuggestionFromDiscriminatorValue} from './createMeetingTimeSuggestionFromDiscriminatorValue';
import {MeetingTimeSuggestion} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingTimeSuggestionsResult implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions. */
    private _emptySuggestionsReason?: string | undefined;
    /** An array of meeting suggestions. */
    private _meetingTimeSuggestions?: MeetingTimeSuggestion[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new meetingTimeSuggestionsResult and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.meetingTimeSuggestionsResult";
    };
    /**
     * Gets the emptySuggestionsReason property value. A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.
     * @returns a string
     */
    public get emptySuggestionsReason() {
        return this._emptySuggestionsReason;
    };
    /**
     * Sets the emptySuggestionsReason property value. A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.
     * @param value Value to set for the emptySuggestionsReason property.
     */
    public set emptySuggestionsReason(value: string | undefined) {
        this._emptySuggestionsReason = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "emptySuggestionsReason": n => { this.emptySuggestionsReason = n.getStringValue(); },
            "meetingTimeSuggestions": n => { this.meetingTimeSuggestions = n.getCollectionOfObjectValues<MeetingTimeSuggestion>(createMeetingTimeSuggestionFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the meetingTimeSuggestions property value. An array of meeting suggestions.
     * @returns a meetingTimeSuggestion
     */
    public get meetingTimeSuggestions() {
        return this._meetingTimeSuggestions;
    };
    /**
     * Sets the meetingTimeSuggestions property value. An array of meeting suggestions.
     * @param value Value to set for the meetingTimeSuggestions property.
     */
    public set meetingTimeSuggestions(value: MeetingTimeSuggestion[] | undefined) {
        this._meetingTimeSuggestions = value;
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
        writer.writeStringValue("emptySuggestionsReason", this.emptySuggestionsReason);
        writer.writeCollectionOfObjectValues<MeetingTimeSuggestion>("meetingTimeSuggestions", this.meetingTimeSuggestions);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
