import {ComplianceManagementPartnerAssignment} from './complianceManagementPartnerAssignment';
import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** User group targeting for Compliance Management Partner */
export class ComplianceManagementPartnerAssignmentImpl implements ComplianceManagementPartnerAssignment {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Group assignment target. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new complianceManagementPartnerAssignment and sets the default values.
     * @param complianceManagementPartnerAssignmentParameterValue 
     */
    public constructor(complianceManagementPartnerAssignmentParameterValue?: ComplianceManagementPartnerAssignment | undefined) {
        this._additionalData = complianceManagementPartnerAssignmentParameterValue?.additionalData ? complianceManagementPartnerAssignmentParameterValue?.additionalData! : {};
        this._target = complianceManagementPartnerAssignmentParameterValue?.target;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTargetImpl>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.target){
            writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", (!this.target || this.target instanceof DeviceAndAppManagementAssignmentTargetImpl? this.target : new DeviceAndAppManagementAssignmentTargetImpl(this.target)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the target property value. Group assignment target.
     * @returns a DeviceAndAppManagementAssignmentTargetInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Group assignment target.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        if(value) {
            this._target = value instanceof DeviceAndAppManagementAssignmentTargetImpl? value : new DeviceAndAppManagementAssignmentTargetImpl(value);
        }
    };
}
