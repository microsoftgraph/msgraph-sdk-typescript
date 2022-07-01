import {DeviceComplianceScheduledActionForRuleImpl} from '../../../../models/';
import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from '../../../../models/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {DeviceComplianceScheduledActionForRule} from '../../../../models/deviceComplianceScheduledActionForRule';
import {ScheduleActionsForRulesPostRequestBody} from './scheduleActionsForRulesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the scheduleActionsForRules method. */
export class ScheduleActionsForRulesPostRequestBodyImpl implements ScheduleActionsForRulesPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The deviceComplianceScheduledActionForRules property */
    private _deviceComplianceScheduledActionForRules?: DeviceComplianceScheduledActionForRule[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new scheduleActionsForRulesPostRequestBody and sets the default values.
     * @param scheduleActionsForRulesPostRequestBodyParameterValue 
     */
    public constructor(scheduleActionsForRulesPostRequestBodyParameterValue?: ScheduleActionsForRulesPostRequestBody | undefined) {
        this._additionalData = scheduleActionsForRulesPostRequestBodyParameterValue?.additionalData ? scheduleActionsForRulesPostRequestBodyParameterValue?.additionalData! : {};
        this._deviceComplianceScheduledActionForRules = scheduleActionsForRulesPostRequestBodyParameterValue?.deviceComplianceScheduledActionForRules;
    };
    /**
     * Gets the deviceComplianceScheduledActionForRules property value. The deviceComplianceScheduledActionForRules property
     * @returns a DeviceComplianceScheduledActionForRuleInterface
     */
    public get deviceComplianceScheduledActionForRules() {
        return this._deviceComplianceScheduledActionForRules;
    };
    /**
     * Sets the deviceComplianceScheduledActionForRules property value. The deviceComplianceScheduledActionForRules property
     * @param value Value to set for the deviceComplianceScheduledActionForRules property.
     */
    public set deviceComplianceScheduledActionForRules(value: DeviceComplianceScheduledActionForRule[] | undefined) {
        if(value) {
            const deviceComplianceScheduledActionForRulesArrValue: DeviceComplianceScheduledActionForRuleImpl[] = [];
            this.deviceComplianceScheduledActionForRules?.forEach(element => {
                deviceComplianceScheduledActionForRulesArrValue.push((element instanceof DeviceComplianceScheduledActionForRuleImpl? element as DeviceComplianceScheduledActionForRuleImpl:new DeviceComplianceScheduledActionForRuleImpl(element)));
            });
            this._deviceComplianceScheduledActionForRules = deviceComplianceScheduledActionForRulesArrValue;
        }
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
        if(this.deviceComplianceScheduledActionForRules && this.deviceComplianceScheduledActionForRules.length != 0){        const deviceComplianceScheduledActionForRulesArrValue: DeviceComplianceScheduledActionForRuleImpl[] = [];
        this.deviceComplianceScheduledActionForRules?.forEach(element => {
            deviceComplianceScheduledActionForRulesArrValue.push((element instanceof DeviceComplianceScheduledActionForRuleImpl? element as DeviceComplianceScheduledActionForRuleImpl:new DeviceComplianceScheduledActionForRuleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>("deviceComplianceScheduledActionForRules", deviceComplianceScheduledActionForRulesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
