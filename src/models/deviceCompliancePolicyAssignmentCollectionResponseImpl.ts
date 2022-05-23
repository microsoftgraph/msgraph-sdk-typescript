import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from './createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceCompliancePolicyAssignmentCollectionResponse} from './deviceCompliancePolicyAssignmentCollectionResponse';
import {DeviceCompliancePolicyAssignmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicyAssignmentCollectionResponseImpl implements AdditionalDataHolder, DeviceCompliancePolicyAssignmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceCompliancePolicyAssignment[] | undefined;
    /**
     * Instantiates a new DeviceCompliancePolicyAssignmentCollectionResponse and sets the default values.
     * @param deviceCompliancePolicyAssignmentCollectionResponseParameterValue 
     */
    public constructor(deviceCompliancePolicyAssignmentCollectionResponseParameterValue?: DeviceCompliancePolicyAssignmentCollectionResponse | undefined) {
        this.additionalData = deviceCompliancePolicyAssignmentCollectionResponseParameterValue?.additionalData ? deviceCompliancePolicyAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceCompliancePolicyAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = deviceCompliancePolicyAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceCompliancePolicyAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceCompliancePolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
