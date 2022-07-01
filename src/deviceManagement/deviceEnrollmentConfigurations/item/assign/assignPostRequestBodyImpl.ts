import {EnrollmentConfigurationAssignmentImpl} from '../../../../models/';
import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {EnrollmentConfigurationAssignment} from '../../../../models/enrollmentConfigurationAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignPostRequestBodyImpl implements AssignPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     * @param assignPostRequestBodyParameterValue 
     */
    public constructor(assignPostRequestBodyParameterValue?: AssignPostRequestBody | undefined) {
        this._additionalData = assignPostRequestBodyParameterValue?.additionalData ? assignPostRequestBodyParameterValue?.additionalData! : {};
        this._enrollmentConfigurationAssignments = assignPostRequestBodyParameterValue?.enrollmentConfigurationAssignments;
    };
    /**
     * Gets the enrollmentConfigurationAssignments property value. The enrollmentConfigurationAssignments property
     * @returns a EnrollmentConfigurationAssignmentInterface
     */
    public get enrollmentConfigurationAssignments() {
        return this._enrollmentConfigurationAssignments;
    };
    /**
     * Sets the enrollmentConfigurationAssignments property value. The enrollmentConfigurationAssignments property
     * @param value Value to set for the enrollmentConfigurationAssignments property.
     */
    public set enrollmentConfigurationAssignments(value: EnrollmentConfigurationAssignment[] | undefined) {
        if(value) {
            const enrollmentConfigurationAssignmentsArrValue: EnrollmentConfigurationAssignmentImpl[] = [];
            this.enrollmentConfigurationAssignments?.forEach(element => {
                enrollmentConfigurationAssignmentsArrValue.push((element instanceof EnrollmentConfigurationAssignmentImpl? element as EnrollmentConfigurationAssignmentImpl:new EnrollmentConfigurationAssignmentImpl(element)));
            });
            this._enrollmentConfigurationAssignments = enrollmentConfigurationAssignmentsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enrollmentConfigurationAssignments": n => { this.enrollmentConfigurationAssignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.enrollmentConfigurationAssignments && this.enrollmentConfigurationAssignments.length != 0){        const enrollmentConfigurationAssignmentsArrValue: EnrollmentConfigurationAssignmentImpl[] = [];
        this.enrollmentConfigurationAssignments?.forEach(element => {
            enrollmentConfigurationAssignmentsArrValue.push((element instanceof EnrollmentConfigurationAssignmentImpl? element as EnrollmentConfigurationAssignmentImpl:new EnrollmentConfigurationAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>("enrollmentConfigurationAssignments", enrollmentConfigurationAssignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
