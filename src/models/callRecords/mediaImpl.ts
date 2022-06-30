import {createDeviceInfoFromDiscriminatorValue} from './createDeviceInfoFromDiscriminatorValue';
import {createMediaStreamFromDiscriminatorValue} from './createMediaStreamFromDiscriminatorValue';
import {createNetworkInfoFromDiscriminatorValue} from './createNetworkInfoFromDiscriminatorValue';
import {DeviceInfo} from './deviceInfo';
import {DeviceInfoImpl, MediaStreamImpl, NetworkInfoImpl} from './index';
import {Media} from './media';
import {MediaStream} from './mediaStream';
import {NetworkInfo} from './networkInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaImpl implements Media {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Device information associated with the callee endpoint of this media. */
    private _calleeDevice?: DeviceInfo | undefined;
    /** Network information associated with the callee endpoint of this media. */
    private _calleeNetwork?: NetworkInfo | undefined;
    /** Device information associated with the caller endpoint of this media. */
    private _callerDevice?: DeviceInfo | undefined;
    /** Network information associated with the caller endpoint of this media. */
    private _callerNetwork?: NetworkInfo | undefined;
    /** How the media was identified during media negotiation stage. */
    private _label?: string | undefined;
    /** Network streams associated with this media. */
    private _streams?: MediaStream[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the calleeDevice property value. Device information associated with the callee endpoint of this media.
     * @returns a DeviceInfoInterface
     */
    public get calleeDevice() {
        return this._calleeDevice;
    };
    /**
     * Sets the calleeDevice property value. Device information associated with the callee endpoint of this media.
     * @param value Value to set for the calleeDevice property.
     */
    public set calleeDevice(value: DeviceInfo | undefined) {
        if(value) {
            this._calleeDevice = value instanceof DeviceInfoImpl? value : new DeviceInfoImpl(value);
        }
    };
    /**
     * Gets the calleeNetwork property value. Network information associated with the callee endpoint of this media.
     * @returns a NetworkInfoInterface
     */
    public get calleeNetwork() {
        return this._calleeNetwork;
    };
    /**
     * Sets the calleeNetwork property value. Network information associated with the callee endpoint of this media.
     * @param value Value to set for the calleeNetwork property.
     */
    public set calleeNetwork(value: NetworkInfo | undefined) {
        if(value) {
            this._calleeNetwork = value instanceof NetworkInfoImpl? value : new NetworkInfoImpl(value);
        }
    };
    /**
     * Gets the callerDevice property value. Device information associated with the caller endpoint of this media.
     * @returns a DeviceInfoInterface
     */
    public get callerDevice() {
        return this._callerDevice;
    };
    /**
     * Sets the callerDevice property value. Device information associated with the caller endpoint of this media.
     * @param value Value to set for the callerDevice property.
     */
    public set callerDevice(value: DeviceInfo | undefined) {
        if(value) {
            this._callerDevice = value instanceof DeviceInfoImpl? value : new DeviceInfoImpl(value);
        }
    };
    /**
     * Gets the callerNetwork property value. Network information associated with the caller endpoint of this media.
     * @returns a NetworkInfoInterface
     */
    public get callerNetwork() {
        return this._callerNetwork;
    };
    /**
     * Sets the callerNetwork property value. Network information associated with the caller endpoint of this media.
     * @param value Value to set for the callerNetwork property.
     */
    public set callerNetwork(value: NetworkInfo | undefined) {
        if(value) {
            this._callerNetwork = value instanceof NetworkInfoImpl? value : new NetworkInfoImpl(value);
        }
    };
    /**
     * Instantiates a new media and sets the default values.
     * @param mediaParameterValue 
     */
    public constructor(mediaParameterValue?: Media | undefined) {
        this._additionalData = mediaParameterValue?.additionalData ? mediaParameterValue?.additionalData! : {};
        this._calleeDevice = mediaParameterValue?.calleeDevice;
        this._calleeNetwork = mediaParameterValue?.calleeNetwork;
        this._callerDevice = mediaParameterValue?.callerDevice;
        this._callerNetwork = mediaParameterValue?.callerNetwork;
        this._label = mediaParameterValue?.label;
        this._streams = mediaParameterValue?.streams;
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
     * Gets the label property value. How the media was identified during media negotiation stage.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. How the media was identified during media negotiation stage.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        if(value) {
            this._label = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.calleeDevice){
            writer.writeObjectValue<DeviceInfoImpl>("calleeDevice", (!this.calleeDevice || this.calleeDevice instanceof DeviceInfoImpl? this.calleeDevice : new DeviceInfoImpl(this.calleeDevice)));
        }
        if(this.calleeNetwork){
            writer.writeObjectValue<NetworkInfoImpl>("calleeNetwork", (!this.calleeNetwork || this.calleeNetwork instanceof NetworkInfoImpl? this.calleeNetwork : new NetworkInfoImpl(this.calleeNetwork)));
        }
        if(this.callerDevice){
            writer.writeObjectValue<DeviceInfoImpl>("callerDevice", (!this.callerDevice || this.callerDevice instanceof DeviceInfoImpl? this.callerDevice : new DeviceInfoImpl(this.callerDevice)));
        }
        if(this.callerNetwork){
            writer.writeObjectValue<NetworkInfoImpl>("callerNetwork", (!this.callerNetwork || this.callerNetwork instanceof NetworkInfoImpl? this.callerNetwork : new NetworkInfoImpl(this.callerNetwork)));
        }
        if(this.label){
            writer.writeStringValue("label", this.label);
        }
        if(this.streams && this.streams.length != 0){        const streamsArrValue: MediaStreamImpl[] = [];
        this.streams?.forEach(element => {
            streamsArrValue.push((element instanceof MediaStreamImpl? element:new MediaStreamImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MediaStreamImpl>("streams", streamsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the streams property value. Network streams associated with this media.
     * @returns a MediaStreamInterface
     */
    public get streams() {
        return this._streams;
    };
    /**
     * Sets the streams property value. Network streams associated with this media.
     * @param value Value to set for the streams property.
     */
    public set streams(value: MediaStream[] | undefined) {
        if(value) {
            const streamsArrValue: MediaStreamImpl[] = [];
            this.streams?.forEach(element => {
                streamsArrValue.push((element instanceof MediaStreamImpl? element:new MediaStreamImpl(element)));
            });
            this._streams = streamsArrValue;
        }
    };
}
