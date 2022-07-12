import {AdminMember1, OutlookGeoCoordinates, PhysicalAddress} from './index';
import {LocationType} from './locationType';
import {LocationUniqueIdType} from './locationUniqueIdType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Location implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The street address of the location. */
    private _address?: PhysicalAddress | AdminMember1 | undefined;
    /** The geographic coordinates and elevation of the location. */
    private _coordinates?: OutlookGeoCoordinates | AdminMember1 | undefined;
    /** The name associated with the location. */
    private _displayName?: string | undefined;
    /** Optional email address of the location. */
    private _locationEmailAddress?: string | undefined;
    /** The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only. */
    private _locationType?: LocationType | AdminMember1 | undefined;
    /** Optional URI representing the location. */
    private _locationUri?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** For internal use only. */
    private _uniqueId?: string | undefined;
    /** For internal use only. */
    private _uniqueIdType?: LocationUniqueIdType | AdminMember1 | undefined;
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
     * Gets the address property value. The street address of the location.
     * @returns a admin
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The street address of the location.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | AdminMember1 | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new location and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.type = "#microsoft.graph.location";
    };
    /**
     * Gets the coordinates property value. The geographic coordinates and elevation of the location.
     * @returns a admin
     */
    public get coordinates() {
        return this._coordinates;
    };
    /**
     * Sets the coordinates property value. The geographic coordinates and elevation of the location.
     * @param value Value to set for the coordinates property.
     */
    public set coordinates(value: OutlookGeoCoordinates | AdminMember1 | undefined) {
        this._coordinates = value;
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
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "coordinates": n => { this.coordinates = n.getObjectValue<OutlookGeoCoordinates>(createOutlookGeoCoordinatesFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "locationEmailAddress": n => { this.locationEmailAddress = n.getStringValue(); },
            "locationType": n => { this.locationType = n.getObjectValue<LocationType>(createLocationTypeFromDiscriminatorValue); },
            "locationUri": n => { this.locationUri = n.getStringValue(); },
            "@odata.type": n => { this.type = n.getStringValue(); },
            "uniqueId": n => { this.uniqueId = n.getStringValue(); },
            "uniqueIdType": n => { this.uniqueIdType = n.getObjectValue<LocationUniqueIdType>(createLocationUniqueIdTypeFromDiscriminatorValue); },
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
        this._locationEmailAddress = value;
    };
    /**
     * Gets the locationType property value. The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     * @returns a admin
     */
    public get locationType() {
        return this._locationType;
    };
    /**
     * Sets the locationType property value. The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     * @param value Value to set for the locationType property.
     */
    public set locationType(value: LocationType | AdminMember1 | undefined) {
        this._locationType = value;
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
        this._locationUri = value;
    };
    /**
     * Gets the @odata.type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the @odata.type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PhysicalAddress>("address", this.address);
        writer.writeObjectValue<OutlookGeoCoordinates>("coordinates", this.coordinates);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("locationEmailAddress", this.locationEmailAddress);
        writer.writeObjectValue<LocationType>("locationType", this.locationType);
        writer.writeStringValue("locationUri", this.locationUri);
        writer.writeStringValue("@odata.type", this.type);
        writer.writeStringValue("uniqueId", this.uniqueId);
        writer.writeObjectValue<LocationUniqueIdType>("uniqueIdType", this.uniqueIdType);
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
        this._uniqueId = value;
    };
    /**
     * Gets the uniqueIdType property value. For internal use only.
     * @returns a admin
     */
    public get uniqueIdType() {
        return this._uniqueIdType;
    };
    /**
     * Sets the uniqueIdType property value. For internal use only.
     * @param value Value to set for the uniqueIdType property.
     */
    public set uniqueIdType(value: LocationUniqueIdType | AdminMember1 | undefined) {
        this._uniqueIdType = value;
    };
}
