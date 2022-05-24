import {createDeviceInfoFromDiscriminatorValue} from './createDeviceInfoFromDiscriminatorValue';
import {createMediaStreamFromDiscriminatorValue} from './createMediaStreamFromDiscriminatorValue';
import {createNetworkInfoFromDiscriminatorValue} from './createNetworkInfoFromDiscriminatorValue';
import {DeviceInfo} from './deviceInfo';
import {DeviceInfoImpl, MediaStreamImpl, NetworkInfoImpl} from './index';
import {Media} from './media';
import {MediaStream} from './mediaStream';
import {NetworkInfo} from './networkInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaImpl implements AdditionalDataHolder, Media, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Device information associated with the callee endpoint of this media. */
    public calleeDevice?: DeviceInfo | undefined;
    /** Network information associated with the callee endpoint of this media. */
    public calleeNetwork?: NetworkInfo | undefined;
    /** Device information associated with the caller endpoint of this media. */
    public callerDevice?: DeviceInfo | undefined;
    /** Network information associated with the caller endpoint of this media. */
    public callerNetwork?: NetworkInfo | undefined;
    /** How the media was identified during media negotiation stage. */
    public label?: string | undefined;
    /** Network streams associated with this media. */
    public streams?: MediaStream[] | undefined;
    /**
     * Instantiates a new media and sets the default values.
     * @param mediaParameterValue 
     */
    public constructor(mediaParameterValue?: Media | undefined) {
        this.additionalData = mediaParameterValue?.additionalData ? mediaParameterValue?.additionalData! : {}
        this.calleeDevice = mediaParameterValue?.calleeDevice ;
        this.calleeNetwork = mediaParameterValue?.calleeNetwork ;
        this.callerDevice = mediaParameterValue?.callerDevice ;
        this.callerNetwork = mediaParameterValue?.callerNetwork ;
        this.label = mediaParameterValue?.label ;
        this.streams = mediaParameterValue?.streams ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calleeDevice": n => { this.calleeDevice = n.getObjectValue<DeviceInfoImpl>(createDeviceInfoFromDiscriminatorValue); },
            "calleeNetwork": n => { this.calleeNetwork = n.getObjectValue<NetworkInfoImpl>(createNetworkInfoFromDiscriminatorValue); },
            "callerDevice": n => { this.callerDevice = n.getObjectValue<DeviceInfoImpl>(createDeviceInfoFromDiscriminatorValue); },
            "callerNetwork": n => { this.callerNetwork = n.getObjectValue<NetworkInfoImpl>(createNetworkInfoFromDiscriminatorValue); },
            "label": n => { this.label = n.getStringValue(); },
            "streams": n => { this.streams = n.getCollectionOfObjectValues<MediaStreamImpl>(createMediaStreamFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.calleeDevice){
        writer.writeObjectValue<DeviceInfoImpl>("calleeDevice", new DeviceInfoImpl(this.calleeDevice));
        }
        if(this.calleeNetwork){
        writer.writeObjectValue<NetworkInfoImpl>("calleeNetwork", new NetworkInfoImpl(this.calleeNetwork));
        }
        if(this.callerDevice){
        writer.writeObjectValue<DeviceInfoImpl>("callerDevice", new DeviceInfoImpl(this.callerDevice));
        }
        if(this.callerNetwork){
        writer.writeObjectValue<NetworkInfoImpl>("callerNetwork", new NetworkInfoImpl(this.callerNetwork));
        }
        if(this.label){
        writer.writeStringValue("label", this.label);
        }
        if(this.streams && this.streams.length != 0){        const streamsArrValue: MediaStreamImpl[] = []; this.streams?.forEach(element => {streamsArrValue.push(new MediaStreamImpl(element));});
        writer.writeCollectionOfObjectValues<MediaStreamImpl>("streams", streamsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
