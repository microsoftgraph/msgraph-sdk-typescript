import {AutomaticRepliesSetting} from './automaticRepliesSetting';
import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {ExternalAudienceScope} from './externalAudienceScope';
import {DateTimeTimeZoneImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutomaticRepliesSettingImpl implements AdditionalDataHolder, AutomaticRepliesSetting, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status is AlwaysEnabled or Scheduled. Possible values are: none, contactsOnly, all. */
    public externalAudience?: ExternalAudienceScope | undefined;
    /** The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled. */
    public externalReplyMessage?: string | undefined;
    /** The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled. */
    public internalReplyMessage?: string | undefined;
    /** The date and time that automatic replies are set to end, if Status is set to Scheduled. */
    public scheduledEndDateTime?: DateTimeTimeZone | undefined;
    /** The date and time that automatic replies are set to begin, if Status is set to Scheduled. */
    public scheduledStartDateTime?: DateTimeTimeZone | undefined;
    /** Configurations status for automatic replies. Possible values are: disabled, alwaysEnabled, scheduled. */
    public status?: AutomaticRepliesStatus | undefined;
    /**
     * Instantiates a new automaticRepliesSetting and sets the default values.
     * @param automaticRepliesSettingParameterValue 
     */
    public constructor(automaticRepliesSettingParameterValue?: AutomaticRepliesSetting | undefined) {
        this.additionalData = automaticRepliesSettingParameterValue?.additionalData ? automaticRepliesSettingParameterValue?.additionalData! : {}
        this.externalAudience = automaticRepliesSettingParameterValue?.externalAudience ;
        this.externalReplyMessage = automaticRepliesSettingParameterValue?.externalReplyMessage ;
        this.internalReplyMessage = automaticRepliesSettingParameterValue?.internalReplyMessage ;
        this.scheduledEndDateTime = automaticRepliesSettingParameterValue?.scheduledEndDateTime ;
        this.scheduledStartDateTime = automaticRepliesSettingParameterValue?.scheduledStartDateTime ;
        this.status = automaticRepliesSettingParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "externalAudience": n => { this.externalAudience = n.getEnumValue<ExternalAudienceScope>(ExternalAudienceScope); },
            "externalReplyMessage": n => { this.externalReplyMessage = n.getStringValue(); },
            "internalReplyMessage": n => { this.internalReplyMessage = n.getStringValue(); },
            "scheduledEndDateTime": n => { this.scheduledEndDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "scheduledStartDateTime": n => { this.scheduledStartDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<AutomaticRepliesStatus>(AutomaticRepliesStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.externalAudience){
        writer.writeEnumValue<ExternalAudienceScope>("externalAudience", this.externalAudience);
        }
        if(this.externalReplyMessage){
        writer.writeStringValue("externalReplyMessage", this.externalReplyMessage);
        }
        if(this.internalReplyMessage){
        writer.writeStringValue("internalReplyMessage", this.internalReplyMessage);
        }
        if(this.scheduledEndDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("scheduledEndDateTime", new DateTimeTimeZoneImpl(this.scheduledEndDateTime));
        }
        if(this.scheduledStartDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("scheduledStartDateTime", new DateTimeTimeZoneImpl(this.scheduledStartDateTime));
        }
        if(this.status){
        writer.writeEnumValue<AutomaticRepliesStatus>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
