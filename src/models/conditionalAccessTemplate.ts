import {createConditionalAccessPolicyDetailFromDiscriminatorValue} from './createConditionalAccessPolicyDetailFromDiscriminatorValue';
import {ConditionalAccessPolicyDetail, Entity} from './index';
import {TemplateScenarios} from './templateScenarios';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appCatalogs singleton.
 */
export class ConditionalAccessTemplate extends Entity implements Parsable {
    /** The user-friendly name of the template. */
    private _description?: string | undefined;
    /** The details property */
    private _details?: ConditionalAccessPolicyDetail | undefined;
    /** The user-friendly name of the template. */
    private _name?: string | undefined;
    /** The scenarios property */
    private _scenarios?: TemplateScenarios | undefined;
    /**
     * Instantiates a new conditionalAccessTemplate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The user-friendly name of the template.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The user-friendly name of the template.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the details property value. The details property
     * @returns a conditionalAccessPolicyDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. The details property
     * @param value Value to set for the details property.
     */
    public set details(value: ConditionalAccessPolicyDetail | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "details": n => { this.details = n.getObjectValue<ConditionalAccessPolicyDetail>(createConditionalAccessPolicyDetailFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "scenarios": n => { this.scenarios = n.getEnumValue<TemplateScenarios>(TemplateScenarios); },
        };
    };
    /**
     * Gets the name property value. The user-friendly name of the template.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The user-friendly name of the template.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the scenarios property value. The scenarios property
     * @returns a templateScenarios
     */
    public get scenarios() {
        return this._scenarios;
    };
    /**
     * Sets the scenarios property value. The scenarios property
     * @param value Value to set for the scenarios property.
     */
    public set scenarios(value: TemplateScenarios | undefined) {
        this._scenarios = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<ConditionalAccessPolicyDetail>("details", this.details);
        writer.writeStringValue("name", this.name);
        writer.writeEnumValue<TemplateScenarios>("scenarios", this.scenarios);
    };
}
