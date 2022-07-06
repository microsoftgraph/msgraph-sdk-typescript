import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents app protection and configuration status for the organization. */
export class ManagedAppStatus extends Entity implements Parsable {
    /** Friendly name of the status report. */
    private _displayName?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** Version of the entity. */
    private _version?: string | undefined;
    /**
     * Instantiates a new managedAppStatus and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Friendly name of the status report.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Friendly name of the status report.
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
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.type = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.type);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
