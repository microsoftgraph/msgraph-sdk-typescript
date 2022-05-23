import {createTeleconferenceDeviceMediaQualityFromDiscriminatorValue} from './createTeleconferenceDeviceMediaQualityFromDiscriminatorValue';
import {TeleconferenceDeviceMediaQualityImpl} from './index';
import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceQuality} from './teleconferenceDeviceQuality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceQualityImpl implements AdditionalDataHolder, Parsable, TeleconferenceDeviceQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    public callChainId?: string | undefined;
    /** A geo-region where the service is deployed, such as ProdNoam. */
    public cloudServiceDeploymentEnvironment?: string | undefined;
    /** A unique deployment identifier assigned by Azure. */
    public cloudServiceDeploymentId?: string | undefined;
    /** The Azure deployed cloud service instance name, such as FrontEnd_IN_3. */
    public cloudServiceInstanceName?: string | undefined;
    /** The Azure deployed cloud service name, such as contoso.cloudapp.net. */
    public cloudServiceName?: string | undefined;
    /** Any additional description, such as VTC Bldg 30/21. */
    public deviceDescription?: string | undefined;
    /** The user media agent name, such as Cisco SX80. */
    public deviceName?: string | undefined;
    /** A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value. */
    public mediaLegId?: string | undefined;
    /** The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality. */
    public mediaQualityList?: TeleconferenceDeviceMediaQuality[] | undefined;
    /** A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property. */
    public participantId?: string | undefined;
    /**
     * Instantiates a new teleconferenceDeviceQuality and sets the default values.
     * @param teleconferenceDeviceQualityParameterValue 
     */
    public constructor(teleconferenceDeviceQualityParameterValue?: TeleconferenceDeviceQuality | undefined) {
        this.additionalData = teleconferenceDeviceQualityParameterValue?.additionalData ? teleconferenceDeviceQualityParameterValue?.additionalData! : {}
        this.callChainId = teleconferenceDeviceQualityParameterValue?.callChainId ;
        this.cloudServiceDeploymentEnvironment = teleconferenceDeviceQualityParameterValue?.cloudServiceDeploymentEnvironment ;
        this.cloudServiceDeploymentId = teleconferenceDeviceQualityParameterValue?.cloudServiceDeploymentId ;
        this.cloudServiceInstanceName = teleconferenceDeviceQualityParameterValue?.cloudServiceInstanceName ;
        this.cloudServiceName = teleconferenceDeviceQualityParameterValue?.cloudServiceName ;
        this.deviceDescription = teleconferenceDeviceQualityParameterValue?.deviceDescription ;
        this.deviceName = teleconferenceDeviceQualityParameterValue?.deviceName ;
        this.mediaLegId = teleconferenceDeviceQualityParameterValue?.mediaLegId ;
        this.mediaQualityList = teleconferenceDeviceQualityParameterValue?.mediaQualityList ;
        this.participantId = teleconferenceDeviceQualityParameterValue?.participantId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "callChainId": n => { this.callChainId = n.getStringValue(); },
            "cloudServiceDeploymentEnvironment": n => { this.cloudServiceDeploymentEnvironment = n.getStringValue(); },
            "cloudServiceDeploymentId": n => { this.cloudServiceDeploymentId = n.getStringValue(); },
            "cloudServiceInstanceName": n => { this.cloudServiceInstanceName = n.getStringValue(); },
            "cloudServiceName": n => { this.cloudServiceName = n.getStringValue(); },
            "deviceDescription": n => { this.deviceDescription = n.getStringValue(); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "mediaLegId": n => { this.mediaLegId = n.getStringValue(); },
            "mediaQualityList": n => { this.mediaQualityList = n.getCollectionOfObjectValues<TeleconferenceDeviceMediaQualityImpl>(createTeleconferenceDeviceMediaQualityFromDiscriminatorValue); },
            "participantId": n => { this.participantId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.callChainId){
        writer.writeStringValue("callChainId", this.callChainId);
        }
        if(this.cloudServiceDeploymentEnvironment){
        writer.writeStringValue("cloudServiceDeploymentEnvironment", this.cloudServiceDeploymentEnvironment);
        }
        if(this.cloudServiceDeploymentId){
        writer.writeStringValue("cloudServiceDeploymentId", this.cloudServiceDeploymentId);
        }
        if(this.cloudServiceInstanceName){
        writer.writeStringValue("cloudServiceInstanceName", this.cloudServiceInstanceName);
        }
        if(this.cloudServiceName){
        writer.writeStringValue("cloudServiceName", this.cloudServiceName);
        }
        if(this.deviceDescription){
        writer.writeStringValue("deviceDescription", this.deviceDescription);
        }
        if(this.deviceName){
        writer.writeStringValue("deviceName", this.deviceName);
        }
        if(this.mediaLegId){
        writer.writeStringValue("mediaLegId", this.mediaLegId);
        }
        if(this.mediaQualityList && this.mediaQualityList.length != 0){        const mediaQualityListArrValue: TeleconferenceDeviceMediaQualityImpl[] = []; this.mediaQualityList?.forEach(element => {mediaQualityListArrValue.push(new TeleconferenceDeviceMediaQualityImpl(element));});
        writer.writeCollectionOfObjectValues<TeleconferenceDeviceMediaQualityImpl>("mediaQualityList", mediaQualityListArrValue);
        }
        if(this.participantId){
        writer.writeStringValue("participantId", this.participantId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
