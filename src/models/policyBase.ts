import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class PolicyBase extends DirectoryObject implements Parsable {
    /** Description for this policy. Required. */
    private _description?: string | undefined;
    /** Display name for this policy. Required. */
    private _displayName?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /**
     * Instantiates a new policyBase and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description for this policy. Required.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description for this policy. Required.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name for this policy. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name for this policy. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.type);
    };
}
