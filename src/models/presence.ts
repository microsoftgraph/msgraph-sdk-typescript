import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Presence extends Entity implements Parsable {
    /** The supplemental information to a user's availability. Possible values are Available, Away, BeRightBack, Busy, DoNotDisturb, InACall, InAConferenceCall, Inactive,InAMeeting, Offline, OffWork,OutOfOffice, PresenceUnknown,Presenting, UrgentInterruptionsOnly. */
    private _activity?: string | undefined;
    /** The base presence information for a user. Possible values are Available, AvailableIdle,  Away, BeRightBack, Busy, BusyIdle, DoNotDisturb, Offline, PresenceUnknown */
    private _availability?: string | undefined;
    /**
     * Gets the activity property value. The supplemental information to a user's availability. Possible values are Available, Away, BeRightBack, Busy, DoNotDisturb, InACall, InAConferenceCall, Inactive,InAMeeting, Offline, OffWork,OutOfOffice, PresenceUnknown,Presenting, UrgentInterruptionsOnly.
     * @returns a string
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The supplemental information to a user's availability. Possible values are Available, Away, BeRightBack, Busy, DoNotDisturb, InACall, InAConferenceCall, Inactive,InAMeeting, Offline, OffWork,OutOfOffice, PresenceUnknown,Presenting, UrgentInterruptionsOnly.
     * @param value Value to set for the activity property.
     */
    public set activity(value: string | undefined) {
        this._activity = value;
    };
    /**
     * Gets the availability property value. The base presence information for a user. Possible values are Available, AvailableIdle,  Away, BeRightBack, Busy, BusyIdle, DoNotDisturb, Offline, PresenceUnknown
     * @returns a string
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. The base presence information for a user. Possible values are Available, AvailableIdle,  Away, BeRightBack, Busy, BusyIdle, DoNotDisturb, Offline, PresenceUnknown
     * @param value Value to set for the availability property.
     */
    public set availability(value: string | undefined) {
        this._availability = value;
    };
    /**
     * Instantiates a new presence and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.presence";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activity": n => { this.activity = n.getStringValue(); },
            "availability": n => { this.availability = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("activity", this.activity);
        writer.writeStringValue("availability", this.availability);
    };
}
