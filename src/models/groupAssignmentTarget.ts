import {DeviceAndAppManagementAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget implements Parsable {
    /** The group Id that is the target of the assignment. */
    private _groupId?: string | undefined;
    /**
     * Instantiates a new GroupAssignmentTarget and sets the default values.
     */
    public constructor() {
        super();
        this.type = "#microsoft.graph.groupAssignmentTarget";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "groupId": n => { this.groupId = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupId property value. The group Id that is the target of the assignment.
     * @returns a string
     */
    public get groupId() {
        return this._groupId;
    };
    /**
     * Sets the groupId property value. The group Id that is the target of the assignment.
     * @param value Value to set for the groupId property.
     */
    public set groupId(value: string | undefined) {
        this._groupId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("groupId", this.groupId);
    };
}
