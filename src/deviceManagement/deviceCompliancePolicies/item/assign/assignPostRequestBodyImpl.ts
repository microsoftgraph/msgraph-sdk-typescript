import {DeviceCompliancePolicyAssignmentImpl} from '../../../../models/';
import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {DeviceCompliancePolicyAssignment} from '../../../../models/deviceCompliancePolicyAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignPostRequestBodyImpl implements AssignPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The assignments property */
    private _assignments?: DeviceCompliancePolicyAssignment[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the assignments property value. The assignments property
     * @returns a DeviceCompliancePolicyAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The assignments property
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: DeviceCompliancePolicyAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: DeviceCompliancePolicyAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof DeviceCompliancePolicyAssignmentImpl? element:new DeviceCompliancePolicyAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     * @param assignPostRequestBodyParameterValue 
     */
    public constructor(assignPostRequestBodyParameterValue?: AssignPostRequestBody | undefined) {
        this._additionalData = assignPostRequestBodyParameterValue?.additionalData ? assignPostRequestBodyParameterValue?.additionalData! : {};
        this._assignments = assignPostRequestBodyParameterValue?.assignments;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: DeviceCompliancePolicyAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof DeviceCompliancePolicyAssignmentImpl? element:new DeviceCompliancePolicyAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
