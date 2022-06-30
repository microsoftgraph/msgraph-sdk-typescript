import {ExtensionPropertyImpl} from '../../../../models/';
import {createExtensionPropertyFromDiscriminatorValue} from '../../../../models/createExtensionPropertyFromDiscriminatorValue';
import {ExtensionProperty} from '../../../../models/extensionProperty';
import {GetAvailableExtensionPropertiesResponse} from './getAvailableExtensionPropertiesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getAvailableExtensionProperties method. */
export class GetAvailableExtensionPropertiesResponseImpl implements GetAvailableExtensionPropertiesResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: ExtensionProperty[] | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new getAvailableExtensionPropertiesResponse and sets the default values.
     * @param getAvailableExtensionPropertiesResponseParameterValue 
     */
    public constructor(getAvailableExtensionPropertiesResponseParameterValue?: GetAvailableExtensionPropertiesResponse | undefined) {
        this._additionalData = getAvailableExtensionPropertiesResponseParameterValue?.additionalData ? getAvailableExtensionPropertiesResponseParameterValue?.additionalData! : {};
        this._value = getAvailableExtensionPropertiesResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ExtensionPropertyImpl>(createExtensionPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ExtensionPropertyImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ExtensionPropertyImpl? element:new ExtensionPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionPropertyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ExtensionPropertyInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ExtensionProperty[] | undefined) {
        if(value) {
            const valueArrValue: ExtensionPropertyImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ExtensionPropertyImpl? element:new ExtensionPropertyImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
