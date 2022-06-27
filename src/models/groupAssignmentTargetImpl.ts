import {GroupAssignmentTarget} from './groupAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupAssignmentTargetImpl extends DeviceAndAppManagementAssignmentTargetImpl implements GroupAssignmentTarget {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The group Id that is the target of the assignment. */
    public groupId?: string | undefined;
    /**
     * Instantiates a new GroupAssignmentTarget and sets the default values.
     * @param groupAssignmentTargetParameterValue 
     */
    public constructor(groupAssignmentTargetParameterValue?: GroupAssignmentTarget | undefined) {
        super(groupAssignmentTargetParameterValue);
        this.additionalData = groupAssignmentTargetParameterValue?.additionalData ? groupAssignmentTargetParameterValue?.additionalData! : {};
        this.groupId = groupAssignmentTargetParameterValue?.groupId;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.groupId){
            writer.writeStringValue("groupId", this.groupId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
