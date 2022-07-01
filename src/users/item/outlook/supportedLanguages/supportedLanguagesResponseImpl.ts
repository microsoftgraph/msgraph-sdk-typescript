import {LocaleInfoImpl} from '../../../../models/';
import {createLocaleInfoFromDiscriminatorValue} from '../../../../models/createLocaleInfoFromDiscriminatorValue';
import {LocaleInfo} from '../../../../models/localeInfo';
import {SupportedLanguagesResponse} from './supportedLanguagesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the supportedLanguages method. */
export class SupportedLanguagesResponseImpl implements SupportedLanguagesResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: LocaleInfo[] | undefined;
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
     * Instantiates a new supportedLanguagesResponse and sets the default values.
     * @param supportedLanguagesResponseParameterValue 
     */
    public constructor(supportedLanguagesResponseParameterValue?: SupportedLanguagesResponse | undefined) {
        this._additionalData = supportedLanguagesResponseParameterValue?.additionalData ? supportedLanguagesResponseParameterValue?.additionalData! : {};
        this._value = supportedLanguagesResponseParameterValue?.value;
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
        if(this.value && this.value.length != 0){        const valueArrValue: LocaleInfoImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof LocaleInfoImpl? element:new LocaleInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LocaleInfoImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a LocaleInfoInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: LocaleInfo[] | undefined) {
        if(value) {
            const valueArrValue: LocaleInfoImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof LocaleInfoImpl? element:new LocaleInfoImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
