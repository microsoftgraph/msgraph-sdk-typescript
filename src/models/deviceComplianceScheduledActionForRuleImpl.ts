import {createDeviceComplianceActionItemFromDiscriminatorValue} from './createDeviceComplianceActionItemFromDiscriminatorValue';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {DeviceComplianceActionItemImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Scheduled Action for Rule */
export class DeviceComplianceScheduledActionForRuleImpl extends EntityImpl implements DeviceComplianceScheduledActionForRule, Parsable {
    /** Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired. */
    public ruleName?: string | undefined;
    /** The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action. */
    public scheduledActionConfigurations?: DeviceComplianceActionItem[] | undefined;
    /**
     * Instantiates a new deviceComplianceScheduledActionForRule and sets the default values.
     * @param deviceComplianceScheduledActionForRuleParameterValue 
     */
    public constructor(deviceComplianceScheduledActionForRuleParameterValue?: DeviceComplianceScheduledActionForRule | undefined) {
        super();
        this.ruleName = deviceComplianceScheduledActionForRuleParameterValue?.ruleName ;
        this.scheduledActionConfigurations = deviceComplianceScheduledActionForRuleParameterValue?.scheduledActionConfigurations ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.ruleName){
        writer.writeStringValue("ruleName", this.ruleName);
        }
        if(this.scheduledActionConfigurations && this.scheduledActionConfigurations.length != 0){        const scheduledActionConfigurationsArrValue: DeviceComplianceActionItemImpl[] = []; this.scheduledActionConfigurations?.forEach(element => {scheduledActionConfigurationsArrValue.push(new DeviceComplianceActionItemImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceActionItemImpl>("scheduledActionConfigurations", scheduledActionConfigurationsArrValue);
        }
    };
}
