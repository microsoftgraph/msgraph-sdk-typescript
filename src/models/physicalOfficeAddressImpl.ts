import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhysicalOfficeAddressImpl implements PhysicalOfficeAddress {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The city. */
    private _city?: string | undefined;
    /** The country or region. It's a free-format string value, for example, 'United States'. */
    private _countryOrRegion?: string | undefined;
    /** Office location such as building and office number for an organizational contact. */
    private _officeLocation?: string | undefined;
    /** The postal code. */
    private _postalCode?: string | undefined;
    /** The state. */
    private _state?: string | undefined;
    /** The street. */
    private _street?: string | undefined;
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
     * Gets the city property value. The city.
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. The city.
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        if(value) {
            this._city = value;
        }
    };
    /**
     * Instantiates a new physicalOfficeAddress and sets the default values.
     * @param physicalOfficeAddressParameterValue 
     */
    public constructor(physicalOfficeAddressParameterValue?: PhysicalOfficeAddress | undefined) {
        this._additionalData = physicalOfficeAddressParameterValue?.additionalData ? physicalOfficeAddressParameterValue?.additionalData! : {};
        this._city = physicalOfficeAddressParameterValue?.city;
        this._countryOrRegion = physicalOfficeAddressParameterValue?.countryOrRegion;
        this._officeLocation = physicalOfficeAddressParameterValue?.officeLocation;
        this._postalCode = physicalOfficeAddressParameterValue?.postalCode;
        this._state = physicalOfficeAddressParameterValue?.state;
        this._street = physicalOfficeAddressParameterValue?.street;
    };
    /**
     * Gets the countryOrRegion property value. The country or region. It's a free-format string value, for example, 'United States'.
     * @returns a string
     */
    public get countryOrRegion() {
        return this._countryOrRegion;
    };
    /**
     * Sets the countryOrRegion property value. The country or region. It's a free-format string value, for example, 'United States'.
     * @param value Value to set for the countryOrRegion property.
     */
    public set countryOrRegion(value: string | undefined) {
        if(value) {
            this._countryOrRegion = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "city": n => { this.city = n.getStringValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "postalCode": n => { this.postalCode = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "street": n => { this.street = n.getStringValue(); },
        };
    };
    /**
     * Gets the officeLocation property value. Office location such as building and office number for an organizational contact.
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. Office location such as building and office number for an organizational contact.
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        if(value) {
            this._officeLocation = value;
        }
    };
    /**
     * Gets the postalCode property value. The postal code.
     * @returns a string
     */
    public get postalCode() {
        return this._postalCode;
    };
    /**
     * Sets the postalCode property value. The postal code.
     * @param value Value to set for the postalCode property.
     */
    public set postalCode(value: string | undefined) {
        if(value) {
            this._postalCode = value;
        }
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
        if(this.officeLocation){
            writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.postalCode){
            writer.writeStringValue("postalCode", this.postalCode);
        }
        if(this.state){
            writer.writeStringValue("state", this.state);
        }
        if(this.street){
            writer.writeStringValue("street", this.street);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the street property value. The street.
     * @returns a string
     */
    public get street() {
        return this._street;
    };
    /**
     * Sets the street property value. The street.
     * @param value Value to set for the street property.
     */
    public set street(value: string | undefined) {
        if(value) {
            this._street = value;
        }
    };
}
