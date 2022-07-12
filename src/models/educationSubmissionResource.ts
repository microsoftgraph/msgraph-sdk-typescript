import {AdminMember1, EducationResource, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class EducationSubmissionResource extends Entity implements Parsable {
    /** Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource. */
    private _assignmentResourceUrl?: string | undefined;
    /** Resource object. */
    private _resource?: EducationResource | AdminMember1 | undefined;
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
        this._assignmentResourceUrl = value;
    };
    /**
     * Instantiates a new educationSubmissionResource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignmentResourceUrl": n => { this.assignmentResourceUrl = n.getStringValue(); },
            "resource": n => { this.resource = n.getObjectValue<EducationResource>(createEducationResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the resource property value. Resource object.
     * @returns a admin
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Resource object.
     * @param value Value to set for the resource property.
     */
    public set resource(value: EducationResource | AdminMember1 | undefined) {
        this._resource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("assignmentResourceUrl", this.assignmentResourceUrl);
        writer.writeObjectValue<EducationResource>("resource", this.resource);
    };
}
