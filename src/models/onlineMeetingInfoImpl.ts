import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {PhoneImpl} from './index';
import {OnlineMeetingInfo} from './onlineMeetingInfo';
import {Phone} from './phone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnlineMeetingInfoImpl implements OnlineMeetingInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The ID of the conference. */
    private _conferenceId?: string | undefined;
    /** The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting. */
    private _joinUrl?: string | undefined;
    /** All of the phone numbers associated with this conference. */
    private _phones?: Phone[] | undefined;
    /** The pre-formatted quickdial for this call. */
    private _quickDial?: string | undefined;
    /** The toll free numbers that can be used to join the conference. */
    private _tollFreeNumbers?: string[] | undefined;
    /** The toll number that can be used to join the conference. */
    private _tollNumber?: string | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the conferenceId property value. The ID of the conference.
     * @returns a string
     */
    public get conferenceId() {
        return this._conferenceId;
    };
    /**
     * Sets the conferenceId property value. The ID of the conference.
     * @param value Value to set for the conferenceId property.
     */
    public set conferenceId(value: string | undefined) {
        if(value) {
            this._conferenceId = value;
        }
    };
    /**
     * Instantiates a new onlineMeetingInfo and sets the default values.
     * @param onlineMeetingInfoParameterValue 
     */
    public constructor(onlineMeetingInfoParameterValue?: OnlineMeetingInfo | undefined) {
        this._additionalData = onlineMeetingInfoParameterValue?.additionalData ? onlineMeetingInfoParameterValue?.additionalData! : {};
        this._conferenceId = onlineMeetingInfoParameterValue?.conferenceId;
        this._joinUrl = onlineMeetingInfoParameterValue?.joinUrl;
        this._phones = onlineMeetingInfoParameterValue?.phones;
        this._quickDial = onlineMeetingInfoParameterValue?.quickDial;
        this._tollFreeNumbers = onlineMeetingInfoParameterValue?.tollFreeNumbers;
        this._tollNumber = onlineMeetingInfoParameterValue?.tollNumber;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "conferenceId": n => { this.conferenceId = n.getStringValue(); },
            "joinUrl": n => { this.joinUrl = n.getStringValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<PhoneImpl>(createPhoneFromDiscriminatorValue); },
            "quickDial": n => { this.quickDial = n.getStringValue(); },
            "tollFreeNumbers": n => { this.tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>(); },
            "tollNumber": n => { this.tollNumber = n.getStringValue(); },
        };
    };
    /**
     * Gets the joinUrl property value. The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting.
     * @returns a string
     */
    public get joinUrl() {
        return this._joinUrl;
    };
    /**
     * Sets the joinUrl property value. The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting.
     * @param value Value to set for the joinUrl property.
     */
    public set joinUrl(value: string | undefined) {
        if(value) {
            this._joinUrl = value;
        }
    };
    /**
     * Gets the phones property value. All of the phone numbers associated with this conference.
     * @returns a PhoneInterface
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. All of the phone numbers associated with this conference.
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        if(value) {
            const phonesArrValue: PhoneImpl[] = [];
            this.phones?.forEach(element => {
                phonesArrValue.push((element instanceof PhoneImpl? element:new PhoneImpl(element)));
            });
            this._phones = phonesArrValue;
        }
    };
    /**
     * Gets the quickDial property value. The pre-formatted quickdial for this call.
     * @returns a string
     */
    public get quickDial() {
        return this._quickDial;
    };
    /**
     * Sets the quickDial property value. The pre-formatted quickdial for this call.
     * @param value Value to set for the quickDial property.
     */
    public set quickDial(value: string | undefined) {
        if(value) {
            this._quickDial = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.conferenceId){
            writer.writeStringValue("conferenceId", this.conferenceId);
        }
        if(this.joinUrl){
            writer.writeStringValue("joinUrl", this.joinUrl);
        }
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = [];
        this.phones?.forEach(element => {
            phonesArrValue.push((element instanceof PhoneImpl? element:new PhoneImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PhoneImpl>("phones", phonesArrValue);
        }
        if(this.quickDial){
            writer.writeStringValue("quickDial", this.quickDial);
        }
        if(this.tollFreeNumbers){
            writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", this.tollFreeNumbers);
        }
        if(this.tollNumber){
            writer.writeStringValue("tollNumber", this.tollNumber);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tollFreeNumbers property value. The toll free numbers that can be used to join the conference.
     * @returns a string
     */
    public get tollFreeNumbers() {
        return this._tollFreeNumbers;
    };
    /**
     * Sets the tollFreeNumbers property value. The toll free numbers that can be used to join the conference.
     * @param value Value to set for the tollFreeNumbers property.
     */
    public set tollFreeNumbers(value: string[] | undefined) {
        if(value) {
            this._tollFreeNumbers = value;
        }
    };
    /**
     * Gets the tollNumber property value. The toll number that can be used to join the conference.
     * @returns a string
     */
    public get tollNumber() {
        return this._tollNumber;
    };
    /**
     * Sets the tollNumber property value. The toll number that can be used to join the conference.
     * @param value Value to set for the tollNumber property.
     */
    public set tollNumber(value: string | undefined) {
        if(value) {
            this._tollNumber = value;
        }
    };
}
