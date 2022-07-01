import {createEducationResourceFromDiscriminatorValue} from './createEducationResourceFromDiscriminatorValue';
import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationResource} from './educationResource';
import {EducationResourceImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationAssignmentResourceImpl extends EntityImpl implements EducationAssignmentResource {
    /** Indicates whether this resource should be copied to each student submission for modification and submission. Required */
    private _distributeForStudentWork?: boolean | undefined;
    /** Resource object that has been associated with this assignment. */
    private _resource?: EducationResource | undefined;
    /**
     * Instantiates a new educationAssignmentResource and sets the default values.
     * @param educationAssignmentResourceParameterValue 
     */
    public constructor(educationAssignmentResourceParameterValue?: EducationAssignmentResource | undefined) {
        super(educationAssignmentResourceParameterValue);
        this._distributeForStudentWork = educationAssignmentResourceParameterValue?.distributeForStudentWork;
        this._resource = educationAssignmentResourceParameterValue?.resource;
    };
    /**
     * Gets the distributeForStudentWork property value. Indicates whether this resource should be copied to each student submission for modification and submission. Required
     * @returns a boolean
     */
    public get distributeForStudentWork() {
        return this._distributeForStudentWork;
    };
    /**
     * Sets the distributeForStudentWork property value. Indicates whether this resource should be copied to each student submission for modification and submission. Required
     * @param value Value to set for the distributeForStudentWork property.
     */
    public set distributeForStudentWork(value: boolean | undefined) {
        if(value) {
            this._distributeForStudentWork = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "distributeForStudentWork": n => { this.distributeForStudentWork = n.getBooleanValue(); },
            "resource": n => { this.resource = n.getObjectValue<EducationResourceImpl>(createEducationResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the resource property value. Resource object that has been associated with this assignment.
     * @returns a EducationResourceInterface
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Resource object that has been associated with this assignment.
     * @param value Value to set for the resource property.
     */
    public set resource(value: EducationResource | undefined) {
        if(value) {
            this._resource = value instanceof EducationResourceImpl? value as EducationResourceImpl: new EducationResourceImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.distributeForStudentWork){
            writer.writeBooleanValue("distributeForStudentWork", this.distributeForStudentWork);
        }
        if(this.resource){
            writer.writeObjectValue<EducationResourceImpl>("resource", (this.resource instanceof EducationResourceImpl? this.resource as EducationResourceImpl: new EducationResourceImpl(this.resource)));
        }
    };
}
