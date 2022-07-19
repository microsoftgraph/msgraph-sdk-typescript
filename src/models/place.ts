import {createOutlookGeoCoordinatesFromDiscriminatorValue} from './createOutlookGeoCoordinatesFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {Entity, OutlookGeoCoordinates, PhysicalAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Place extends Entity implements Parsable {
    /** The street address of the place. */
    private _address?: PhysicalAddress | undefined;
    /** The name associated with the place. */
    private _displayName?: string | undefined;
    /** Specifies the place location in latitude, longitude and (optionally) altitude coordinates. */
    private _geoCoordinates?: OutlookGeoCoordinates | undefined;
    /** The phone number of the place. */
    private _phone?: string | undefined;
    /**
     * Gets the address property value. The street address of the place.
     * @returns a physicalAddress
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The street address of the place.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new Place and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.place";
    };
    /**
     * Gets the displayName property value. The name associated with the place.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name associated with the place.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
     * @returns a outlookGeoCoordinates
     */
    public get geoCoordinates() {
        return this._geoCoordinates;
    };
    /**
     * Sets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
     * @param value Value to set for the geoCoordinates property.
     */
    public set geoCoordinates(value: OutlookGeoCoordinates | undefined) {
        this._geoCoordinates = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "address": n => { this.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "geoCoordinates": n => { this.geoCoordinates = n.getObjectValue<OutlookGeoCoordinates>(createOutlookGeoCoordinatesFromDiscriminatorValue); },
            "phone": n => { this.phone = n.getStringValue(); },
        };
    };
    /**
     * Gets the phone property value. The phone number of the place.
     * @returns a string
     */
    public get phone() {
        return this._phone;
    };
    /**
     * Sets the phone property value. The phone number of the place.
     * @param value Value to set for the phone property.
     */
    public set phone(value: string | undefined) {
        this._phone = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PhysicalAddress>("address", this.address);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<OutlookGeoCoordinates>("geoCoordinates", this.geoCoordinates);
        writer.writeStringValue("phone", this.phone);
    };
}
