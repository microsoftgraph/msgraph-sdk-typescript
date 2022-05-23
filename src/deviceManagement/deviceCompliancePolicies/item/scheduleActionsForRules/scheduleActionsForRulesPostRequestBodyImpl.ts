import {DeviceComplianceScheduledActionForRuleImpl} from '../../../../models/';
import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from '../../../../models/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {DeviceComplianceScheduledActionForRule} from '../../../../models/deviceComplianceScheduledActionForRule';
import {ScheduleActionsForRulesPostRequestBody} from './scheduleActionsForRulesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the scheduleActionsForRules method. */
export class ScheduleActionsForRulesPostRequestBodyImpl implements AdditionalDataHolder, Parsable, ScheduleActionsForRulesPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The deviceComplianceScheduledActionForRules property */
    public deviceComplianceScheduledActionForRules?: DeviceComplianceScheduledActionForRule[] | undefined;
    /**
     * Instantiates a new scheduleActionsForRulesPostRequestBody and sets the default values.
     * @param scheduleActionsForRulesPostRequestBodyParameterValue 
     */
    public constructor(scheduleActionsForRulesPostRequestBodyParameterValue?: ScheduleActionsForRulesPostRequestBody | undefined) {
        this.additionalData = scheduleActionsForRulesPostRequestBodyParameterValue?.additionalData ? scheduleActionsForRulesPostRequestBodyParameterValue?.additionalData! : {}
        this.deviceComplianceScheduledActionForRules = scheduleActionsForRulesPostRequestBodyParameterValue?.deviceComplianceScheduledActionForRules ;
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
        if(this.deviceComplianceScheduledActionForRules && this.deviceComplianceScheduledActionForRules.length != 0){        const deviceComplianceScheduledActionForRulesArrValue: DeviceComplianceScheduledActionForRuleImpl[] = []; this.deviceComplianceScheduledActionForRules?.forEach(element => {deviceComplianceScheduledActionForRulesArrValue.push(new DeviceComplianceScheduledActionForRuleImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>("deviceComplianceScheduledActionForRules", deviceComplianceScheduledActionForRulesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
