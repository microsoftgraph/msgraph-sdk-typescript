import {createDeviceGeoLocationFromDiscriminatorValue} from './createDeviceGeoLocationFromDiscriminatorValue';
import {DeviceGeoLocation} from './deviceGeoLocation';
import {DeviceActionResultImpl, DeviceGeoLocationImpl} from './index';
import {LocateDeviceActionResult} from './locateDeviceActionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocateDeviceActionResultImpl extends DeviceActionResultImpl implements LocateDeviceActionResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** device location */
    public deviceLocation?: DeviceGeoLocation | undefined;
    /**
     * Instantiates a new LocateDeviceActionResult and sets the default values.
     * @param locateDeviceActionResultParameterValue 
     */
    public constructor(locateDeviceActionResultParameterValue?: LocateDeviceActionResult | undefined) {
        super(locateDeviceActionResultParameterValue);
        this.additionalData = locateDeviceActionResultParameterValue?.additionalData ? locateDeviceActionResultParameterValue?.additionalData! : {};
        this.deviceLocation = locateDeviceActionResultParameterValue?.deviceLocation instanceof DeviceGeoLocationImpl? locateDeviceActionResultParameterValue?.deviceLocation:new DeviceGeoLocationImpl(locateDeviceActionResultParameterValue?.deviceLocation);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceLocation": n => { this.deviceLocation = n.getObjectValue<DeviceGeoLocationImpl>(createDeviceGeoLocationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceLocation){
            writer.writeObjectValue<DeviceGeoLocationImpl>("deviceLocation", new DeviceGeoLocationImpl(this.deviceLocation));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
