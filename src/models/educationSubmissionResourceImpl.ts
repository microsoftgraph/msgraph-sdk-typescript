import {createEducationResourceFromDiscriminatorValue} from './createEducationResourceFromDiscriminatorValue';
import {EducationResource} from './educationResource';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationResourceImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationSubmissionResourceImpl extends EntityImpl implements EducationSubmissionResource, Parsable {
    /** Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource. */
    public assignmentResourceUrl?: string | undefined;
    /** Resource object. */
    public resource?: EducationResource | undefined;
    /**
     * Instantiates a new educationSubmissionResource and sets the default values.
     * @param educationSubmissionResourceParameterValue 
     */
    public constructor(educationSubmissionResourceParameterValue?: EducationSubmissionResource | undefined) {
        super();
        this.assignmentResourceUrl = educationSubmissionResourceParameterValue?.assignmentResourceUrl ;
        this.resource = educationSubmissionResourceParameterValue?.resource ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignmentResourceUrl": n => { this.assignmentResourceUrl = n.getStringValue(); },
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
        if(this.assignmentResourceUrl){
        writer.writeStringValue("assignmentResourceUrl", this.assignmentResourceUrl);
        }
        if(this.resource){
        writer.writeObjectValue<EducationResourceImpl>("resource", new EducationResourceImpl(this.resource));
        }
    };
}
