import {DeviceInfo} from './deviceInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceInfoImpl implements AdditionalDataHolder, DeviceInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the capture device driver used by the media endpoint. */
    public captureDeviceDriver?: string | undefined;
    /** Name of the capture device used by the media endpoint. */
    public captureDeviceName?: string | undefined;
    /** Fraction of the call that the media endpoint detected the capture device was not working properly. */
    public captureNotFunctioningEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected the CPU resources available were insufficient and caused poor quality of the audio sent and received. */
    public cpuInsufficentEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected clipping in the captured audio that caused poor quality of the audio being sent. */
    public deviceClippingEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected glitches or gaps in the audio played or captured that caused poor quality of the audio being sent or received. */
    public deviceGlitchEventRatio?: number | undefined;
    /** Number of times during the call that the media endpoint detected howling or screeching audio. */
    public howlingEventCount?: number | undefined;
    /** The root mean square (RMS) of the incoming signal of up to the first 30 seconds of the call. */
    public initialSignalLevelRootMeanSquare?: number | undefined;
    /** Fraction of the call that the media endpoint detected low speech level that caused poor quality of the audio being sent. */
    public lowSpeechLevelEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected low speech to noise level that caused poor quality of the audio being sent. */
    public lowSpeechToNoiseEventRatio?: number | undefined;
    /** Glitches per 5 minute interval for the media endpoint's microphone. */
    public micGlitchRate?: number | undefined;
    /** Average energy level of received audio for audio classified as mono noise or left channel of stereo noise by the media endpoint. */
    public receivedNoiseLevel?: number | undefined;
    /** Average energy level of received audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint. */
    public receivedSignalLevel?: number | undefined;
    /** Name of the render device driver used by the media endpoint. */
    public renderDeviceDriver?: string | undefined;
    /** Name of the render device used by the media endpoint. */
    public renderDeviceName?: string | undefined;
    /** Fraction of the call that media endpoint detected device render is muted. */
    public renderMuteEventRatio?: number | undefined;
    /** Fraction of the call that the media endpoint detected the render device was not working properly. */
    public renderNotFunctioningEventRatio?: number | undefined;
    /** Fraction of the call that media endpoint detected device render volume is set to 0. */
    public renderZeroVolumeEventRatio?: number | undefined;
    /** Average energy level of sent audio for audio classified as mono noise or left channel of stereo noise by the media endpoint. */
    public sentNoiseLevel?: number | undefined;
    /** Average energy level of sent audio for audio classified as mono speech, or left channel of stereo speech by the media endpoint. */
    public sentSignalLevel?: number | undefined;
    /** Glitches per 5 minute internal for the media endpoint's loudspeaker. */
    public speakerGlitchRate?: number | undefined;
    /**
     * Instantiates a new deviceInfo and sets the default values.
     * @param deviceInfoParameterValue 
     */
    public constructor(deviceInfoParameterValue?: DeviceInfo | undefined) {
        this.additionalData = deviceInfoParameterValue?.additionalData ? deviceInfoParameterValue?.additionalData! : {}
        this.captureDeviceDriver = deviceInfoParameterValue?.captureDeviceDriver ;
        this.captureDeviceName = deviceInfoParameterValue?.captureDeviceName ;
        this.captureNotFunctioningEventRatio = deviceInfoParameterValue?.captureNotFunctioningEventRatio ;
        this.cpuInsufficentEventRatio = deviceInfoParameterValue?.cpuInsufficentEventRatio ;
        this.deviceClippingEventRatio = deviceInfoParameterValue?.deviceClippingEventRatio ;
        this.deviceGlitchEventRatio = deviceInfoParameterValue?.deviceGlitchEventRatio ;
        this.howlingEventCount = deviceInfoParameterValue?.howlingEventCount ;
        this.initialSignalLevelRootMeanSquare = deviceInfoParameterValue?.initialSignalLevelRootMeanSquare ;
        this.lowSpeechLevelEventRatio = deviceInfoParameterValue?.lowSpeechLevelEventRatio ;
        this.lowSpeechToNoiseEventRatio = deviceInfoParameterValue?.lowSpeechToNoiseEventRatio ;
        this.micGlitchRate = deviceInfoParameterValue?.micGlitchRate ;
        this.receivedNoiseLevel = deviceInfoParameterValue?.receivedNoiseLevel ;
        this.receivedSignalLevel = deviceInfoParameterValue?.receivedSignalLevel ;
        this.renderDeviceDriver = deviceInfoParameterValue?.renderDeviceDriver ;
        this.renderDeviceName = deviceInfoParameterValue?.renderDeviceName ;
        this.renderMuteEventRatio = deviceInfoParameterValue?.renderMuteEventRatio ;
        this.renderNotFunctioningEventRatio = deviceInfoParameterValue?.renderNotFunctioningEventRatio ;
        this.renderZeroVolumeEventRatio = deviceInfoParameterValue?.renderZeroVolumeEventRatio ;
        this.sentNoiseLevel = deviceInfoParameterValue?.sentNoiseLevel ;
        this.sentSignalLevel = deviceInfoParameterValue?.sentSignalLevel ;
        this.speakerGlitchRate = deviceInfoParameterValue?.speakerGlitchRate ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "captureDeviceDriver": n => { this.captureDeviceDriver = n.getStringValue(); },
            "captureDeviceName": n => { this.captureDeviceName = n.getStringValue(); },
            "captureNotFunctioningEventRatio": n => { this.captureNotFunctioningEventRatio = n.getNumberValue(); },
            "cpuInsufficentEventRatio": n => { this.cpuInsufficentEventRatio = n.getNumberValue(); },
            "deviceClippingEventRatio": n => { this.deviceClippingEventRatio = n.getNumberValue(); },
            "deviceGlitchEventRatio": n => { this.deviceGlitchEventRatio = n.getNumberValue(); },
            "howlingEventCount": n => { this.howlingEventCount = n.getNumberValue(); },
            "initialSignalLevelRootMeanSquare": n => { this.initialSignalLevelRootMeanSquare = n.getNumberValue(); },
            "lowSpeechLevelEventRatio": n => { this.lowSpeechLevelEventRatio = n.getNumberValue(); },
            "lowSpeechToNoiseEventRatio": n => { this.lowSpeechToNoiseEventRatio = n.getNumberValue(); },
            "micGlitchRate": n => { this.micGlitchRate = n.getNumberValue(); },
            "receivedNoiseLevel": n => { this.receivedNoiseLevel = n.getNumberValue(); },
            "receivedSignalLevel": n => { this.receivedSignalLevel = n.getNumberValue(); },
            "renderDeviceDriver": n => { this.renderDeviceDriver = n.getStringValue(); },
            "renderDeviceName": n => { this.renderDeviceName = n.getStringValue(); },
            "renderMuteEventRatio": n => { this.renderMuteEventRatio = n.getNumberValue(); },
            "renderNotFunctioningEventRatio": n => { this.renderNotFunctioningEventRatio = n.getNumberValue(); },
            "renderZeroVolumeEventRatio": n => { this.renderZeroVolumeEventRatio = n.getNumberValue(); },
            "sentNoiseLevel": n => { this.sentNoiseLevel = n.getNumberValue(); },
            "sentSignalLevel": n => { this.sentSignalLevel = n.getNumberValue(); },
            "speakerGlitchRate": n => { this.speakerGlitchRate = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.captureDeviceDriver){
        writer.writeStringValue("captureDeviceDriver", this.captureDeviceDriver);
        }
        if(this.captureDeviceName){
        writer.writeStringValue("captureDeviceName", this.captureDeviceName);
        }
        if(this.captureNotFunctioningEventRatio){
        writer.writeNumberValue("captureNotFunctioningEventRatio", this.captureNotFunctioningEventRatio);
        }
        if(this.cpuInsufficentEventRatio){
        writer.writeNumberValue("cpuInsufficentEventRatio", this.cpuInsufficentEventRatio);
        }
        if(this.deviceClippingEventRatio){
        writer.writeNumberValue("deviceClippingEventRatio", this.deviceClippingEventRatio);
        }
        if(this.deviceGlitchEventRatio){
        writer.writeNumberValue("deviceGlitchEventRatio", this.deviceGlitchEventRatio);
        }
        if(this.howlingEventCount){
        writer.writeNumberValue("howlingEventCount", this.howlingEventCount);
        }
        if(this.initialSignalLevelRootMeanSquare){
        writer.writeNumberValue("initialSignalLevelRootMeanSquare", this.initialSignalLevelRootMeanSquare);
        }
        if(this.lowSpeechLevelEventRatio){
        writer.writeNumberValue("lowSpeechLevelEventRatio", this.lowSpeechLevelEventRatio);
        }
        if(this.lowSpeechToNoiseEventRatio){
        writer.writeNumberValue("lowSpeechToNoiseEventRatio", this.lowSpeechToNoiseEventRatio);
        }
        if(this.micGlitchRate){
        writer.writeNumberValue("micGlitchRate", this.micGlitchRate);
        }
        if(this.receivedNoiseLevel){
        writer.writeNumberValue("receivedNoiseLevel", this.receivedNoiseLevel);
        }
        if(this.receivedSignalLevel){
        writer.writeNumberValue("receivedSignalLevel", this.receivedSignalLevel);
        }
        if(this.renderDeviceDriver){
        writer.writeStringValue("renderDeviceDriver", this.renderDeviceDriver);
        }
        if(this.renderDeviceName){
        writer.writeStringValue("renderDeviceName", this.renderDeviceName);
        }
        if(this.renderMuteEventRatio){
        writer.writeNumberValue("renderMuteEventRatio", this.renderMuteEventRatio);
        }
        if(this.renderNotFunctioningEventRatio){
        writer.writeNumberValue("renderNotFunctioningEventRatio", this.renderNotFunctioningEventRatio);
        }
        if(this.renderZeroVolumeEventRatio){
        writer.writeNumberValue("renderZeroVolumeEventRatio", this.renderZeroVolumeEventRatio);
        }
        if(this.sentNoiseLevel){
        writer.writeNumberValue("sentNoiseLevel", this.sentNoiseLevel);
        }
        if(this.sentSignalLevel){
        writer.writeNumberValue("sentSignalLevel", this.sentSignalLevel);
        }
        if(this.speakerGlitchRate){
        writer.writeNumberValue("speakerGlitchRate", this.speakerGlitchRate);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
