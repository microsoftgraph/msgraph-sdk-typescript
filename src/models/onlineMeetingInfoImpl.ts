import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {PhoneImpl} from './index';
import {OnlineMeetingInfo} from './onlineMeetingInfo';
import {Phone} from './phone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnlineMeetingInfoImpl implements AdditionalDataHolder, OnlineMeetingInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The ID of the conference. */
    public conferenceId?: string | undefined;
    /** The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting. */
    public joinUrl?: string | undefined;
    /** All of the phone numbers associated with this conference. */
    public phones?: Phone[] | undefined;
    /** The pre-formatted quickdial for this call. */
    public quickDial?: string | undefined;
    /** The toll free numbers that can be used to join the conference. */
    public tollFreeNumbers?: string[] | undefined;
    /** The toll number that can be used to join the conference. */
    public tollNumber?: string | undefined;
    /**
     * Instantiates a new onlineMeetingInfo and sets the default values.
     * @param onlineMeetingInfoParameterValue 
     */
    public constructor(onlineMeetingInfoParameterValue?: OnlineMeetingInfo | undefined) {
        this.additionalData = onlineMeetingInfoParameterValue?.additionalData ? onlineMeetingInfoParameterValue?.additionalData! : {}
        this.conferenceId = onlineMeetingInfoParameterValue?.conferenceId ;
        this.joinUrl = onlineMeetingInfoParameterValue?.joinUrl ;
        this.phones = onlineMeetingInfoParameterValue?.phones ;
        this.quickDial = onlineMeetingInfoParameterValue?.quickDial ;
        this.tollFreeNumbers = onlineMeetingInfoParameterValue?.tollFreeNumbers ;
        this.tollNumber = onlineMeetingInfoParameterValue?.tollNumber ;
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
        if(this.phones && this.phones.length != 0){        const phonesArrValue: PhoneImpl[] = []; this.phones?.forEach(element => {phonesArrValue.push(new PhoneImpl(element));});
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
}
