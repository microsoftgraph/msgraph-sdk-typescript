import {ScheduleChangeRequestImpl} from './index';
import {OfferShiftRequest} from './offerShiftRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OfferShiftRequestImpl extends ScheduleChangeRequestImpl implements OfferShiftRequest, Parsable {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public recipientActionDateTime?: Date | undefined;
    /** Custom message sent by recipient of the offer shift request. */
    public recipientActionMessage?: string | undefined;
    /** User id of the recipient of the offer shift request. */
    public recipientUserId?: string | undefined;
    /** User id of the sender of the offer shift request. */
    public senderShiftId?: string | undefined;
    /**
     * Instantiates a new offerShiftRequest and sets the default values.
     * @param offerShiftRequestParameterValue 
     */
    public constructor(offerShiftRequestParameterValue?: OfferShiftRequest | undefined) {
        super();
        this.recipientActionDateTime = offerShiftRequestParameterValue?.recipientActionDateTime ;
        this.recipientActionMessage = offerShiftRequestParameterValue?.recipientActionMessage ;
        this.recipientUserId = offerShiftRequestParameterValue?.recipientUserId ;
        this.senderShiftId = offerShiftRequestParameterValue?.senderShiftId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "recipientActionDateTime": n => { this.recipientActionDateTime = n.getDateValue(); },
            "recipientActionMessage": n => { this.recipientActionMessage = n.getStringValue(); },
            "recipientUserId": n => { this.recipientUserId = n.getStringValue(); },
            "senderShiftId": n => { this.senderShiftId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.recipientActionDateTime){
        writer.writeDateValue("recipientActionDateTime", this.recipientActionDateTime);
        }
        if(this.recipientActionMessage){
        writer.writeStringValue("recipientActionMessage", this.recipientActionMessage);
        }
        if(this.recipientUserId){
        writer.writeStringValue("recipientUserId", this.recipientUserId);
        }
        if(this.senderShiftId){
        writer.writeStringValue("senderShiftId", this.senderShiftId);
        }
    };
}
