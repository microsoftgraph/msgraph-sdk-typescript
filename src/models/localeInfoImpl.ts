import {LocaleInfo} from './localeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocaleInfoImpl implements AdditionalDataHolder, LocaleInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A name representing the user's locale in natural language, for example, 'English (United States)'. */
    public displayName?: string | undefined;
    /** A locale representation for the user, which includes the user's preferred language and country/region. For example, 'en-us'. The language component follows 2-letter codes as defined in ISO 639-1, and the country component follows 2-letter codes as defined in ISO 3166-1 alpha-2. */
    public locale?: string | undefined;
    /**
     * Instantiates a new localeInfo and sets the default values.
     * @param localeInfoParameterValue 
     */
    public constructor(localeInfoParameterValue?: LocaleInfo | undefined) {
        this.additionalData = localeInfoParameterValue?.additionalData ? localeInfoParameterValue?.additionalData! : {}
        this.displayName = localeInfoParameterValue?.displayName ;
        this.locale = localeInfoParameterValue?.locale ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "locale": n => { this.locale = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.locale){
        writer.writeStringValue("locale", this.locale);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
