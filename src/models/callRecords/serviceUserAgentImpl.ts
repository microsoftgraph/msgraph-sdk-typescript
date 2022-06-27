import {UserAgentImpl} from './index';
import {ServiceRole} from './serviceRole';
import {ServiceUserAgent} from './serviceUserAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUserAgentImpl extends UserAgentImpl implements ServiceUserAgent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identifies the role of the service used by this endpoint. Possible values are: unknown, customBot, skypeForBusinessMicrosoftTeamsGateway, skypeForBusinessAudioVideoMcu, skypeForBusinessApplicationSharingMcu, skypeForBusinessCallQueues, skypeForBusinessAutoAttendant, mediationServer, mediationServerCloudConnectorEdition, exchangeUnifiedMessagingService, mediaController, conferencingAnnouncementService, conferencingAttendant, audioTeleconferencerController, skypeForBusinessUnifiedCommunicationApplicationPlatform, responseGroupServiceAnnouncementService, gateway, skypeTranslator, skypeForBusinessAttendant, responseGroupService, voicemail, unknownFutureValue. */
    public role?: ServiceRole | undefined;
    /**
     * Instantiates a new ServiceUserAgent and sets the default values.
     * @param serviceUserAgentParameterValue 
     */
    public constructor(serviceUserAgentParameterValue?: ServiceUserAgent | undefined) {
        super(serviceUserAgentParameterValue);
        this.additionalData = serviceUserAgentParameterValue?.additionalData ? serviceUserAgentParameterValue?.additionalData! : {};
        this.role = serviceUserAgentParameterValue?.role;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "role": n => { this.role = n.getEnumValue<ServiceRole>(ServiceRole); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.role){
            writer.writeEnumValue<ServiceRole>("role", this.role);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
