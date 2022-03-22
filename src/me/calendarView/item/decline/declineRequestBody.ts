import {TimeSlot} from '../../../../models/microsoft/graph/';
import {createTimeSlotFromDiscriminatorValue} from '../../../../models/microsoft/graph/createTimeSlotFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the decline method.  */
export class DeclineRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _comment?: string | undefined;
    private _proposedNewTime?: TimeSlot | undefined;
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
        this._additionalData = value;
    };
    /**
     * Gets the comment property value. 
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. 
     * @param value Value to set for the Comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new declineRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "comment": (o, n) => { (o as unknown as DeclineRequestBody).comment = n.getStringValue(); },
            "proposedNewTime": (o, n) => { (o as unknown as DeclineRequestBody).proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
            "sendResponse": (o, n) => { (o as unknown as DeclineRequestBody).sendResponse = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the proposedNewTime property value. 
     * @returns a timeSlot
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Sets the proposedNewTime property value. 
     * @param value Value to set for the ProposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | undefined) {
        this._proposedNewTime = value;
    };
    /**
     * Gets the sendResponse property value. 
     * @returns a boolean
     */
    public get sendResponse() {
        return this._sendResponse;
    };
    /**
     * Sets the sendResponse property value. 
     * @param value Value to set for the SendResponse property.
     */
    public set sendResponse(value: boolean | undefined) {
        this._sendResponse = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("comment", this.comment);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", this.proposedNewTime);
        writer.writeBooleanValue("sendResponse", this.sendResponse);
        writer.writeAdditionalData(this.additionalData);
    };
}
