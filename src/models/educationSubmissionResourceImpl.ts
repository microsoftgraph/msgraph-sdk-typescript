import {createEducationResourceFromDiscriminatorValue} from './createEducationResourceFromDiscriminatorValue';
import {EducationResource} from './educationResource';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationResourceImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationSubmissionResourceImpl extends EntityImpl implements EducationSubmissionResource {
    /** Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource. */
    private _assignmentResourceUrl?: string | undefined;
    /** Resource object. */
    private _resource?: EducationResource | undefined;
    /**
     * Gets the assignmentResourceUrl property value. Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
     * @returns a string
     */
    public get assignmentResourceUrl() {
        return this._assignmentResourceUrl;
    };
    /**
     * Sets the assignmentResourceUrl property value. Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
     * @param value Value to set for the assignmentResourceUrl property.
     */
    public set assignmentResourceUrl(value: string | undefined) {
        if(value) {
            this._assignmentResourceUrl = value;
        }
    };
    /**
     * Instantiates a new educationSubmissionResource and sets the default values.
     * @param educationSubmissionResourceParameterValue 
     */
    public constructor(educationSubmissionResourceParameterValue?: EducationSubmissionResource | undefined) {
        super(educationSubmissionResourceParameterValue);
        this._assignmentResourceUrl = educationSubmissionResourceParameterValue?.assignmentResourceUrl;
        this._resource = educationSubmissionResourceParameterValue?.resource;
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
     * Gets the resource property value. Resource object.
     * @returns a EducationResourceInterface
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Resource object.
     * @param value Value to set for the resource property.
     */
    public set resource(value: EducationResource | undefined) {
        if(value) {
            this._resource = value instanceof EducationResourceImpl? value : new EducationResourceImpl(value);
        }
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
            writer.writeObjectValue<EducationResourceImpl>("resource", (!this.resource || this.resource instanceof EducationResourceImpl? this.resource : new EducationResourceImpl(this.resource)));
        }
    };
}
