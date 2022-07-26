import {CountryLookupMethodType} from './countryLookupMethodType';
import {NamedLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CountryNamedLocation extends NamedLocation implements Parsable {
    /** List of countries and/or regions in two-letter format specified by ISO 3166-2. */
    private _countriesAndRegions?: string[] | undefined;
    /** Determines what method is used to decide which country the user is located in. Possible values are clientIpAddress (default) and authenticatorAppGps. */
    private _countryLookupMethod?: CountryLookupMethodType | undefined;
    /** true if IP addresses that don't map to a country or region should be included in the named location. Optional. Default value is false. */
    private _includeUnknownCountriesAndRegions?: boolean | undefined;
    /**
     * Instantiates a new CountryNamedLocation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.countryNamedLocation";
    };
    /**
     * Gets the countriesAndRegions property value. List of countries and/or regions in two-letter format specified by ISO 3166-2.
     * @returns a string
     */
    public get countriesAndRegions() {
        return this._countriesAndRegions;
    };
    /**
     * Sets the countriesAndRegions property value. List of countries and/or regions in two-letter format specified by ISO 3166-2.
     * @param value Value to set for the countriesAndRegions property.
     */
    public set countriesAndRegions(value: string[] | undefined) {
        this._countriesAndRegions = value;
    };
    /**
     * Gets the countryLookupMethod property value. Determines what method is used to decide which country the user is located in. Possible values are clientIpAddress (default) and authenticatorAppGps.
     * @returns a countryLookupMethodType
     */
    public get countryLookupMethod() {
        return this._countryLookupMethod;
    };
    /**
     * Sets the countryLookupMethod property value. Determines what method is used to decide which country the user is located in. Possible values are clientIpAddress (default) and authenticatorAppGps.
     * @param value Value to set for the countryLookupMethod property.
     */
    public set countryLookupMethod(value: CountryLookupMethodType | undefined) {
        this._countryLookupMethod = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "countriesAndRegions": n => { this.countriesAndRegions = n.getCollectionOfPrimitiveValues<string>(); },
            "countryLookupMethod": n => { this.countryLookupMethod = n.getEnumValue<CountryLookupMethodType>(CountryLookupMethodType); },
            "includeUnknownCountriesAndRegions": n => { this.includeUnknownCountriesAndRegions = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the includeUnknownCountriesAndRegions property value. true if IP addresses that don't map to a country or region should be included in the named location. Optional. Default value is false.
     * @returns a boolean
     */
    public get includeUnknownCountriesAndRegions() {
        return this._includeUnknownCountriesAndRegions;
    };
    /**
     * Sets the includeUnknownCountriesAndRegions property value. true if IP addresses that don't map to a country or region should be included in the named location. Optional. Default value is false.
     * @param value Value to set for the includeUnknownCountriesAndRegions property.
     */
    public set includeUnknownCountriesAndRegions(value: boolean | undefined) {
        this._includeUnknownCountriesAndRegions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("countriesAndRegions", this.countriesAndRegions);
        writer.writeEnumValue<CountryLookupMethodType>("countryLookupMethod", this.countryLookupMethod);
        writer.writeBooleanValue("includeUnknownCountriesAndRegions", this.includeUnknownCountriesAndRegions);
    };
}
