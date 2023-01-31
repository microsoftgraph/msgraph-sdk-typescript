import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {GeoCoordinates} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInLocation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity. */
    private _city?: string | undefined;
    /** Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity. */
    private _countryOrRegion?: string | undefined;
    /** Provides the latitude, longitude and altitude where the sign-in originated. */
    private _geoCoordinates?: GeoCoordinates | undefined;
    private _odataType?: string | undefined;
    /** Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity. */
    private _state?: string | undefined;
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
     * Gets the city property value. Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Instantiates a new signInLocation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the countryOrRegion property value. Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity.
     * @returns a string
     */
    public get countryOrRegion() {
        return this._countryOrRegion;
    };
    /**
     * Sets the countryOrRegion property value. Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity.
     * @param value Value to set for the countryOrRegion property.
     */
    public set countryOrRegion(value: string | undefined) {
        this._countryOrRegion = value;
    };
    /**
     * Gets the geoCoordinates property value. Provides the latitude, longitude and altitude where the sign-in originated.
     * @returns a geoCoordinates
     */
    public get geoCoordinates() {
        return this._geoCoordinates;
    };
    /**
     * Sets the geoCoordinates property value. Provides the latitude, longitude and altitude where the sign-in originated.
     * @param value Value to set for the geoCoordinates property.
     */
    public set geoCoordinates(value: GeoCoordinates | undefined) {
        this._geoCoordinates = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "city": n => { this.city = n.getStringValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
            "geoCoordinates": n => { this.geoCoordinates = n.getObjectValue<GeoCoordinates>(createGeoCoordinatesFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
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
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        writer.writeObjectValue<GeoCoordinates>("geoCoordinates", this.geoCoordinates);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
}
