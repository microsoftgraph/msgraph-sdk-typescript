import {ScheduleChangeRequestImpl} from './index';
import {OfferShiftRequest} from './offerShiftRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OfferShiftRequestImpl extends ScheduleChangeRequestImpl implements OfferShiftRequest {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _recipientActionDateTime?: Date | undefined;
    /** Custom message sent by recipient of the offer shift request. */
    private _recipientActionMessage?: string | undefined;
    /** User id of the recipient of the offer shift request. */
    private _recipientUserId?: string | undefined;
    /** User id of the sender of the offer shift request. */
    private _senderShiftId?: string | undefined;
    /**
     * Instantiates a new OfferShiftRequest and sets the default values.
     * @param offerShiftRequestParameterValue 
     */
    public constructor(offerShiftRequestParameterValue?: OfferShiftRequest | undefined) {
        super(offerShiftRequestParameterValue);
        this._recipientActionDateTime = offerShiftRequestParameterValue?.recipientActionDateTime;
        this._recipientActionMessage = offerShiftRequestParameterValue?.recipientActionMessage;
        this._recipientUserId = offerShiftRequestParameterValue?.recipientUserId;
        this._senderShiftId = offerShiftRequestParameterValue?.senderShiftId;
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
     * Gets the recipientActionDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get recipientActionDateTime() {
        return this._recipientActionDateTime;
    };
    /**
     * Sets the recipientActionDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the recipientActionDateTime property.
     */
    public set recipientActionDateTime(value: Date | undefined) {
        if(value) {
            this._recipientActionDateTime = value;
        }
    };
    /**
     * Gets the recipientActionMessage property value. Custom message sent by recipient of the offer shift request.
     * @returns a string
     */
    public get recipientActionMessage() {
        return this._recipientActionMessage;
    };
    /**
     * Sets the recipientActionMessage property value. Custom message sent by recipient of the offer shift request.
     * @param value Value to set for the recipientActionMessage property.
     */
    public set recipientActionMessage(value: string | undefined) {
        if(value) {
            this._recipientActionMessage = value;
        }
    };
    /**
     * Gets the recipientUserId property value. User id of the recipient of the offer shift request.
     * @returns a string
     */
    public get recipientUserId() {
        return this._recipientUserId;
    };
    /**
     * Sets the recipientUserId property value. User id of the recipient of the offer shift request.
     * @param value Value to set for the recipientUserId property.
     */
    public set recipientUserId(value: string | undefined) {
        if(value) {
            this._recipientUserId = value;
        }
    };
    /**
     * Gets the senderShiftId property value. User id of the sender of the offer shift request.
     * @returns a string
     */
    public get senderShiftId() {
        return this._senderShiftId;
    };
    /**
     * Sets the senderShiftId property value. User id of the sender of the offer shift request.
     * @param value Value to set for the senderShiftId property.
     */
    public set senderShiftId(value: string | undefined) {
        if(value) {
            this._senderShiftId = value;
        }
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
