import {EnrollmentConfigurationAssignment} from '../../../../models/';
import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the assign method.
 */
export class AssignPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The enrollmentConfigurationAssignments property */
    private _enrollmentConfigurationAssignments?: EnrollmentConfigurationAssignment[] | undefined;
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
     * Instantiates a new assignPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enrollmentConfigurationAssignments property value. The enrollmentConfigurationAssignments property
     * @returns a enrollmentConfigurationAssignment
     */
    public get enrollmentConfigurationAssignments() {
        return this._enrollmentConfigurationAssignments;
    };
    /**
     * Sets the enrollmentConfigurationAssignments property value. The enrollmentConfigurationAssignments property
     * @param value Value to set for the enrollmentConfigurationAssignments property.
     */
    public set enrollmentConfigurationAssignments(value: EnrollmentConfigurationAssignment[] | undefined) {
        this._enrollmentConfigurationAssignments = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enrollmentConfigurationAssignments": n => { this.enrollmentConfigurationAssignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignment>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignment>("enrollmentConfigurationAssignments", this.enrollmentConfigurationAssignments);
        writer.writeAdditionalData(this.additionalData);
    };
}
