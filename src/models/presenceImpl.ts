import {EntityImpl} from './index';
import {Presence} from './presence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class PresenceImpl extends EntityImpl implements Parsable, Presence {
    /** The supplemental information to a user's availability. Possible values are Available, Away, BeRightBack, Busy, DoNotDisturb, InACall, InAConferenceCall, Inactive,InAMeeting, Offline, OffWork,OutOfOffice, PresenceUnknown,Presenting, UrgentInterruptionsOnly. */
    public activity?: string | undefined;
    /** The base presence information for a user. Possible values are Available, AvailableIdle,  Away, BeRightBack, Busy, BusyIdle, DoNotDisturb, Offline, PresenceUnknown */
    public availability?: string | undefined;
    /**
     * Instantiates a new presence and sets the default values.
     * @param presenceParameterValue 
     */
    public constructor(presenceParameterValue?: Presence | undefined) {
        super();
        this.activity = presenceParameterValue?.activity ;
        this.availability = presenceParameterValue?.availability ;
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
        if(this.activity){
        writer.writeStringValue("activity", this.activity);
        }
        if(this.availability){
        writer.writeStringValue("availability", this.availability);
        }
    };
}
