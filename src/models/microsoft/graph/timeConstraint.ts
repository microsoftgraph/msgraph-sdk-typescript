import {ActivityDomain} from './activityDomain';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeConstraint implements Parsable {
    /** The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.  */
    private _activityDomain?: ActivityDomain | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _timeSlots?: TimeSlot[] | undefined;
    /**
     * Instantiates a new timeConstraint and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the activityDomain property value. The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.
     * @returns a activityDomain
     */
    public get activityDomain() {
        return this._activityDomain;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the timeSlots property value. 
     * @returns a timeSlot
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["activityDomain", (o, n) => { (o as unknown as TimeConstraint).activityDomain = n.getEnumValue<ActivityDomain>(ActivityDomain); }],
            ["timeSlots", (o, n) => { (o as unknown as TimeConstraint).timeSlots = n.getCollectionOfObjectValues<TimeSlot>(TimeSlot); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ActivityDomain>("activityDomain", this.activityDomain);
        writer.writeCollectionOfObjectValues<TimeSlot>("timeSlots", this.timeSlots);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the activityDomain property value. The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.
     * @param value Value to set for the activityDomain property.
     */
    public set activityDomain(value: ActivityDomain | undefined) {
        this._activityDomain = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the timeSlots property value. 
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: TimeSlot[] | undefined) {
        this._timeSlots = value;
    };
}
