import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {GeoCoordinates} from './geoCoordinates';
import {GeoCoordinatesImpl} from './index';
import {SignInLocation} from './signInLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInLocationImpl implements SignInLocation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity. */
    private _city?: string | undefined;
    /** Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity. */
    private _countryOrRegion?: string | undefined;
    /** Provides the latitude, longitude and altitude where the sign-in originated. */
    private _geoCoordinates?: GeoCoordinates | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
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
        if(value) {
            this._city = value;
        }
    };
    /**
     * Instantiates a new signInLocation and sets the default values.
     * @param signInLocationParameterValue 
     */
    public constructor(signInLocationParameterValue?: SignInLocation | undefined) {
        this._additionalData = signInLocationParameterValue?.additionalData ? signInLocationParameterValue?.additionalData! : {};
        this._city = signInLocationParameterValue?.city;
        this._countryOrRegion = signInLocationParameterValue?.countryOrRegion;
        this._geoCoordinates = signInLocationParameterValue?.geoCoordinates;
        this._state = signInLocationParameterValue?.state;
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
        if(value) {
            this._countryOrRegion = value;
        }
    };
    /**
     * Gets the geoCoordinates property value. Provides the latitude, longitude and altitude where the sign-in originated.
     * @returns a GeoCoordinatesInterface
     */
    public get geoCoordinates() {
        return this._geoCoordinates;
    };
    /**
     * Sets the geoCoordinates property value. Provides the latitude, longitude and altitude where the sign-in originated.
     * @param value Value to set for the geoCoordinates property.
     */
    public set geoCoordinates(value: GeoCoordinates | undefined) {
        if(value) {
            this._geoCoordinates = value instanceof GeoCoordinatesImpl? value : new GeoCoordinatesImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "city": n => { this.city = n.getStringValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
            "geoCoordinates": n => { this.geoCoordinates = n.getObjectValue<GeoCoordinatesImpl>(createGeoCoordinatesFromDiscriminatorValue); },
            "state": n => { this.state = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.city){
            writer.writeStringValue("city", this.city);
        }
        if(this.countryOrRegion){
            writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        }
        if(this.geoCoordinates){
            writer.writeObjectValue<GeoCoordinatesImpl>("geoCoordinates", (!this.geoCoordinates || this.geoCoordinates instanceof GeoCoordinatesImpl? this.geoCoordinates : new GeoCoordinatesImpl(this.geoCoordinates)));
        }
        if(this.state){
            writer.writeStringValue("state", this.state);
        }
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
        if(value) {
            this._state = value;
        }
    };
}
