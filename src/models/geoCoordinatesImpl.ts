import {GeoCoordinates} from './geoCoordinates';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GeoCoordinatesImpl implements AdditionalDataHolder, GeoCoordinates, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Optional. The altitude (height), in feet,  above sea level for the item. Read-only. */
    public altitude?: number | undefined;
    /** Optional. The latitude, in decimal, for the item. Writable on OneDrive Personal. */
    public latitude?: number | undefined;
    /** Optional. The longitude, in decimal, for the item. Writable on OneDrive Personal. */
    public longitude?: number | undefined;
    /**
     * Instantiates a new geoCoordinates and sets the default values.
     * @param geoCoordinatesParameterValue 
     */
    public constructor(geoCoordinatesParameterValue?: GeoCoordinates | undefined) {
        this.additionalData = geoCoordinatesParameterValue?.additionalData ? geoCoordinatesParameterValue?.additionalData! : {}
        this.altitude = geoCoordinatesParameterValue?.altitude ;
        this.latitude = geoCoordinatesParameterValue?.latitude ;
        this.longitude = geoCoordinatesParameterValue?.longitude ;
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
        if(this.latitude){
        writer.writeNumberValue("latitude", this.latitude);
        }
        if(this.longitude){
        writer.writeNumberValue("longitude", this.longitude);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
