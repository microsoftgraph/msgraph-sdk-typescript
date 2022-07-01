import {createDeviceComplianceActionItemFromDiscriminatorValue} from './createDeviceComplianceActionItemFromDiscriminatorValue';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {DeviceComplianceActionItemImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Scheduled Action for Rule */
export class DeviceComplianceScheduledActionForRuleImpl extends EntityImpl implements DeviceComplianceScheduledActionForRule {
    /** Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired. */
    private _ruleName?: string | undefined;
    /** The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action. */
    private _scheduledActionConfigurations?: DeviceComplianceActionItem[] | undefined;
    /**
     * Instantiates a new deviceComplianceScheduledActionForRule and sets the default values.
     * @param deviceComplianceScheduledActionForRuleParameterValue 
     */
    public constructor(deviceComplianceScheduledActionForRuleParameterValue?: DeviceComplianceScheduledActionForRule | undefined) {
        super(deviceComplianceScheduledActionForRuleParameterValue);
        this._ruleName = deviceComplianceScheduledActionForRuleParameterValue?.ruleName;
        this._scheduledActionConfigurations = deviceComplianceScheduledActionForRuleParameterValue?.scheduledActionConfigurations;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "ruleName": n => { this.ruleName = n.getStringValue(); },
            "scheduledActionConfigurations": n => { this.scheduledActionConfigurations = n.getCollectionOfObjectValues<DeviceComplianceActionItemImpl>(createDeviceComplianceActionItemFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the ruleName property value. Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired.
     * @returns a string
     */
    public get ruleName() {
        return this._ruleName;
    };
    /**
     * Sets the ruleName property value. Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired.
     * @param value Value to set for the ruleName property.
     */
    public set ruleName(value: string | undefined) {
        if(value) {
            this._ruleName = value;
        }
    };
    /**
     * Gets the scheduledActionConfigurations property value. The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @returns a DeviceComplianceActionItemInterface
     */
    public get scheduledActionConfigurations() {
        return this._scheduledActionConfigurations;
    };
    /**
     * Sets the scheduledActionConfigurations property value. The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @param value Value to set for the scheduledActionConfigurations property.
     */
    public set scheduledActionConfigurations(value: DeviceComplianceActionItem[] | undefined) {
        if(value) {
            const scheduledActionConfigurationsArrValue: DeviceComplianceActionItemImpl[] = [];
            this.scheduledActionConfigurations?.forEach(element => {
                scheduledActionConfigurationsArrValue.push((element instanceof DeviceComplianceActionItemImpl? element as DeviceComplianceActionItemImpl:new DeviceComplianceActionItemImpl(element)));
            });
            this._scheduledActionConfigurations = scheduledActionConfigurationsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.ruleName){
            writer.writeStringValue("ruleName", this.ruleName);
        }
        if(this.scheduledActionConfigurations && this.scheduledActionConfigurations.length != 0){        const scheduledActionConfigurationsArrValue: DeviceComplianceActionItemImpl[] = [];
        this.scheduledActionConfigurations?.forEach(element => {
            scheduledActionConfigurationsArrValue.push((element instanceof DeviceComplianceActionItemImpl? element as DeviceComplianceActionItemImpl:new DeviceComplianceActionItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceComplianceActionItemImpl>("scheduledActionConfigurations", scheduledActionConfigurationsArrValue);
        }
    };
}
