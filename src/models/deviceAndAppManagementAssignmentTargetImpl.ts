import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Base type for assignment targets. */
export class DeviceAndAppManagementAssignmentTargetImpl implements AdditionalDataHolder, DeviceAndAppManagementAssignmentTarget, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new deviceAndAppManagementAssignmentTarget and sets the default values.
     * @param deviceAndAppManagementAssignmentTargetParameterValue 
     */
    public constructor(deviceAndAppManagementAssignmentTargetParameterValue?: DeviceAndAppManagementAssignmentTarget | undefined) {
        this.additionalData = deviceAndAppManagementAssignmentTargetParameterValue?.additionalData ? deviceAndAppManagementAssignmentTargetParameterValue?.additionalData! : {}
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
}
