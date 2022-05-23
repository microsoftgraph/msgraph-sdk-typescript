import {createDeviceCompliancePolicyFromDiscriminatorValue} from './createDeviceCompliancePolicyFromDiscriminatorValue';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceCompliancePolicyCollectionResponse} from './deviceCompliancePolicyCollectionResponse';
import {DeviceCompliancePolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicyCollectionResponseImpl implements AdditionalDataHolder, DeviceCompliancePolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceCompliancePolicy[] | undefined;
    /**
     * Instantiates a new DeviceCompliancePolicyCollectionResponse and sets the default values.
     * @param deviceCompliancePolicyCollectionResponseParameterValue 
     */
    public constructor(deviceCompliancePolicyCollectionResponseParameterValue?: DeviceCompliancePolicyCollectionResponse | undefined) {
        this.additionalData = deviceCompliancePolicyCollectionResponseParameterValue?.additionalData ? deviceCompliancePolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceCompliancePolicyCollectionResponseParameterValue?.nextLink ;
        this.value = deviceCompliancePolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyImpl>(createDeviceCompliancePolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceCompliancePolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceCompliancePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
