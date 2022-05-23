import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';

export interface TeleconferenceDeviceQuality{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    callChainId?:string | undefined;
    /** A geo-region where the service is deployed, such as ProdNoam. */
    cloudServiceDeploymentEnvironment?:string | undefined;
    /** A unique deployment identifier assigned by Azure. */
    cloudServiceDeploymentId?:string | undefined;
    /** The Azure deployed cloud service instance name, such as FrontEnd_IN_3. */
    cloudServiceInstanceName?:string | undefined;
    /** The Azure deployed cloud service name, such as contoso.cloudapp.net. */
    cloudServiceName?:string | undefined;
    /** Any additional description, such as VTC Bldg 30/21. */
    deviceDescription?:string | undefined;
    /** The user media agent name, such as Cisco SX80. */
    deviceName?:string | undefined;
    /** A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value. */
    mediaLegId?:string | undefined;
    /** The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality. */
    mediaQualityList?:TeleconferenceDeviceMediaQuality[] | undefined;
    /** A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property. */
    participantId?:string | undefined;
}
