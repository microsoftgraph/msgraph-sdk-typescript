import {AllDevicesAssignmentTarget} from './allDevicesAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AllDevicesAssignmentTargetImpl extends DeviceAndAppManagementAssignmentTargetImpl implements AllDevicesAssignmentTarget {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new AllDevicesAssignmentTarget and sets the default values.
     * @param allDevicesAssignmentTargetParameterValue 
     */
    public constructor(allDevicesAssignmentTargetParameterValue?: AllDevicesAssignmentTarget | undefined) {
        super(allDevicesAssignmentTargetParameterValue);
        this.additionalData = allDevicesAssignmentTargetParameterValue?.additionalData ? allDevicesAssignmentTargetParameterValue?.additionalData! : {};
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
        writer.writeAdditionalData(this.additionalData);
    };
}
