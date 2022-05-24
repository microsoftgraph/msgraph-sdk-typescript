import {PrinterLocation} from './printerLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterLocationImpl implements AdditionalDataHolder, Parsable, PrinterLocation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The altitude, in meters, that the printer is located at. */
    public altitudeInMeters?: number | undefined;
    /** The building that the printer is located in. */
    public building?: string | undefined;
    /** The city that the printer is located in. */
    public city?: string | undefined;
    /** The country or region that the printer is located in. */
    public countryOrRegion?: string | undefined;
    /** The floor that the printer is located on. Only numerical values are supported right now. */
    public floor?: string | undefined;
    /** The description of the floor that the printer is located on. */
    public floorDescription?: string | undefined;
    /** The latitude that the printer is located at. */
    public latitude?: number | undefined;
    /** The longitude that the printer is located at. */
    public longitude?: number | undefined;
    /** The organizational hierarchy that the printer belongs to. The elements should be in hierarchical order. */
    public organization?: string[] | undefined;
    /** The postal code that the printer is located in. */
    public postalCode?: string | undefined;
    /** The description of the room that the printer is located in. */
    public roomDescription?: string | undefined;
    /** The room that the printer is located in. Only numerical values are supported right now. */
    public roomName?: string | undefined;
    /** The site that the printer is located in. */
    public site?: string | undefined;
    /** The state or province that the printer is located in. */
    public stateOrProvince?: string | undefined;
    /** The street address where the printer is located. */
    public streetAddress?: string | undefined;
    /** The subdivision that the printer is located in. The elements should be in hierarchical order. */
    public subdivision?: string[] | undefined;
    /** The subunit property */
    public subunit?: string[] | undefined;
    /**
     * Instantiates a new printerLocation and sets the default values.
     * @param printerLocationParameterValue 
     */
    public constructor(printerLocationParameterValue?: PrinterLocation | undefined) {
        this.additionalData = printerLocationParameterValue?.additionalData ? printerLocationParameterValue?.additionalData! : {}
        this.altitudeInMeters = printerLocationParameterValue?.altitudeInMeters ;
        this.building = printerLocationParameterValue?.building ;
        this.city = printerLocationParameterValue?.city ;
        this.countryOrRegion = printerLocationParameterValue?.countryOrRegion ;
        this.floor = printerLocationParameterValue?.floor ;
        this.floorDescription = printerLocationParameterValue?.floorDescription ;
        this.latitude = printerLocationParameterValue?.latitude ;
        this.longitude = printerLocationParameterValue?.longitude ;
        this.organization = printerLocationParameterValue?.organization ;
        this.postalCode = printerLocationParameterValue?.postalCode ;
        this.roomDescription = printerLocationParameterValue?.roomDescription ;
        this.roomName = printerLocationParameterValue?.roomName ;
        this.site = printerLocationParameterValue?.site ;
        this.stateOrProvince = printerLocationParameterValue?.stateOrProvince ;
        this.streetAddress = printerLocationParameterValue?.streetAddress ;
        this.subdivision = printerLocationParameterValue?.subdivision ;
        this.subunit = printerLocationParameterValue?.subunit ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "altitudeInMeters": n => { this.altitudeInMeters = n.getNumberValue(); },
            "building": n => { this.building = n.getStringValue(); },
            "city": n => { this.city = n.getStringValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
            "floor": n => { this.floor = n.getStringValue(); },
            "floorDescription": n => { this.floorDescription = n.getStringValue(); },
            "latitude": n => { this.latitude = n.getNumberValue(); },
            "longitude": n => { this.longitude = n.getNumberValue(); },
            "organization": n => { this.organization = n.getCollectionOfPrimitiveValues<string>(); },
            "postalCode": n => { this.postalCode = n.getStringValue(); },
            "roomDescription": n => { this.roomDescription = n.getStringValue(); },
            "roomName": n => { this.roomName = n.getStringValue(); },
            "site": n => { this.site = n.getStringValue(); },
            "stateOrProvince": n => { this.stateOrProvince = n.getStringValue(); },
            "streetAddress": n => { this.streetAddress = n.getStringValue(); },
            "subdivision": n => { this.subdivision = n.getCollectionOfPrimitiveValues<string>(); },
            "subunit": n => { this.subunit = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.altitudeInMeters){
        writer.writeNumberValue("altitudeInMeters", this.altitudeInMeters);
        }
        if(this.building){
        writer.writeStringValue("building", this.building);
        }
        if(this.city){
        writer.writeStringValue("city", this.city);
        }
        if(this.countryOrRegion){
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        }
        if(this.floor){
        writer.writeStringValue("floor", this.floor);
        }
        if(this.floorDescription){
        writer.writeStringValue("floorDescription", this.floorDescription);
        }
        if(this.latitude){
        writer.writeNumberValue("latitude", this.latitude);
        }
        if(this.longitude){
        writer.writeNumberValue("longitude", this.longitude);
        }
        if(this.organization){
        writer.writeCollectionOfPrimitiveValues<string>("organization", this.organization);
        }
        if(this.postalCode){
        writer.writeStringValue("postalCode", this.postalCode);
        }
        if(this.roomDescription){
        writer.writeStringValue("roomDescription", this.roomDescription);
        }
        if(this.roomName){
        writer.writeStringValue("roomName", this.roomName);
        }
        if(this.site){
        writer.writeStringValue("site", this.site);
        }
        if(this.stateOrProvince){
        writer.writeStringValue("stateOrProvince", this.stateOrProvince);
        }
        if(this.streetAddress){
        writer.writeStringValue("streetAddress", this.streetAddress);
        }
        if(this.subdivision){
        writer.writeCollectionOfPrimitiveValues<string>("subdivision", this.subdivision);
        }
        if(this.subunit){
        writer.writeCollectionOfPrimitiveValues<string>("subunit", this.subunit);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
