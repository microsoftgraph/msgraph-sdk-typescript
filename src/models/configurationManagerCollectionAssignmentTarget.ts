import {DeviceAndAppManagementAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConfigurationManagerCollectionAssignmentTarget extends DeviceAndAppManagementAssignmentTarget implements Parsable {
    /** The collection Id that is the target of the assignment. */
    private _collectionId?: string | undefined;
    /**
     * Gets the collectionId property value. The collection Id that is the target of the assignment.
     * @returns a string
     */
    public get collectionId() {
        return this._collectionId;
    };
    /**
     * Sets the collectionId property value. The collection Id that is the target of the assignment.
     * @param value Value to set for the collectionId property.
     */
    public set collectionId(value: string | undefined) {
        this._collectionId = value;
    };
    /**
     * Instantiates a new ConfigurationManagerCollectionAssignmentTarget and sets the default values.
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
            "collectionId": n => { this.collectionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("collectionId", this.collectionId);
    };
}
