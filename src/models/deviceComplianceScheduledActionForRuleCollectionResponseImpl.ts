import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from './createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {DeviceComplianceScheduledActionForRuleCollectionResponse} from './deviceComplianceScheduledActionForRuleCollectionResponse';
import {DeviceComplianceScheduledActionForRuleImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceScheduledActionForRuleCollectionResponseImpl implements AdditionalDataHolder, DeviceComplianceScheduledActionForRuleCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceComplianceScheduledActionForRule[] | undefined;
    /**
     * Instantiates a new DeviceComplianceScheduledActionForRuleCollectionResponse and sets the default values.
     * @param deviceComplianceScheduledActionForRuleCollectionResponseParameterValue 
     */
    public constructor(deviceComplianceScheduledActionForRuleCollectionResponseParameterValue?: DeviceComplianceScheduledActionForRuleCollectionResponse | undefined) {
        this.additionalData = deviceComplianceScheduledActionForRuleCollectionResponseParameterValue?.additionalData ? deviceComplianceScheduledActionForRuleCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceComplianceScheduledActionForRuleCollectionResponseParameterValue?.nextLink ;
        this.value = deviceComplianceScheduledActionForRuleCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>(createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceComplianceScheduledActionForRuleImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceComplianceScheduledActionForRuleImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
