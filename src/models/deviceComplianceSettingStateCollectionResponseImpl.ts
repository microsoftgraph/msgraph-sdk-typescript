import {createDeviceComplianceSettingStateFromDiscriminatorValue} from './createDeviceComplianceSettingStateFromDiscriminatorValue';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {DeviceComplianceSettingStateCollectionResponse} from './deviceComplianceSettingStateCollectionResponse';
import {DeviceComplianceSettingStateImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceSettingStateCollectionResponseImpl implements AdditionalDataHolder, DeviceComplianceSettingStateCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceComplianceSettingState[] | undefined;
    /**
     * Instantiates a new DeviceComplianceSettingStateCollectionResponse and sets the default values.
     * @param deviceComplianceSettingStateCollectionResponseParameterValue 
     */
    public constructor(deviceComplianceSettingStateCollectionResponseParameterValue?: DeviceComplianceSettingStateCollectionResponse | undefined) {
        this.additionalData = deviceComplianceSettingStateCollectionResponseParameterValue?.additionalData ? deviceComplianceSettingStateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceComplianceSettingStateCollectionResponseParameterValue?.nextLink ;
        this.value = deviceComplianceSettingStateCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceComplianceSettingStateImpl>(createDeviceComplianceSettingStateFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceComplianceSettingStateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceComplianceSettingStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceSettingStateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
