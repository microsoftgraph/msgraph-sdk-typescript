import {DeviceAndAppManagementAssignmentTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AllLicensedUsersAssignmentTarget extends DeviceAndAppManagementAssignmentTarget implements Parsable {
    /**
     * Instantiates a new AllLicensedUsersAssignmentTarget and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.allLicensedUsersAssignmentTarget";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
