import {TimeSlotImpl} from '../../../../../../../../../../models/';
import {createTimeSlotFromDiscriminatorValue} from '../../../../../../../../../../models/createTimeSlotFromDiscriminatorValue';
import {TimeSlot} from '../../../../../../../../../../models/timeSlot';
import {DeclinePostRequestBody} from './declinePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the decline method. */
export class DeclinePostRequestBodyImpl implements DeclinePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The Comment property */
    private _comment?: string | undefined;
    /** The ProposedNewTime property */
    private _proposedNewTime?: TimeSlot | undefined;
    /** The SendResponse property */
    private _sendResponse?: boolean | undefined;
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
     * Gets the comment property value. The Comment property
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The Comment property
     * @param value Value to set for the Comment property.
     */
    public set comment(value: string | undefined) {
        if(value) {
            this._comment = value;
        }
    };
    /**
     * Instantiates a new declinePostRequestBody and sets the default values.
     * @param declinePostRequestBodyParameterValue 
     */
    public constructor(declinePostRequestBodyParameterValue?: DeclinePostRequestBody | undefined) {
        this._additionalData = declinePostRequestBodyParameterValue?.additionalData ? declinePostRequestBodyParameterValue?.additionalData! : {};
        this._comment = declinePostRequestBodyParameterValue?.comment;
        this._proposedNewTime = declinePostRequestBodyParameterValue?.proposedNewTime;
        this._sendResponse = declinePostRequestBodyParameterValue?.sendResponse;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "proposedNewTime": n => { this.proposedNewTime = n.getObjectValue<TimeSlotImpl>(createTimeSlotFromDiscriminatorValue); },
            "sendResponse": n => { this.sendResponse = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the proposedNewTime property value. The ProposedNewTime property
     * @returns a TimeSlotInterface
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Sets the proposedNewTime property value. The ProposedNewTime property
     * @param value Value to set for the ProposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | undefined) {
        if(value) {
            this._proposedNewTime = value instanceof TimeSlotImpl? value : new TimeSlotImpl(value);
        }
    };
    /**
     * Gets the sendResponse property value. The SendResponse property
     * @returns a boolean
     */
    public get sendResponse() {
        return this._sendResponse;
    };
    /**
     * Sets the sendResponse property value. The SendResponse property
     * @param value Value to set for the SendResponse property.
     */
    public set sendResponse(value: boolean | undefined) {
        if(value) {
            this._sendResponse = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
            writer.writeStringValue("comment", this.comment);
        }
        if(this.proposedNewTime){
            writer.writeObjectValue<TimeSlotImpl>("proposedNewTime", (!this.proposedNewTime || this.proposedNewTime instanceof TimeSlotImpl? this.proposedNewTime : new TimeSlotImpl(this.proposedNewTime)));
        }
        if(this.sendResponse){
            writer.writeBooleanValue("sendResponse", this.sendResponse);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
