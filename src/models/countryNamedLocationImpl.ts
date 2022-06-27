import {CountryLookupMethodType} from './countryLookupMethodType';
import {CountryNamedLocation} from './countryNamedLocation';
import {NamedLocationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CountryNamedLocationImpl extends NamedLocationImpl implements CountryNamedLocation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** List of countries and/or regions in two-letter format specified by ISO 3166-2. */
    public countriesAndRegions?: string[] | undefined;
    /** Determines what method is used to decide which country the user is located in. Possible values are clientIpAddress (default) and authenticatorAppGps. */
    public countryLookupMethod?: CountryLookupMethodType | undefined;
    /** true if IP addresses that don't map to a country or region should be included in the named location. Optional. Default value is false. */
    public includeUnknownCountriesAndRegions?: boolean | undefined;
    /**
     * Instantiates a new CountryNamedLocation and sets the default values.
     * @param countryNamedLocationParameterValue 
     */
    public constructor(countryNamedLocationParameterValue?: CountryNamedLocation | undefined) {
        super(countryNamedLocationParameterValue);
        this.additionalData = countryNamedLocationParameterValue?.additionalData ? countryNamedLocationParameterValue?.additionalData! : {};
        this.countriesAndRegions = countryNamedLocationParameterValue?.countriesAndRegions;
        this.countryLookupMethod = countryNamedLocationParameterValue?.countryLookupMethod;
        this.includeUnknownCountriesAndRegions = countryNamedLocationParameterValue?.includeUnknownCountriesAndRegions;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.countriesAndRegions){
            writer.writeCollectionOfPrimitiveValues<string>("countriesAndRegions", this.countriesAndRegions);
        }
        if(this.countryLookupMethod){
            writer.writeEnumValue<CountryLookupMethodType>("countryLookupMethod", this.countryLookupMethod);
        }
        if(this.includeUnknownCountriesAndRegions){
            writer.writeBooleanValue("includeUnknownCountriesAndRegions", this.includeUnknownCountriesAndRegions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
