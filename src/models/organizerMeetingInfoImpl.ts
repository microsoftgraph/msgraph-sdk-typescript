import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl, MeetingInfoImpl} from './index';
import {OrganizerMeetingInfo} from './organizerMeetingInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrganizerMeetingInfoImpl extends MeetingInfoImpl implements OrganizerMeetingInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The organizer property */
    public organizer?: IdentitySet | undefined;
    /**
     * Instantiates a new OrganizerMeetingInfo and sets the default values.
     * @param organizerMeetingInfoParameterValue 
     */
    public constructor(organizerMeetingInfoParameterValue?: OrganizerMeetingInfo | undefined) {
        super(organizerMeetingInfoParameterValue);
        this.additionalData = organizerMeetingInfoParameterValue?.additionalData ? organizerMeetingInfoParameterValue?.additionalData! : {};
        this.organizer = organizerMeetingInfoParameterValue?.organizer instanceof IdentitySetImpl? organizerMeetingInfoParameterValue?.organizer:new IdentitySetImpl(organizerMeetingInfoParameterValue?.organizer);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "organizer": n => { this.organizer = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.organizer){
            writer.writeObjectValue<IdentitySetImpl>("organizer", new IdentitySetImpl(this.organizer));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
