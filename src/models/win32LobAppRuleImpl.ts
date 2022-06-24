import {Win32LobAppRule} from './win32LobAppRule';
import {Win32LobAppRuleType} from './win32LobAppRuleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A base complex type to store the detection or requirement rule data for a Win32 LOB app. */
export class Win32LobAppRuleImpl implements Win32LobAppRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The rule type indicating the purpose of the rule. Possible values are: detection, requirement. */
    public ruleType?: Win32LobAppRuleType | undefined;
    /**
     * Instantiates a new win32LobAppRule and sets the default values.
     * @param win32LobAppRuleParameterValue 
     */
    public constructor(win32LobAppRuleParameterValue?: Win32LobAppRule | undefined) {
        this.additionalData = win32LobAppRuleParameterValue?.additionalData ? win32LobAppRuleParameterValue?.additionalData! : {};
        this.ruleType = win32LobAppRuleParameterValue?.ruleType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ruleType": n => { this.ruleType = n.getEnumValue<Win32LobAppRuleType>(Win32LobAppRuleType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ruleType){
            writer.writeEnumValue<Win32LobAppRuleType>("ruleType", this.ruleType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
