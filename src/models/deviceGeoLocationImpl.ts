import {DeviceGeoLocation} from './deviceGeoLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device location */
export class DeviceGeoLocationImpl implements DeviceGeoLocation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Altitude, given in meters above sea level */
    public altitude?: number | undefined;
    /** Heading in degrees from true north */
    public heading?: number | undefined;
    /** Accuracy of longitude and latitude in meters */
    public horizontalAccuracy?: number | undefined;
    /** Time at which location was recorded, relative to UTC */
    public lastCollectedDateTime?: Date | undefined;
    /** Latitude coordinate of the device's location */
    public latitude?: number | undefined;
    /** Longitude coordinate of the device's location */
    public longitude?: number | undefined;
    /** Speed the device is traveling in meters per second */
    public speed?: number | undefined;
    /** Accuracy of altitude in meters */
    public verticalAccuracy?: number | undefined;
    /**
     * Instantiates a new deviceGeoLocation and sets the default values.
     * @param deviceGeoLocationParameterValue 
     */
    public constructor(deviceGeoLocationParameterValue?: DeviceGeoLocation | undefined) {
        this.additionalData = deviceGeoLocationParameterValue?.additionalData ? deviceGeoLocationParameterValue?.additionalData! : {};
        this.altitude = deviceGeoLocationParameterValue?.altitude;
        this.heading = deviceGeoLocationParameterValue?.heading;
        this.horizontalAccuracy = deviceGeoLocationParameterValue?.horizontalAccuracy;
        this.lastCollectedDateTime = deviceGeoLocationParameterValue?.lastCollectedDateTime;
        this.latitude = deviceGeoLocationParameterValue?.latitude;
        this.longitude = deviceGeoLocationParameterValue?.longitude;
        this.speed = deviceGeoLocationParameterValue?.speed;
        this.verticalAccuracy = deviceGeoLocationParameterValue?.verticalAccuracy;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "altitude": n => { this.altitude = n.getNumberValue(); },
            "heading": n => { this.heading = n.getNumberValue(); },
            "horizontalAccuracy": n => { this.horizontalAccuracy = n.getNumberValue(); },
            "lastCollectedDateTime": n => { this.lastCollectedDateTime = n.getDateValue(); },
            "latitude": n => { this.latitude = n.getNumberValue(); },
            "longitude": n => { this.longitude = n.getNumberValue(); },
            "speed": n => { this.speed = n.getNumberValue(); },
            "verticalAccuracy": n => { this.verticalAccuracy = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.altitude){
            writer.writeNumberValue("altitude", this.altitude);
        }
        if(this.heading){
            writer.writeNumberValue("heading", this.heading);
        }
        if(this.horizontalAccuracy){
            writer.writeNumberValue("horizontalAccuracy", this.horizontalAccuracy);
        }
        if(this.lastCollectedDateTime){
            writer.writeDateValue("lastCollectedDateTime", this.lastCollectedDateTime);
        }
        if(this.latitude){
            writer.writeNumberValue("latitude", this.latitude);
        }
        if(this.longitude){
            writer.writeNumberValue("longitude", this.longitude);
        }
        if(this.speed){
            writer.writeNumberValue("speed", this.speed);
        }
        if(this.verticalAccuracy){
            writer.writeNumberValue("verticalAccuracy", this.verticalAccuracy);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
