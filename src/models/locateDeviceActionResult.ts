import {createDeviceGeoLocationFromDiscriminatorValue} from './createDeviceGeoLocationFromDiscriminatorValue';
import {DeviceActionResult, DeviceGeoLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocateDeviceActionResult extends DeviceActionResult implements Parsable {
    /** device location */
    private _deviceLocation?: DeviceGeoLocation | undefined;
    /**
     * Instantiates a new LocateDeviceActionResult and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.locateDeviceActionResult";
    };
    /**
     * Gets the deviceLocation property value. device location
     * @returns a deviceGeoLocation
     */
    public get deviceLocation() {
        return this._deviceLocation;
    };
    /**
     * Sets the deviceLocation property value. device location
     * @param value Value to set for the deviceLocation property.
     */
    public set deviceLocation(value: DeviceGeoLocation | undefined) {
        this._deviceLocation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceLocation": n => { this.deviceLocation = n.getObjectValue<DeviceGeoLocation>(createDeviceGeoLocationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DeviceGeoLocation>("deviceLocation", this.deviceLocation);
    };
}
