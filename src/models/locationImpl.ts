import {createOutlookGeoCoordinatesFromDiscriminatorValue} from './createOutlookGeoCoordinatesFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {OutlookGeoCoordinatesImpl, PhysicalAddressImpl} from './index';
import {Location} from './location';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {PhysicalAddress} from './physicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocationImpl implements Location {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The street address of the location. */
    private _address?: PhysicalAddress | undefined;
    /** The geographic coordinates and elevation of the location. */
    private _coordinates?: OutlookGeoCoordinates | undefined;
    /** The name associated with the location. */
    private _displayName?: string | undefined;
    /** Optional email address of the location. */
    private _locationEmailAddress?: string | undefined;
    /** The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only. */
    private _locationType?: LocationType | undefined;
    /** Optional URI representing the location. */
    private _locationUri?: string | undefined;
    /** For internal use only. */
    private _uniqueId?: string | undefined;
    /** For internal use only. */
    private _uniqueIdType?: LocationUniqueIdType | undefined;
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
     * Gets the address property value. The street address of the location.
     * @returns a PhysicalAddressInterface
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The street address of the location.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        if(value) {
            this._address = value instanceof PhysicalAddressImpl? value : new PhysicalAddressImpl(value);
        }
    };
    /**
     * Instantiates a new location and sets the default values.
     * @param locationParameterValue 
     */
    public constructor(locationParameterValue?: Location | undefined) {
        this._additionalData = locationParameterValue?.additionalData ? locationParameterValue?.additionalData! : {};
        this._address = locationParameterValue?.address;
        this._coordinates = locationParameterValue?.coordinates;
        this._displayName = locationParameterValue?.displayName;
        this._locationEmailAddress = locationParameterValue?.locationEmailAddress;
        this._locationType = locationParameterValue?.locationType;
        this._locationUri = locationParameterValue?.locationUri;
        this._uniqueId = locationParameterValue?.uniqueId;
        this._uniqueIdType = locationParameterValue?.uniqueIdType;
    };
    /**
     * Gets the coordinates property value. The geographic coordinates and elevation of the location.
     * @returns a OutlookGeoCoordinatesInterface
     */
    public get coordinates() {
        return this._coordinates;
    };
    /**
     * Sets the coordinates property value. The geographic coordinates and elevation of the location.
     * @param value Value to set for the coordinates property.
     */
    public set coordinates(value: OutlookGeoCoordinates | undefined) {
        if(value) {
            this._coordinates = value instanceof OutlookGeoCoordinatesImpl? value : new OutlookGeoCoordinatesImpl(value);
        }
    };
    /**
     * Gets the displayName property value. The name associated with the location.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name associated with the location.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the locationEmailAddress property value. Optional email address of the location.
     * @returns a string
     */
    public get locationEmailAddress() {
        return this._locationEmailAddress;
    };
    /**
     * Sets the locationEmailAddress property value. Optional email address of the location.
     * @param value Value to set for the locationEmailAddress property.
     */
    public set locationEmailAddress(value: string | undefined) {
        if(value) {
            this._locationEmailAddress = value;
        }
    };
    /**
     * Gets the locationType property value. The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     * @returns a locationType
     */
    public get locationType() {
        return this._locationType;
    };
    /**
     * Sets the locationType property value. The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     * @param value Value to set for the locationType property.
     */
    public set locationType(value: LocationType | undefined) {
        if(value) {
            this._locationType = value;
        }
    };
    /**
     * Gets the locationUri property value. Optional URI representing the location.
     * @returns a string
     */
    public get locationUri() {
        return this._locationUri;
    };
    /**
     * Sets the locationUri property value. Optional URI representing the location.
     * @param value Value to set for the locationUri property.
     */
    public set locationUri(value: string | undefined) {
        if(value) {
            this._locationUri = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
            writer.writeObjectValue<PhysicalAddressImpl>("address", (!this.address || this.address instanceof PhysicalAddressImpl? this.address : new PhysicalAddressImpl(this.address)));
        }
        if(this.coordinates){
            writer.writeObjectValue<OutlookGeoCoordinatesImpl>("coordinates", (!this.coordinates || this.coordinates instanceof OutlookGeoCoordinatesImpl? this.coordinates : new OutlookGeoCoordinatesImpl(this.coordinates)));
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
    /**
     * Gets the uniqueId property value. For internal use only.
     * @returns a string
     */
    public get uniqueId() {
        return this._uniqueId;
    };
    /**
     * Sets the uniqueId property value. For internal use only.
     * @param value Value to set for the uniqueId property.
     */
    public set uniqueId(value: string | undefined) {
        if(value) {
            this._uniqueId = value;
        }
    };
    /**
     * Gets the uniqueIdType property value. For internal use only.
     * @returns a locationUniqueIdType
     */
    public get uniqueIdType() {
        return this._uniqueIdType;
    };
    /**
     * Sets the uniqueIdType property value. For internal use only.
     * @param value Value to set for the uniqueIdType property.
     */
    public set uniqueIdType(value: LocationUniqueIdType | undefined) {
        if(value) {
            this._uniqueIdType = value;
        }
    };
}
