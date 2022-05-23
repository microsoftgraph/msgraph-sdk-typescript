import {ColumnValidation} from './columnValidation';
import {createDisplayNameLocalizationFromDiscriminatorValue} from './createDisplayNameLocalizationFromDiscriminatorValue';
import {DisplayNameLocalization} from './displayNameLocalization';
import {DisplayNameLocalizationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ColumnValidationImpl implements AdditionalDataHolder, ColumnValidation, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Default BCP 47 language tag for the description. */
    public defaultLanguage?: string | undefined;
    /** Localized messages that explain what is needed for this column's value to be considered valid. User will be prompted with this message if validation fails. */
    public descriptions?: DisplayNameLocalization[] | undefined;
    /** The formula to validate column value. For examples, see Examples of common formulas in lists */
    public formula?: string | undefined;
    /**
     * Instantiates a new columnValidation and sets the default values.
     * @param columnValidationParameterValue 
     */
    public constructor(columnValidationParameterValue?: ColumnValidation | undefined) {
        this.additionalData = columnValidationParameterValue?.additionalData ? columnValidationParameterValue?.additionalData! : {}
        this.defaultLanguage = columnValidationParameterValue?.defaultLanguage ;
        this.descriptions = columnValidationParameterValue?.descriptions ;
        this.formula = columnValidationParameterValue?.formula ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "defaultLanguage": n => { this.defaultLanguage = n.getStringValue(); },
            "descriptions": n => { this.descriptions = n.getCollectionOfObjectValues<DisplayNameLocalizationImpl>(createDisplayNameLocalizationFromDiscriminatorValue); },
            "formula": n => { this.formula = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.defaultLanguage){
        writer.writeStringValue("defaultLanguage", this.defaultLanguage);
        }
        if(this.descriptions && this.descriptions.length != 0){        const descriptionsArrValue: DisplayNameLocalizationImpl[] = []; this.descriptions?.forEach(element => {descriptionsArrValue.push(new DisplayNameLocalizationImpl(element));});
        writer.writeCollectionOfObjectValues<DisplayNameLocalizationImpl>("descriptions", descriptionsArrValue);
        }
        if(this.formula){
        writer.writeStringValue("formula", this.formula);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
