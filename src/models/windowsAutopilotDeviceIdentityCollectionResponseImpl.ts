import {createWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from './createWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {WindowsAutopilotDeviceIdentityImpl} from './index';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {WindowsAutopilotDeviceIdentityCollectionResponse} from './windowsAutopilotDeviceIdentityCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsAutopilotDeviceIdentityCollectionResponseImpl implements AdditionalDataHolder, Parsable, WindowsAutopilotDeviceIdentityCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: WindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * Instantiates a new WindowsAutopilotDeviceIdentityCollectionResponse and sets the default values.
     * @param windowsAutopilotDeviceIdentityCollectionResponseParameterValue 
     */
    public constructor(windowsAutopilotDeviceIdentityCollectionResponseParameterValue?: WindowsAutopilotDeviceIdentityCollectionResponse | undefined) {
        this.additionalData = windowsAutopilotDeviceIdentityCollectionResponseParameterValue?.additionalData ? windowsAutopilotDeviceIdentityCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = windowsAutopilotDeviceIdentityCollectionResponseParameterValue?.nextLink ;
        this.value = windowsAutopilotDeviceIdentityCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsAutopilotDeviceIdentityImpl>(createWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: WindowsAutopilotDeviceIdentityImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new WindowsAutopilotDeviceIdentityImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsAutopilotDeviceIdentityImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
