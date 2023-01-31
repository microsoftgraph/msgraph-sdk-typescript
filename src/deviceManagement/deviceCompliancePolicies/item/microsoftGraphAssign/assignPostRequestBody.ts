import {DeviceCompliancePolicyAssignment} from '../../../../models/';
import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
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
        this._additionalData = value;
    };
    /**
     * Gets the assignments property value. 
     * @returns a deviceCompliancePolicyAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. 
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: DeviceCompliancePolicyAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignment>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("assignments", this.assignments);
        writer.writeAdditionalData(this.additionalData);
    };
}
