import {createWindowsInformationProtectionPolicyFromDiscriminatorValue} from './createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {WindowsInformationProtectionPolicyImpl} from './index';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {WindowsInformationProtectionPolicyCollectionResponse} from './windowsInformationProtectionPolicyCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionPolicyCollectionResponseImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionPolicyCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: WindowsInformationProtectionPolicy[] | undefined;
    /**
     * Instantiates a new WindowsInformationProtectionPolicyCollectionResponse and sets the default values.
     * @param windowsInformationProtectionPolicyCollectionResponseParameterValue 
     */
    public constructor(windowsInformationProtectionPolicyCollectionResponseParameterValue?: WindowsInformationProtectionPolicyCollectionResponse | undefined) {
        this.additionalData = windowsInformationProtectionPolicyCollectionResponseParameterValue?.additionalData ? windowsInformationProtectionPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = windowsInformationProtectionPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = windowsInformationProtectionPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<WindowsInformationProtectionPolicyImpl>(createWindowsInformationProtectionPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: WindowsInformationProtectionPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new WindowsInformationProtectionPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
