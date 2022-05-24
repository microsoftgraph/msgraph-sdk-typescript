import {LocaleInfoImpl} from '../../../models/';
import {createLocaleInfoFromDiscriminatorValue} from '../../../models/createLocaleInfoFromDiscriminatorValue';
import {LocaleInfo} from '../../../models/localeInfo';
import {SupportedLanguagesResponse} from './supportedLanguagesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedLanguages method. */
export class SupportedLanguagesResponseImpl implements AdditionalDataHolder, Parsable, SupportedLanguagesResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: LocaleInfo[] | undefined;
    /**
     * Instantiates a new supportedLanguagesResponse and sets the default values.
     * @param supportedLanguagesResponseParameterValue 
     */
    public constructor(supportedLanguagesResponseParameterValue?: SupportedLanguagesResponse | undefined) {
        this.additionalData = supportedLanguagesResponseParameterValue?.additionalData ? supportedLanguagesResponseParameterValue?.additionalData! : {}
        this.value = supportedLanguagesResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<LocaleInfoImpl>(createLocaleInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: LocaleInfoImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new LocaleInfoImpl(element));});
        writer.writeCollectionOfObjectValues<LocaleInfoImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
