import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterLocation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The altitude, in meters, that the printer is located at. */
    private _altitudeInMeters?: number | undefined;
    /** The building that the printer is located in. */
    private _building?: string | undefined;
    /** The city that the printer is located in. */
    private _city?: string | undefined;
    /** The country or region that the printer is located in. */
    private _countryOrRegion?: string | undefined;
    /** The floor that the printer is located on. Only numerical values are supported right now. */
    private _floor?: string | undefined;
    /** The description of the floor that the printer is located on. */
    private _floorDescription?: string | undefined;
    /** The latitude that the printer is located at. */
    private _latitude?: number | undefined;
    /** The longitude that the printer is located at. */
    private _longitude?: number | undefined;
    /** The organizational hierarchy that the printer belongs to. The elements should be in hierarchical order. */
    private _organization?: string[] | undefined;
    /** The postal code that the printer is located in. */
    private _postalCode?: string | undefined;
    /** The description of the room that the printer is located in. */
    private _roomDescription?: string | undefined;
    /** The room that the printer is located in. Only numerical values are supported right now. */
    private _roomName?: string | undefined;
    /** The site that the printer is located in. */
    private _site?: string | undefined;
    /** The state or province that the printer is located in. */
    private _stateOrProvince?: string | undefined;
    /** The street address where the printer is located. */
    private _streetAddress?: string | undefined;
    /** The subdivision that the printer is located in. The elements should be in hierarchical order. */
    private _subdivision?: string[] | undefined;
    /** The subunit property */
    private _subunit?: string[] | undefined;
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
     * Gets the altitudeInMeters property value. The altitude, in meters, that the printer is located at.
     * @returns a integer
     */
    public get altitudeInMeters() {
        return this._altitudeInMeters;
    };
    /**
     * Sets the altitudeInMeters property value. The altitude, in meters, that the printer is located at.
     * @param value Value to set for the altitudeInMeters property.
     */
    public set altitudeInMeters(value: number | undefined) {
        this._altitudeInMeters = value;
    };
    /**
     * Gets the building property value. The building that the printer is located in.
     * @returns a string
     */
    public get building() {
        return this._building;
    };
    /**
     * Sets the building property value. The building that the printer is located in.
     * @param value Value to set for the building property.
     */
    public set building(value: string | undefined) {
        this._building = value;
    };
    /**
     * Gets the city property value. The city that the printer is located in.
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. The city that the printer is located in.
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Instantiates a new printerLocation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the countryOrRegion property value. The country or region that the printer is located in.
     * @returns a string
     */
    public get countryOrRegion() {
        return this._countryOrRegion;
    };
    /**
     * Sets the countryOrRegion property value. The country or region that the printer is located in.
     * @param value Value to set for the countryOrRegion property.
     */
    public set countryOrRegion(value: string | undefined) {
        this._countryOrRegion = value;
    };
    /**
     * Gets the floor property value. The floor that the printer is located on. Only numerical values are supported right now.
     * @returns a string
     */
    public get floor() {
        return this._floor;
    };
    /**
     * Sets the floor property value. The floor that the printer is located on. Only numerical values are supported right now.
     * @param value Value to set for the floor property.
     */
    public set floor(value: string | undefined) {
        this._floor = value;
    };
    /**
     * Gets the floorDescription property value. The description of the floor that the printer is located on.
     * @returns a string
     */
    public get floorDescription() {
        return this._floorDescription;
    };
    /**
     * Sets the floorDescription property value. The description of the floor that the printer is located on.
     * @param value Value to set for the floorDescription property.
     */
    public set floorDescription(value: string | undefined) {
        this._floorDescription = value;
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
     * Gets the latitude property value. The latitude that the printer is located at.
     * @returns a double
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Sets the latitude property value. The latitude that the printer is located at.
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | undefined) {
        this._latitude = value;
    };
    /**
     * Gets the longitude property value. The longitude that the printer is located at.
     * @returns a double
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * Sets the longitude property value. The longitude that the printer is located at.
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | undefined) {
        this._longitude = value;
    };
    /**
     * Gets the organization property value. The organizational hierarchy that the printer belongs to. The elements should be in hierarchical order.
     * @returns a string
     */
    public get organization() {
        return this._organization;
    };
    /**
     * Sets the organization property value. The organizational hierarchy that the printer belongs to. The elements should be in hierarchical order.
     * @param value Value to set for the organization property.
     */
    public set organization(value: string[] | undefined) {
        this._organization = value;
    };
    /**
     * Gets the postalCode property value. The postal code that the printer is located in.
     * @returns a string
     */
    public get postalCode() {
        return this._postalCode;
    };
    /**
     * Sets the postalCode property value. The postal code that the printer is located in.
     * @param value Value to set for the postalCode property.
     */
    public set postalCode(value: string | undefined) {
        this._postalCode = value;
    };
    /**
     * Gets the roomDescription property value. The description of the room that the printer is located in.
     * @returns a string
     */
    public get roomDescription() {
        return this._roomDescription;
    };
    /**
     * Sets the roomDescription property value. The description of the room that the printer is located in.
     * @param value Value to set for the roomDescription property.
     */
    public set roomDescription(value: string | undefined) {
        this._roomDescription = value;
    };
    /**
     * Gets the roomName property value. The room that the printer is located in. Only numerical values are supported right now.
     * @returns a string
     */
    public get roomName() {
        return this._roomName;
    };
    /**
     * Sets the roomName property value. The room that the printer is located in. Only numerical values are supported right now.
     * @param value Value to set for the roomName property.
     */
    public set roomName(value: string | undefined) {
        this._roomName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("altitudeInMeters", this.altitudeInMeters);
        writer.writeStringValue("building", this.building);
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        writer.writeStringValue("floor", this.floor);
        writer.writeStringValue("floorDescription", this.floorDescription);
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeCollectionOfPrimitiveValues<string>("organization", this.organization);
        writer.writeStringValue("postalCode", this.postalCode);
        writer.writeStringValue("roomDescription", this.roomDescription);
        writer.writeStringValue("roomName", this.roomName);
        writer.writeStringValue("site", this.site);
        writer.writeStringValue("stateOrProvince", this.stateOrProvince);
        writer.writeStringValue("streetAddress", this.streetAddress);
        writer.writeCollectionOfPrimitiveValues<string>("subdivision", this.subdivision);
        writer.writeCollectionOfPrimitiveValues<string>("subunit", this.subunit);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the site property value. The site that the printer is located in.
     * @returns a string
     */
    public get site() {
        return this._site;
    };
    /**
     * Sets the site property value. The site that the printer is located in.
     * @param value Value to set for the site property.
     */
    public set site(value: string | undefined) {
        this._site = value;
    };
    /**
     * Gets the stateOrProvince property value. The state or province that the printer is located in.
     * @returns a string
     */
    public get stateOrProvince() {
        return this._stateOrProvince;
    };
    /**
     * Sets the stateOrProvince property value. The state or province that the printer is located in.
     * @param value Value to set for the stateOrProvince property.
     */
    public set stateOrProvince(value: string | undefined) {
        this._stateOrProvince = value;
    };
    /**
     * Gets the streetAddress property value. The street address where the printer is located.
     * @returns a string
     */
    public get streetAddress() {
        return this._streetAddress;
    };
    /**
     * Sets the streetAddress property value. The street address where the printer is located.
     * @param value Value to set for the streetAddress property.
     */
    public set streetAddress(value: string | undefined) {
        this._streetAddress = value;
    };
    /**
     * Gets the subdivision property value. The subdivision that the printer is located in. The elements should be in hierarchical order.
     * @returns a string
     */
    public get subdivision() {
        return this._subdivision;
    };
    /**
     * Sets the subdivision property value. The subdivision that the printer is located in. The elements should be in hierarchical order.
     * @param value Value to set for the subdivision property.
     */
    public set subdivision(value: string[] | undefined) {
        this._subdivision = value;
    };
    /**
     * Gets the subunit property value. The subunit property
     * @returns a string
     */
    public get subunit() {
        return this._subunit;
    };
    /**
     * Sets the subunit property value. The subunit property
     * @param value Value to set for the subunit property.
     */
    public set subunit(value: string[] | undefined) {
        this._subunit = value;
    };
}
