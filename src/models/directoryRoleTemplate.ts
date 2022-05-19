import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of directoryRoleTemplate entities. */
export class DirectoryRoleTemplate extends DirectoryObject implements Parsable {
    /** The description to set for the directory role. Read-only. */
    private _description?: string | undefined;
    /** The display name to set for the directory role. Read-only. */
    private _displayName?: string | undefined;
    /**
     * Instantiates a new directoryRoleTemplate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description to set for the directory role. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description to set for the directory role. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name to set for the directory role. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name to set for the directory role. Read-only.
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
        };
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
    };
}
