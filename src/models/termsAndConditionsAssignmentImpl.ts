import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A termsAndConditionsAssignment entity represents the assignment of a given Terms and Conditions (T&C) policy to a given group. Users in the group will be required to accept the terms in order to have devices enrolled into Intune. */
export class TermsAndConditionsAssignmentImpl extends EntityImpl implements TermsAndConditionsAssignment {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Assignment target that the T&C policy is assigned to. */
    public target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new termsAndConditionsAssignment and sets the default values.
     * @param termsAndConditionsAssignmentParameterValue 
     */
    public constructor(termsAndConditionsAssignmentParameterValue?: TermsAndConditionsAssignment | undefined) {
        super(termsAndConditionsAssignmentParameterValue);
        this.additionalData = termsAndConditionsAssignmentParameterValue?.additionalData ? termsAndConditionsAssignmentParameterValue?.additionalData! : {};
        this.target = termsAndConditionsAssignmentParameterValue?.target instanceof DeviceAndAppManagementAssignmentTargetImpl? termsAndConditionsAssignmentParameterValue?.target:new DeviceAndAppManagementAssignmentTargetImpl(termsAndConditionsAssignmentParameterValue?.target);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTargetImpl>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.target){
            writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", new DeviceAndAppManagementAssignmentTargetImpl(this.target));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
