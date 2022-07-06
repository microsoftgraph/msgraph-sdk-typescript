import {UserAgent} from './index';
import {ServiceRole} from './serviceRole';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUserAgent extends UserAgent implements Parsable {
    /** Identifies the role of the service used by this endpoint. Possible values are: unknown, customBot, skypeForBusinessMicrosoftTeamsGateway, skypeForBusinessAudioVideoMcu, skypeForBusinessApplicationSharingMcu, skypeForBusinessCallQueues, skypeForBusinessAutoAttendant, mediationServer, mediationServerCloudConnectorEdition, exchangeUnifiedMessagingService, mediaController, conferencingAnnouncementService, conferencingAttendant, audioTeleconferencerController, skypeForBusinessUnifiedCommunicationApplicationPlatform, responseGroupServiceAnnouncementService, gateway, skypeTranslator, skypeForBusinessAttendant, responseGroupService, voicemail, unknownFutureValue. */
    private _role?: ServiceRole | undefined;
    /**
     * Instantiates a new ServiceUserAgent and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the role property value. Identifies the role of the service used by this endpoint. Possible values are: unknown, customBot, skypeForBusinessMicrosoftTeamsGateway, skypeForBusinessAudioVideoMcu, skypeForBusinessApplicationSharingMcu, skypeForBusinessCallQueues, skypeForBusinessAutoAttendant, mediationServer, mediationServerCloudConnectorEdition, exchangeUnifiedMessagingService, mediaController, conferencingAnnouncementService, conferencingAttendant, audioTeleconferencerController, skypeForBusinessUnifiedCommunicationApplicationPlatform, responseGroupServiceAnnouncementService, gateway, skypeTranslator, skypeForBusinessAttendant, responseGroupService, voicemail, unknownFutureValue.
     * @returns a serviceRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. Identifies the role of the service used by this endpoint. Possible values are: unknown, customBot, skypeForBusinessMicrosoftTeamsGateway, skypeForBusinessAudioVideoMcu, skypeForBusinessApplicationSharingMcu, skypeForBusinessCallQueues, skypeForBusinessAutoAttendant, mediationServer, mediationServerCloudConnectorEdition, exchangeUnifiedMessagingService, mediaController, conferencingAnnouncementService, conferencingAttendant, audioTeleconferencerController, skypeForBusinessUnifiedCommunicationApplicationPlatform, responseGroupServiceAnnouncementService, gateway, skypeTranslator, skypeForBusinessAttendant, responseGroupService, voicemail, unknownFutureValue.
     * @param value Value to set for the role property.
     */
    public set role(value: ServiceRole | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ServiceRole>("role", this.role);
    };
}
