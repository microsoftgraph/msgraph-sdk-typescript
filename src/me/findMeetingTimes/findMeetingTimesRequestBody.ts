import {AttendeeBase} from '../../models/microsoft/graph/attendeeBase';
import {LocationConstraint} from '../../models/microsoft/graph/locationConstraint';
import {TimeConstraint} from '../../models/microsoft/graph/timeConstraint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FindMeetingTimesRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _attendees?: AttendeeBase[] | undefined;
    private _isOrganizerOptional?: boolean | undefined;
    private _locationConstraint?: LocationConstraint | undefined;
    private _maxCandidates?: number | undefined;
    private _meetingDuration?: string | undefined;
    private _minimumAttendeePercentage?: number | undefined;
    private _returnSuggestionReasons?: boolean | undefined;
    private _timeConstraint?: TimeConstraint | undefined;
    /**
     * Instantiates a new findMeetingTimesRequestBody and sets the default values.
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
     * Gets the attendees property value. 
     * @returns a attendeeBase
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Gets the isOrganizerOptional property value. 
     * @returns a boolean
     */
    public get isOrganizerOptional() {
        return this._isOrganizerOptional;
    };
    /**
     * Gets the locationConstraint property value. 
     * @returns a locationConstraint
     */
    public get locationConstraint() {
        return this._locationConstraint;
    };
    /**
     * Gets the maxCandidates property value. 
     * @returns a integer
     */
    public get maxCandidates() {
        return this._maxCandidates;
    };
    /**
     * Gets the meetingDuration property value. 
     * @returns a string
     */
    public get meetingDuration() {
        return this._meetingDuration;
    };
    /**
     * Gets the minimumAttendeePercentage property value. 
     * @returns a double
     */
    public get minimumAttendeePercentage() {
        return this._minimumAttendeePercentage;
    };
    /**
     * Gets the returnSuggestionReasons property value. 
     * @returns a boolean
     */
    public get returnSuggestionReasons() {
        return this._returnSuggestionReasons;
    };
    /**
     * Gets the timeConstraint property value. 
     * @returns a timeConstraint
     */
    public get timeConstraint() {
        return this._timeConstraint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["attendees", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).attendees = n.getCollectionOfObjectValues<AttendeeBase>(AttendeeBase); }],
            ["isOrganizerOptional", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).isOrganizerOptional = n.getBooleanValue(); }],
            ["locationConstraint", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).locationConstraint = n.getObjectValue<LocationConstraint>(LocationConstraint); }],
            ["maxCandidates", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).maxCandidates = n.getNumberValue(); }],
            ["meetingDuration", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).meetingDuration = n.getStringValue(); }],
            ["minimumAttendeePercentage", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).minimumAttendeePercentage = n.getNumberValue(); }],
            ["returnSuggestionReasons", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).returnSuggestionReasons = n.getBooleanValue(); }],
            ["timeConstraint", (o, n) => { (o as unknown as FindMeetingTimesRequestBody).timeConstraint = n.getObjectValue<TimeConstraint>(TimeConstraint); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AttendeeBase>("attendees", this.attendees);
        writer.writeBooleanValue("isOrganizerOptional", this.isOrganizerOptional);
        writer.writeObjectValue<LocationConstraint>("locationConstraint", this.locationConstraint);
        writer.writeNumberValue("maxCandidates", this.maxCandidates);
        writer.writeStringValue("meetingDuration", this.meetingDuration);
        writer.writeNumberValue("minimumAttendeePercentage", this.minimumAttendeePercentage);
        writer.writeBooleanValue("returnSuggestionReasons", this.returnSuggestionReasons);
        writer.writeObjectValue<TimeConstraint>("timeConstraint", this.timeConstraint);
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
     * Sets the attendees property value. 
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: AttendeeBase[] | undefined) {
        this._attendees = value;
    };
    /**
     * Sets the isOrganizerOptional property value. 
     * @param value Value to set for the isOrganizerOptional property.
     */
    public set isOrganizerOptional(value: boolean | undefined) {
        this._isOrganizerOptional = value;
    };
    /**
     * Sets the locationConstraint property value. 
     * @param value Value to set for the locationConstraint property.
     */
    public set locationConstraint(value: LocationConstraint | undefined) {
        this._locationConstraint = value;
    };
    /**
     * Sets the maxCandidates property value. 
     * @param value Value to set for the maxCandidates property.
     */
    public set maxCandidates(value: number | undefined) {
        this._maxCandidates = value;
    };
    /**
     * Sets the meetingDuration property value. 
     * @param value Value to set for the meetingDuration property.
     */
    public set meetingDuration(value: string | undefined) {
        this._meetingDuration = value;
    };
    /**
     * Sets the minimumAttendeePercentage property value. 
     * @param value Value to set for the minimumAttendeePercentage property.
     */
    public set minimumAttendeePercentage(value: number | undefined) {
        this._minimumAttendeePercentage = value;
    };
    /**
     * Sets the returnSuggestionReasons property value. 
     * @param value Value to set for the returnSuggestionReasons property.
     */
    public set returnSuggestionReasons(value: boolean | undefined) {
        this._returnSuggestionReasons = value;
    };
    /**
     * Sets the timeConstraint property value. 
     * @param value Value to set for the timeConstraint property.
     */
    public set timeConstraint(value: TimeConstraint | undefined) {
        this._timeConstraint = value;
    };
}
