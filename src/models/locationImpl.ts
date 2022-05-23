import {createOutlookGeoCoordinatesFromDiscriminatorValue} from './createOutlookGeoCoordinatesFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {OutlookGeoCoordinatesImpl, PhysicalAddressImpl} from './index';
import {Location} from './location';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {PhysicalAddress} from './physicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocationImpl implements AdditionalDataHolder, Location, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The street address of the location. */
    public address?: PhysicalAddress | undefined;
    /** The geographic coordinates and elevation of the location. */
    public coordinates?: OutlookGeoCoordinates | undefined;
    /** The name associated with the location. */
    public displayName?: string | undefined;
    /** Optional email address of the location. */
    public locationEmailAddress?: string | undefined;
    /** The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only. */
    public locationType?: LocationType | undefined;
    /** Optional URI representing the location. */
    public locationUri?: string | undefined;
    /** For internal use only. */
    public uniqueId?: string | undefined;
    /** For internal use only. */
    public uniqueIdType?: LocationUniqueIdType | undefined;
    /**
     * Instantiates a new location and sets the default values.
     * @param locationParameterValue 
     */
    public constructor(locationParameterValue?: Location | undefined) {
        this.additionalData = locationParameterValue?.additionalData ? locationParameterValue?.additionalData! : {}
        this.address = locationParameterValue?.address ;
        this.coordinates = locationParameterValue?.coordinates ;
        this.displayName = locationParameterValue?.displayName ;
        this.locationEmailAddress = locationParameterValue?.locationEmailAddress ;
        this.locationType = locationParameterValue?.locationType ;
        this.locationUri = locationParameterValue?.locationUri ;
        this.uniqueId = locationParameterValue?.uniqueId ;
        this.uniqueIdType = locationParameterValue?.uniqueIdType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "coordinates": n => { this.coordinates = n.getObjectValue<OutlookGeoCoordinatesImpl>(createOutlookGeoCoordinatesFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "locationEmailAddress": n => { this.locationEmailAddress = n.getStringValue(); },
            "locationType": n => { this.locationType = n.getEnumValue<LocationType>(LocationType); },
            "locationUri": n => { this.locationUri = n.getStringValue(); },
            "uniqueId": n => { this.uniqueId = n.getStringValue(); },
            "uniqueIdType": n => { this.uniqueIdType = n.getEnumValue<LocationUniqueIdType>(LocationUniqueIdType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
        writer.writeObjectValue<PhysicalAddressImpl>("address", new PhysicalAddressImpl(this.address));
        }
        if(this.coordinates){
        writer.writeObjectValue<OutlookGeoCoordinatesImpl>("coordinates", new OutlookGeoCoordinatesImpl(this.coordinates));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.locationEmailAddress){
        writer.writeStringValue("locationEmailAddress", this.locationEmailAddress);
        }
        if(this.locationType){
        writer.writeEnumValue<LocationType>("locationType", this.locationType);
        }
        if(this.locationUri){
        writer.writeStringValue("locationUri", this.locationUri);
        }
        if(this.uniqueId){
        writer.writeStringValue("uniqueId", this.uniqueId);
        }
        if(this.uniqueIdType){
        writer.writeEnumValue<LocationUniqueIdType>("uniqueIdType", this.uniqueIdType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
