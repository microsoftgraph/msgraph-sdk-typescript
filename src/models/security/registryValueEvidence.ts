import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistryValueEvidence extends AlertEvidence implements Parsable {
    /** The registryHive property */
    private _registryHive?: string | undefined;
    /** The registryKey property */
    private _registryKey?: string | undefined;
    /** The registryValue property */
    private _registryValue?: string | undefined;
    /** The registryValueName property */
    private _registryValueName?: string | undefined;
    /** The registryValueType property */
    private _registryValueType?: string | undefined;
    /**
     * Instantiates a new RegistryValueEvidence and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "registryHive": n => { this.registryHive = n.getStringValue(); },
            "registryKey": n => { this.registryKey = n.getStringValue(); },
            "registryValue": n => { this.registryValue = n.getStringValue(); },
            "registryValueName": n => { this.registryValueName = n.getStringValue(); },
            "registryValueType": n => { this.registryValueType = n.getStringValue(); },
        };
    };
    /**
     * Gets the registryHive property value. The registryHive property
     * @returns a string
     */
    public get registryHive() {
        return this._registryHive;
    };
    /**
     * Sets the registryHive property value. The registryHive property
     * @param value Value to set for the registryHive property.
     */
    public set registryHive(value: string | undefined) {
        this._registryHive = value;
    };
    /**
     * Gets the registryKey property value. The registryKey property
     * @returns a string
     */
    public get registryKey() {
        return this._registryKey;
    };
    /**
     * Sets the registryKey property value. The registryKey property
     * @param value Value to set for the registryKey property.
     */
    public set registryKey(value: string | undefined) {
        this._registryKey = value;
    };
    /**
     * Gets the registryValue property value. The registryValue property
     * @returns a string
     */
    public get registryValue() {
        return this._registryValue;
    };
    /**
     * Sets the registryValue property value. The registryValue property
     * @param value Value to set for the registryValue property.
     */
    public set registryValue(value: string | undefined) {
        this._registryValue = value;
    };
    /**
     * Gets the registryValueName property value. The registryValueName property
     * @returns a string
     */
    public get registryValueName() {
        return this._registryValueName;
    };
    /**
     * Sets the registryValueName property value. The registryValueName property
     * @param value Value to set for the registryValueName property.
     */
    public set registryValueName(value: string | undefined) {
        this._registryValueName = value;
    };
    /**
     * Gets the registryValueType property value. The registryValueType property
     * @returns a string
     */
    public get registryValueType() {
        return this._registryValueType;
    };
    /**
     * Sets the registryValueType property value. The registryValueType property
     * @param value Value to set for the registryValueType property.
     */
    public set registryValueType(value: string | undefined) {
        this._registryValueType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("registryHive", this.registryHive);
        writer.writeStringValue("registryKey", this.registryKey);
        writer.writeStringValue("registryValue", this.registryValue);
        writer.writeStringValue("registryValueName", this.registryValueName);
        writer.writeStringValue("registryValueType", this.registryValueType);
    };
}