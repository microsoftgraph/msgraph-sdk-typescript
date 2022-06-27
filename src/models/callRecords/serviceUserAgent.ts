import {ServiceRole} from './serviceRole';
import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUserAgent extends Partial<AdditionalDataHolder>, Partial<Parsable>, UserAgent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Identifies the role of the service used by this endpoint. Possible values are: unknown, customBot, skypeForBusinessMicrosoftTeamsGateway, skypeForBusinessAudioVideoMcu, skypeForBusinessApplicationSharingMcu, skypeForBusinessCallQueues, skypeForBusinessAutoAttendant, mediationServer, mediationServerCloudConnectorEdition, exchangeUnifiedMessagingService, mediaController, conferencingAnnouncementService, conferencingAttendant, audioTeleconferencerController, skypeForBusinessUnifiedCommunicationApplicationPlatform, responseGroupServiceAnnouncementService, gateway, skypeTranslator, skypeForBusinessAttendant, responseGroupService, voicemail, unknownFutureValue. */
    role?: ServiceRole | undefined;
}
