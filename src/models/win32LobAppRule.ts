import {Win32LobAppRuleType} from './win32LobAppRuleType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A base complex type to store the detection or requirement rule data for a Win32 LOB app. */
export class Win32LobAppRule implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The rule type indicating the purpose of the rule. Possible values are: detection, requirement. */
    private _ruleType?: Win32LobAppRuleType | undefined;
    /** The type property */
    private _type?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new win32LobAppRule and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ruleType": n => { this.ruleType = n.getEnumValue<Win32LobAppRuleType>(Win32LobAppRuleType); },
            "@odata.type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the @odata.type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the ruleType property value. The rule type indicating the purpose of the rule. Possible values are: detection, requirement.
     * @returns a win32LobAppRuleType
     */
    public get ruleType() {
        return this._ruleType;
    };
    /**
     * Sets the ruleType property value. The rule type indicating the purpose of the rule. Possible values are: detection, requirement.
     * @param value Value to set for the ruleType property.
     */
    public set ruleType(value: Win32LobAppRuleType | undefined) {
        this._ruleType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<Win32LobAppRuleType>("ruleType", this.ruleType);
        writer.writeStringValue("@odata.type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
}
