import {createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue} from './createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue';
import {WindowsHelloForBusinessAuthenticationMethodImpl} from './index';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethodCollectionResponse} from './windowsHelloForBusinessAuthenticationMethodCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsHelloForBusinessAuthenticationMethodCollectionResponseImpl implements AdditionalDataHolder, Parsable, WindowsHelloForBusinessAuthenticationMethodCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new WindowsHelloForBusinessAuthenticationMethodCollectionResponse and sets the default values.
     * @param windowsHelloForBusinessAuthenticationMethodCollectionResponseParameterValue 
     */
    public constructor(windowsHelloForBusinessAuthenticationMethodCollectionResponseParameterValue?: WindowsHelloForBusinessAuthenticationMethodCollectionResponse | undefined) {
        this.additionalData = windowsHelloForBusinessAuthenticationMethodCollectionResponseParameterValue?.additionalData ? windowsHelloForBusinessAuthenticationMethodCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = windowsHelloForBusinessAuthenticationMethodCollectionResponseParameterValue?.nextLink ;
        this.value = windowsHelloForBusinessAuthenticationMethodCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethodImpl>(createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: WindowsHelloForBusinessAuthenticationMethodImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new WindowsHelloForBusinessAuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethodImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
