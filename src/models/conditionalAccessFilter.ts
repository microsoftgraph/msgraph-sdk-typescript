import {FilterMode} from './filterMode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessFilter implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Mode to use for the filter. Possible values are include or exclude. */
    private _mode?: FilterMode | undefined;
    /** Rule syntax is similar to that used for membership rules for groups in Azure Active Directory. For details, see rules with multiple expressions */
    private _rule?: string | undefined;
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
     * Instantiates a new conditionalAccessFilter and sets the default values.
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
            "mode": n => { this.mode = n.getEnumValue<FilterMode>(FilterMode); },
            "rule": n => { this.rule = n.getStringValue(); },
        };
    };
    /**
     * Gets the mode property value. Mode to use for the filter. Possible values are include or exclude.
     * @returns a filterMode
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Sets the mode property value. Mode to use for the filter. Possible values are include or exclude.
     * @param value Value to set for the mode property.
     */
    public set mode(value: FilterMode | undefined) {
        this._mode = value;
    };
    /**
     * Gets the rule property value. Rule syntax is similar to that used for membership rules for groups in Azure Active Directory. For details, see rules with multiple expressions
     * @returns a string
     */
    public get rule() {
        return this._rule;
    };
    /**
     * Sets the rule property value. Rule syntax is similar to that used for membership rules for groups in Azure Active Directory. For details, see rules with multiple expressions
     * @param value Value to set for the rule property.
     */
    public set rule(value: string | undefined) {
        this._rule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<FilterMode>("mode", this.mode);
        writer.writeStringValue("rule", this.rule);
        writer.writeAdditionalData(this.additionalData);
    };
}
