import {createTeleconferenceDeviceMediaQualityFromDiscriminatorValue} from './createTeleconferenceDeviceMediaQualityFromDiscriminatorValue';
import {TeleconferenceDeviceMediaQualityImpl} from './index';
import {TeleconferenceDeviceMediaQuality} from './teleconferenceDeviceMediaQuality';
import {TeleconferenceDeviceQuality} from './teleconferenceDeviceQuality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceQualityImpl implements TeleconferenceDeviceQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    private _callChainId?: string | undefined;
    /** A geo-region where the service is deployed, such as ProdNoam. */
    private _cloudServiceDeploymentEnvironment?: string | undefined;
    /** A unique deployment identifier assigned by Azure. */
    private _cloudServiceDeploymentId?: string | undefined;
    /** The Azure deployed cloud service instance name, such as FrontEnd_IN_3. */
    private _cloudServiceInstanceName?: string | undefined;
    /** The Azure deployed cloud service name, such as contoso.cloudapp.net. */
    private _cloudServiceName?: string | undefined;
    /** Any additional description, such as VTC Bldg 30/21. */
    private _deviceDescription?: string | undefined;
    /** The user media agent name, such as Cisco SX80. */
    private _deviceName?: string | undefined;
    /** A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value. */
    private _mediaLegId?: string | undefined;
    /** The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality. */
    private _mediaQualityList?: TeleconferenceDeviceMediaQuality[] | undefined;
    /** A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property. */
    private _participantId?: string | undefined;
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
     * Gets the callChainId property value. A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @returns a string
     */
    public get callChainId() {
        return this._callChainId;
    };
    /**
     * Sets the callChainId property value. A unique identifier for all  the participant calls in a conference or a unique identifier for two participant calls in P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @param value Value to set for the callChainId property.
     */
    public set callChainId(value: string | undefined) {
        if(value) {
            this._callChainId = value;
        }
    };
    /**
     * Gets the cloudServiceDeploymentEnvironment property value. A geo-region where the service is deployed, such as ProdNoam.
     * @returns a string
     */
    public get cloudServiceDeploymentEnvironment() {
        return this._cloudServiceDeploymentEnvironment;
    };
    /**
     * Sets the cloudServiceDeploymentEnvironment property value. A geo-region where the service is deployed, such as ProdNoam.
     * @param value Value to set for the cloudServiceDeploymentEnvironment property.
     */
    public set cloudServiceDeploymentEnvironment(value: string | undefined) {
        if(value) {
            this._cloudServiceDeploymentEnvironment = value;
        }
    };
    /**
     * Gets the cloudServiceDeploymentId property value. A unique deployment identifier assigned by Azure.
     * @returns a string
     */
    public get cloudServiceDeploymentId() {
        return this._cloudServiceDeploymentId;
    };
    /**
     * Sets the cloudServiceDeploymentId property value. A unique deployment identifier assigned by Azure.
     * @param value Value to set for the cloudServiceDeploymentId property.
     */
    public set cloudServiceDeploymentId(value: string | undefined) {
        if(value) {
            this._cloudServiceDeploymentId = value;
        }
    };
    /**
     * Gets the cloudServiceInstanceName property value. The Azure deployed cloud service instance name, such as FrontEnd_IN_3.
     * @returns a string
     */
    public get cloudServiceInstanceName() {
        return this._cloudServiceInstanceName;
    };
    /**
     * Sets the cloudServiceInstanceName property value. The Azure deployed cloud service instance name, such as FrontEnd_IN_3.
     * @param value Value to set for the cloudServiceInstanceName property.
     */
    public set cloudServiceInstanceName(value: string | undefined) {
        if(value) {
            this._cloudServiceInstanceName = value;
        }
    };
    /**
     * Gets the cloudServiceName property value. The Azure deployed cloud service name, such as contoso.cloudapp.net.
     * @returns a string
     */
    public get cloudServiceName() {
        return this._cloudServiceName;
    };
    /**
     * Sets the cloudServiceName property value. The Azure deployed cloud service name, such as contoso.cloudapp.net.
     * @param value Value to set for the cloudServiceName property.
     */
    public set cloudServiceName(value: string | undefined) {
        if(value) {
            this._cloudServiceName = value;
        }
    };
    /**
     * Instantiates a new teleconferenceDeviceQuality and sets the default values.
     * @param teleconferenceDeviceQualityParameterValue 
     */
    public constructor(teleconferenceDeviceQualityParameterValue?: TeleconferenceDeviceQuality | undefined) {
        this._additionalData = teleconferenceDeviceQualityParameterValue?.additionalData ? teleconferenceDeviceQualityParameterValue?.additionalData! : {};
        this._callChainId = teleconferenceDeviceQualityParameterValue?.callChainId;
        this._cloudServiceDeploymentEnvironment = teleconferenceDeviceQualityParameterValue?.cloudServiceDeploymentEnvironment;
        this._cloudServiceDeploymentId = teleconferenceDeviceQualityParameterValue?.cloudServiceDeploymentId;
        this._cloudServiceInstanceName = teleconferenceDeviceQualityParameterValue?.cloudServiceInstanceName;
        this._cloudServiceName = teleconferenceDeviceQualityParameterValue?.cloudServiceName;
        this._deviceDescription = teleconferenceDeviceQualityParameterValue?.deviceDescription;
        this._deviceName = teleconferenceDeviceQualityParameterValue?.deviceName;
        this._mediaLegId = teleconferenceDeviceQualityParameterValue?.mediaLegId;
        this._mediaQualityList = teleconferenceDeviceQualityParameterValue?.mediaQualityList;
        this._participantId = teleconferenceDeviceQualityParameterValue?.participantId;
    };
    /**
     * Gets the deviceDescription property value. Any additional description, such as VTC Bldg 30/21.
     * @returns a string
     */
    public get deviceDescription() {
        return this._deviceDescription;
    };
    /**
     * Sets the deviceDescription property value. Any additional description, such as VTC Bldg 30/21.
     * @param value Value to set for the deviceDescription property.
     */
    public set deviceDescription(value: string | undefined) {
        if(value) {
            this._deviceDescription = value;
        }
    };
    /**
     * Gets the deviceName property value. The user media agent name, such as Cisco SX80.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. The user media agent name, such as Cisco SX80.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        if(value) {
            this._deviceName = value;
        }
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
     * Gets the mediaLegId property value. A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value.
     * @returns a string
     */
    public get mediaLegId() {
        return this._mediaLegId;
    };
    /**
     * Sets the mediaLegId property value. A unique identifier for a specific media leg of a participant in a conference.  One participant can have multiple media leg identifiers if retargeting happens. CVI partner assigns this value.
     * @param value Value to set for the mediaLegId property.
     */
    public set mediaLegId(value: string | undefined) {
        if(value) {
            this._mediaLegId = value;
        }
    };
    /**
     * Gets the mediaQualityList property value. The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality.
     * @returns a TeleconferenceDeviceMediaQualityInterface
     */
    public get mediaQualityList() {
        return this._mediaQualityList;
    };
    /**
     * Sets the mediaQualityList property value. The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing quality.
     * @param value Value to set for the mediaQualityList property.
     */
    public set mediaQualityList(value: TeleconferenceDeviceMediaQuality[] | undefined) {
        if(value) {
            const mediaQualityListArrValue: TeleconferenceDeviceMediaQualityImpl[] = [];
            this.mediaQualityList?.forEach(element => {
                mediaQualityListArrValue.push((element instanceof TeleconferenceDeviceMediaQualityImpl? element as TeleconferenceDeviceMediaQualityImpl:new TeleconferenceDeviceMediaQualityImpl(element)));
            });
            this._mediaQualityList = mediaQualityListArrValue;
        }
    };
    /**
     * Gets the participantId property value. A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property.
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Sets the participantId property value. A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId to this property.
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        if(value) {
            this._participantId = value;
        }
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
        if(this.mediaQualityList && this.mediaQualityList.length != 0){        const mediaQualityListArrValue: TeleconferenceDeviceMediaQualityImpl[] = [];
        this.mediaQualityList?.forEach(element => {
            mediaQualityListArrValue.push((element instanceof TeleconferenceDeviceMediaQualityImpl? element as TeleconferenceDeviceMediaQualityImpl:new TeleconferenceDeviceMediaQualityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TeleconferenceDeviceMediaQualityImpl>("mediaQualityList", mediaQualityListArrValue);
        }
        if(this.participantId){
            writer.writeStringValue("participantId", this.participantId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
