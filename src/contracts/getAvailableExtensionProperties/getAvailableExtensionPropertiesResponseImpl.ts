import {ExtensionPropertyImpl} from '../../models/';
import {createExtensionPropertyFromDiscriminatorValue} from '../../models/createExtensionPropertyFromDiscriminatorValue';
import {ExtensionProperty} from '../../models/extensionProperty';
import {GetAvailableExtensionPropertiesResponse} from './getAvailableExtensionPropertiesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getAvailableExtensionProperties method. */
export class GetAvailableExtensionPropertiesResponseImpl implements AdditionalDataHolder, GetAvailableExtensionPropertiesResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ExtensionProperty[] | undefined;
    /**
     * Instantiates a new getAvailableExtensionPropertiesResponse and sets the default values.
     * @param getAvailableExtensionPropertiesResponseParameterValue 
     */
    public constructor(getAvailableExtensionPropertiesResponseParameterValue?: GetAvailableExtensionPropertiesResponse | undefined) {
        this.additionalData = getAvailableExtensionPropertiesResponseParameterValue?.additionalData ? getAvailableExtensionPropertiesResponseParameterValue?.additionalData! : {}
        this.value = getAvailableExtensionPropertiesResponseParameterValue?.value ;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ExtensionPropertyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ExtensionPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionPropertyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
