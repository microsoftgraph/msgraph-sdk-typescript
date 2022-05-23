import {createEducationResourceFromDiscriminatorValue} from './createEducationResourceFromDiscriminatorValue';
import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationResource} from './educationResource';
import {EducationResourceImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationAssignmentResourceImpl extends EntityImpl implements EducationAssignmentResource, Parsable {
    /** Indicates whether this resource should be copied to each student submission for modification and submission. Required */
    public distributeForStudentWork?: boolean | undefined;
    /** Resource object that has been associated with this assignment. */
    public resource?: EducationResource | undefined;
    /**
     * Instantiates a new educationAssignmentResource and sets the default values.
     * @param educationAssignmentResourceParameterValue 
     */
    public constructor(educationAssignmentResourceParameterValue?: EducationAssignmentResource | undefined) {
        super();
        this.distributeForStudentWork = educationAssignmentResourceParameterValue?.distributeForStudentWork ;
        this.resource = educationAssignmentResourceParameterValue?.resource ;
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
        writer.writeObjectValue<EducationResourceImpl>("resource", new EducationResourceImpl(this.resource));
        }
    };
}
