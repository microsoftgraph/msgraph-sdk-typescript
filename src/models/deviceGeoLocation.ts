import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Device location
 */
export class DeviceGeoLocation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Altitude, given in meters above sea level */
    private _altitude?: number | undefined;
    /** Heading in degrees from true north */
    private _heading?: number | undefined;
    /** Accuracy of longitude and latitude in meters */
    private _horizontalAccuracy?: number | undefined;
    /** Time at which location was recorded, relative to UTC */
    private _lastCollectedDateTime?: Date | undefined;
    /** Latitude coordinate of the device's location */
    private _latitude?: number | undefined;
    /** Longitude coordinate of the device's location */
    private _longitude?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Speed the device is traveling in meters per second */
    private _speed?: number | undefined;
    /** Accuracy of altitude in meters */
    private _verticalAccuracy?: number | undefined;
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
        this._additionalData = value;
    };
    /**
     * Gets the altitude property value. Altitude, given in meters above sea level
     * @returns a double
     */
    public get altitude() {
        return this._altitude;
    };
    /**
     * Sets the altitude property value. Altitude, given in meters above sea level
     * @param value Value to set for the altitude property.
     */
    public set altitude(value: number | undefined) {
        this._altitude = value;
    };
    /**
     * Instantiates a new deviceGeoLocation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "speed": n => { this.speed = n.getNumberValue(); },
            "verticalAccuracy": n => { this.verticalAccuracy = n.getNumberValue(); },
        };
    };
    /**
     * Gets the heading property value. Heading in degrees from true north
     * @returns a double
     */
    public get heading() {
        return this._heading;
    };
    /**
     * Sets the heading property value. Heading in degrees from true north
     * @param value Value to set for the heading property.
     */
    public set heading(value: number | undefined) {
        this._heading = value;
    };
    /**
     * Gets the horizontalAccuracy property value. Accuracy of longitude and latitude in meters
     * @returns a double
     */
    public get horizontalAccuracy() {
        return this._horizontalAccuracy;
    };
    /**
     * Sets the horizontalAccuracy property value. Accuracy of longitude and latitude in meters
     * @param value Value to set for the horizontalAccuracy property.
     */
    public set horizontalAccuracy(value: number | undefined) {
        this._horizontalAccuracy = value;
    };
    /**
     * Gets the lastCollectedDateTime property value. Time at which location was recorded, relative to UTC
     * @returns a Date
     */
    public get lastCollectedDateTime() {
        return this._lastCollectedDateTime;
    };
    /**
     * Sets the lastCollectedDateTime property value. Time at which location was recorded, relative to UTC
     * @param value Value to set for the lastCollectedDateTime property.
     */
    public set lastCollectedDateTime(value: Date | undefined) {
        this._lastCollectedDateTime = value;
    };
    /**
     * Gets the latitude property value. Latitude coordinate of the device's location
     * @returns a double
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Sets the latitude property value. Latitude coordinate of the device's location
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | undefined) {
        this._latitude = value;
    };
    /**
     * Gets the longitude property value. Longitude coordinate of the device's location
     * @returns a double
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * Sets the longitude property value. Longitude coordinate of the device's location
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | undefined) {
        this._longitude = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("altitude", this.altitude);
        writer.writeNumberValue("heading", this.heading);
        writer.writeNumberValue("horizontalAccuracy", this.horizontalAccuracy);
        writer.writeDateValue("lastCollectedDateTime", this.lastCollectedDateTime);
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("speed", this.speed);
        writer.writeNumberValue("verticalAccuracy", this.verticalAccuracy);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the speed property value. Speed the device is traveling in meters per second
     * @returns a double
     */
    public get speed() {
        return this._speed;
    };
    /**
     * Sets the speed property value. Speed the device is traveling in meters per second
     * @param value Value to set for the speed property.
     */
    public set speed(value: number | undefined) {
        this._speed = value;
    };
    /**
     * Gets the verticalAccuracy property value. Accuracy of altitude in meters
     * @returns a double
     */
    public get verticalAccuracy() {
        return this._verticalAccuracy;
    };
    /**
     * Sets the verticalAccuracy property value. Accuracy of altitude in meters
     * @param value Value to set for the verticalAccuracy property.
     */
    public set verticalAccuracy(value: number | undefined) {
        this._verticalAccuracy = value;
    };
}
