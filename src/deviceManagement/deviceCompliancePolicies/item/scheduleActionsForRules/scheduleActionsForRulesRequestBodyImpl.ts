import {DeviceComplianceScheduledActionForRuleImpl} from '../../../../models/';
import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from '../../../../models/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {DeviceComplianceScheduledActionForRule} from '../../../../models/deviceComplianceScheduledActionForRule';
import {ScheduleActionsForRulesRequestBody} from './scheduleActionsForRulesRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the scheduleActionsForRules method.  */
export class ScheduleActionsForRulesRequestBodyImpl implements AdditionalDataHolder, Parsable, ScheduleActionsForRulesRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The deviceComplianceScheduledActionForRules property  */
    deviceComplianceScheduledActionForRules?: DeviceComplianceScheduledActionForRule[] | undefined;
    /**
     * Instantiates a new scheduleActionsForRulesRequestBody and sets the default values.
     * @param scheduleActionsForRulesRequestBodyParameterValue 
     */
    public constructor(scheduleActionsForRulesRequestBodyParameterValue?: ScheduleActionsForRulesRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = scheduleActionsForRulesRequestBodyParameterValue?.additionalData ? {} : scheduleActionsForRulesRequestBodyParameterValue?.additionalData!
        this.deviceComplianceScheduledActionForRules = scheduleActionsForRulesRequestBodyParameterValue?.deviceComplianceScheduledActionForRules ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceComplianceScheduledActionForRules": n => { this.deviceComplianceScheduledActionForRules = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>(createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deviceComplianceScheduledActionForRules){
        const deviceComplianceScheduledActionForRulesArrValue: DeviceComplianceScheduledActionForRuleImpl[] = []; this.deviceComplianceScheduledActionForRules?.forEach(element => {deviceComplianceScheduledActionForRulesArrValue.push(new DeviceComplianceScheduledActionForRuleImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>("deviceComplianceScheduledActionForRules", deviceComplianceScheduledActionForRulesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
