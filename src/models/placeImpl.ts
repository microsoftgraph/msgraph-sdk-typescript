import {createOutlookGeoCoordinatesFromDiscriminatorValue} from './createOutlookGeoCoordinatesFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {EntityImpl, OutlookGeoCoordinatesImpl, PhysicalAddressImpl} from './index';
import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {PhysicalAddress} from './physicalAddress';
import {Place} from './place';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of place entities. */
export class PlaceImpl extends EntityImpl implements Place {
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
     * @returns a PhysicalAddressInterface
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The street address of the place.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        if(value) {
            this._address = value instanceof PhysicalAddressImpl? value : new PhysicalAddressImpl(value);
        }
    };
    /**
     * Instantiates a new place and sets the default values.
     * @param placeParameterValue 
     */
    public constructor(placeParameterValue?: Place | undefined) {
        super(placeParameterValue);
        this._address = placeParameterValue?.address;
        this._displayName = placeParameterValue?.displayName;
        this._geoCoordinates = placeParameterValue?.geoCoordinates;
        this._phone = placeParameterValue?.phone;
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
     * @returns a OutlookGeoCoordinatesInterface
     */
    public get geoCoordinates() {
        return this._geoCoordinates;
    };
    /**
     * Sets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
     * @param value Value to set for the geoCoordinates property.
     */
    public set geoCoordinates(value: OutlookGeoCoordinates | undefined) {
        if(value) {
            this._geoCoordinates = value instanceof OutlookGeoCoordinatesImpl? value : new OutlookGeoCoordinatesImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "address": n => { this.address = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "geoCoordinates": n => { this.geoCoordinates = n.getObjectValue<OutlookGeoCoordinatesImpl>(createOutlookGeoCoordinatesFromDiscriminatorValue); },
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
        if(value) {
            this._phone = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.address){
            writer.writeObjectValue<PhysicalAddressImpl>("address", (!this.address || this.address instanceof PhysicalAddressImpl? this.address : new PhysicalAddressImpl(this.address)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.geoCoordinates){
            writer.writeObjectValue<OutlookGeoCoordinatesImpl>("geoCoordinates", (!this.geoCoordinates || this.geoCoordinates instanceof OutlookGeoCoordinatesImpl? this.geoCoordinates : new OutlookGeoCoordinatesImpl(this.geoCoordinates)));
        }
        if(this.phone){
            writer.writeStringValue("phone", this.phone);
        }
    };
}
