import {Win32LobAppRuleImpl} from './index';
import {Win32LobAppRegistryRule} from './win32LobAppRegistryRule';
import {Win32LobAppRegistryRuleOperationType} from './win32LobAppRegistryRuleOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppRegistryRuleImpl extends Win32LobAppRuleImpl implements Win32LobAppRegistryRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A value indicating whether to search the 32-bit registry on 64-bit systems. */
    public check32BitOn64System?: boolean | undefined;
    /** The registry comparison value. */
    public comparisonValue?: string | undefined;
    /** The full path of the registry entry containing the value to detect. */
    public keyPath?: string | undefined;
    /** The registry operation type. Possible values are: notConfigured, exists, doesNotExist, string, integer, version. */
    public operationType?: Win32LobAppRegistryRuleOperationType | undefined;
    /** The operator for registry detection. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    public operator?: Win32LobAppRuleOperator | undefined;
    /** The name of the registry value to detect. */
    public valueName?: string | undefined;
    /**
     * Instantiates a new Win32LobAppRegistryRule and sets the default values.
     * @param win32LobAppRegistryRuleParameterValue 
     */
    public constructor(win32LobAppRegistryRuleParameterValue?: Win32LobAppRegistryRule | undefined) {
        super(win32LobAppRegistryRuleParameterValue);
        this.additionalData = win32LobAppRegistryRuleParameterValue?.additionalData ? win32LobAppRegistryRuleParameterValue?.additionalData! : {};
        this.check32BitOn64System = win32LobAppRegistryRuleParameterValue?.check32BitOn64System;
        this.comparisonValue = win32LobAppRegistryRuleParameterValue?.comparisonValue;
        this.keyPath = win32LobAppRegistryRuleParameterValue?.keyPath;
        this.operationType = win32LobAppRegistryRuleParameterValue?.operationType;
        this.operator = win32LobAppRegistryRuleParameterValue?.operator;
        this.valueName = win32LobAppRegistryRuleParameterValue?.valueName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "check32BitOn64System": n => { this.check32BitOn64System = n.getBooleanValue(); },
            "comparisonValue": n => { this.comparisonValue = n.getStringValue(); },
            "keyPath": n => { this.keyPath = n.getStringValue(); },
            "operationType": n => { this.operationType = n.getEnumValue<Win32LobAppRegistryRuleOperationType>(Win32LobAppRegistryRuleOperationType); },
            "operator": n => { this.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
            "valueName": n => { this.valueName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.check32BitOn64System){
            writer.writeBooleanValue("check32BitOn64System", this.check32BitOn64System);
        }
        if(this.comparisonValue){
            writer.writeStringValue("comparisonValue", this.comparisonValue);
        }
        if(this.keyPath){
            writer.writeStringValue("keyPath", this.keyPath);
        }
        if(this.operationType){
            writer.writeEnumValue<Win32LobAppRegistryRuleOperationType>("operationType", this.operationType);
        }
        if(this.operator){
            writer.writeEnumValue<Win32LobAppRuleOperator>("operator", this.operator);
        }
        if(this.valueName){
            writer.writeStringValue("valueName", this.valueName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
