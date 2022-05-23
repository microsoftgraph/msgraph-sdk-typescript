import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookGeoCoordinatesImpl implements AdditionalDataHolder, OutlookGeoCoordinates, Parsable {
    /** The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude and longitude are accurate to within 50 meters. */
    public accuracy?: number | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The altitude of the location. */
    public altitude?: number | undefined;
    /** The accuracy of the altitude. */
    public altitudeAccuracy?: number | undefined;
    /** The latitude of the location. */
    public latitude?: number | undefined;
    /** The longitude of the location. */
    public longitude?: number | undefined;
    /**
     * Instantiates a new outlookGeoCoordinates and sets the default values.
     * @param outlookGeoCoordinatesParameterValue 
     */
    public constructor(outlookGeoCoordinatesParameterValue?: OutlookGeoCoordinates | undefined) {
        this.accuracy = outlookGeoCoordinatesParameterValue?.accuracy ;
        this.additionalData = outlookGeoCoordinatesParameterValue?.additionalData ? outlookGeoCoordinatesParameterValue?.additionalData! : {}
        this.altitude = outlookGeoCoordinatesParameterValue?.altitude ;
        this.altitudeAccuracy = outlookGeoCoordinatesParameterValue?.altitudeAccuracy ;
        this.latitude = outlookGeoCoordinatesParameterValue?.latitude ;
        this.longitude = outlookGeoCoordinatesParameterValue?.longitude ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accuracy": n => { this.accuracy = n.getNumberValue(); },
            "altitude": n => { this.altitude = n.getNumberValue(); },
            "altitudeAccuracy": n => { this.altitudeAccuracy = n.getNumberValue(); },
            "latitude": n => { this.latitude = n.getNumberValue(); },
            "longitude": n => { this.longitude = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accuracy){
        writer.writeNumberValue("accuracy", this.accuracy);
        }
        if(this.altitude){
        writer.writeNumberValue("altitude", this.altitude);
        }
        if(this.altitudeAccuracy){
        writer.writeNumberValue("altitudeAccuracy", this.altitudeAccuracy);
        }
        if(this.latitude){
        writer.writeNumberValue("latitude", this.latitude);
        }
        if(this.longitude){
        writer.writeNumberValue("longitude", this.longitude);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
