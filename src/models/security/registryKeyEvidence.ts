import {AlertEvidence} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistryKeyEvidence extends AlertEvidence implements Parsable {
    /** Registry hive of the key that the recorded action was applied to. */
    private _registryHive?: string | undefined;
    /** Registry key that the recorded action was applied to. */
    private _registryKey?: string | undefined;
    /**
     * Instantiates a new RegistryKeyEvidence and sets the default values.
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
        };
    };
    /**
     * Gets the registryHive property value. Registry hive of the key that the recorded action was applied to.
     * @returns a string
     */
    public get registryHive() {
        return this._registryHive;
    };
    /**
     * Sets the registryHive property value. Registry hive of the key that the recorded action was applied to.
     * @param value Value to set for the registryHive property.
     */
    public set registryHive(value: string | undefined) {
        this._registryHive = value;
    };
    /**
     * Gets the registryKey property value. Registry key that the recorded action was applied to.
     * @returns a string
     */
    public get registryKey() {
        return this._registryKey;
    };
    /**
     * Sets the registryKey property value. Registry key that the recorded action was applied to.
     * @param value Value to set for the registryKey property.
     */
    public set registryKey(value: string | undefined) {
        this._registryKey = value;
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
    };
}
