import {createExtensionPropertyFromDiscriminatorValue} from './createExtensionPropertyFromDiscriminatorValue';
import {ExtensionProperty} from './extensionProperty';
import {ExtensionPropertyCollectionResponse} from './extensionPropertyCollectionResponse';
import {ExtensionPropertyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExtensionPropertyCollectionResponseImpl implements AdditionalDataHolder, ExtensionPropertyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ExtensionProperty[] | undefined;
    /**
     * Instantiates a new ExtensionPropertyCollectionResponse and sets the default values.
     * @param extensionPropertyCollectionResponseParameterValue 
     */
    public constructor(extensionPropertyCollectionResponseParameterValue?: ExtensionPropertyCollectionResponse | undefined) {
        this.additionalData = extensionPropertyCollectionResponseParameterValue?.additionalData ? extensionPropertyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = extensionPropertyCollectionResponseParameterValue?.nextLink ;
        this.value = extensionPropertyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ExtensionPropertyImpl>(createExtensionPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: ExtensionPropertyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ExtensionPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionPropertyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
