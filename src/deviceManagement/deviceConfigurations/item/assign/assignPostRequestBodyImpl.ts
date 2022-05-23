import {DeviceConfigurationAssignmentImpl} from '../../../../models/';
import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignPostRequestBodyImpl implements AdditionalDataHolder, AssignPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The assignments property */
    public assignments?: DeviceConfigurationAssignment[] | undefined;
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     * @param assignPostRequestBodyParameterValue 
     */
    public constructor(assignPostRequestBodyParameterValue?: AssignPostRequestBody | undefined) {
        this.additionalData = assignPostRequestBodyParameterValue?.additionalData ? assignPostRequestBodyParameterValue?.additionalData! : {}
        this.assignments = assignPostRequestBodyParameterValue?.assignments ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: DeviceConfigurationAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new DeviceConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
