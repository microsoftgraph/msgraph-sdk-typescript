import {ReferenceNumeric} from './referenceNumeric';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GeoCoordinates implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Optional. The altitude (height), in feet,  above sea level for the item. Read-only. */
    private _altitude?: number | string | ReferenceNumeric | undefined;
    /** Optional. The latitude, in decimal, for the item. Read-only. */
    private _latitude?: number | string | ReferenceNumeric | undefined;
    /** Optional. The longitude, in decimal, for the item. Read-only. */
    private _longitude?: number | string | ReferenceNumeric | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Gets the altitude property value. Optional. The altitude (height), in feet,  above sea level for the item. Read-only.
     * @returns a agreements
     */
    public get altitude() {
        return this._altitude;
    };
    /**
     * Sets the altitude property value. Optional. The altitude (height), in feet,  above sea level for the item. Read-only.
     * @param value Value to set for the altitude property.
     */
    public set altitude(value: number | string | ReferenceNumeric | undefined) {
        this._altitude = value;
    };
    /**
     * Instantiates a new geoCoordinates and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.geoCoordinates";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "altitude": n => { this.altitude = n.getNumberValue(); },
            "latitude": n => { this.latitude = n.getNumberValue(); },
            "longitude": n => { this.longitude = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the latitude property value. Optional. The latitude, in decimal, for the item. Read-only.
     * @returns a agreements
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Sets the latitude property value. Optional. The latitude, in decimal, for the item. Read-only.
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | string | ReferenceNumeric | undefined) {
        this._latitude = value;
    };
    /**
     * Gets the longitude property value. Optional. The longitude, in decimal, for the item. Read-only.
     * @returns a agreements
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * Sets the longitude property value. Optional. The longitude, in decimal, for the item. Read-only.
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | string | ReferenceNumeric | undefined) {
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
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
