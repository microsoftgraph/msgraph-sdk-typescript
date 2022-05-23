import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {GeoCoordinates} from './geoCoordinates';
import {GeoCoordinatesImpl} from './index';
import {SignInLocation} from './signInLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInLocationImpl implements AdditionalDataHolder, Parsable, SignInLocation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity. */
    public city?: string | undefined;
    /** Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity. */
    public countryOrRegion?: string | undefined;
    /** Provides the latitude, longitude and altitude where the sign-in originated. */
    public geoCoordinates?: GeoCoordinates | undefined;
    /** Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity. */
    public state?: string | undefined;
    /**
     * Instantiates a new signInLocation and sets the default values.
     * @param signInLocationParameterValue 
     */
    public constructor(signInLocationParameterValue?: SignInLocation | undefined) {
        this.additionalData = signInLocationParameterValue?.additionalData ? signInLocationParameterValue?.additionalData! : {}
        this.city = signInLocationParameterValue?.city ;
        this.countryOrRegion = signInLocationParameterValue?.countryOrRegion ;
        this.geoCoordinates = signInLocationParameterValue?.geoCoordinates ;
        this.state = signInLocationParameterValue?.state ;
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
        writer.writeObjectValue<GeoCoordinatesImpl>("geoCoordinates", new GeoCoordinatesImpl(this.geoCoordinates));
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
