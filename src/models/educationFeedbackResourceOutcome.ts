import {createEducationResourceFromDiscriminatorValue} from './createEducationResourceFromDiscriminatorValue';
import {EducationFeedbackResourceOutcomeStatus} from './educationFeedbackResourceOutcomeStatus';
import {EducationOutcome, EducationResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedbackResourceOutcome extends EducationOutcome implements Parsable {
    /** The actual feedback resource. */
    private _feedbackResource?: EducationResource | undefined;
    /** The status of the feedback resource. The possible values are: notPublished, pendingPublish, published, failedPublish, unknownFutureValue. */
    private _resourceStatus?: EducationFeedbackResourceOutcomeStatus | undefined;
    /**
     * Instantiates a new EducationFeedbackResourceOutcome and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.educationFeedbackResourceOutcome";
    };
    /**
     * Gets the feedbackResource property value. The actual feedback resource.
     * @returns a educationResource
     */
    public get feedbackResource() {
        return this._feedbackResource;
    };
    /**
     * Sets the feedbackResource property value. The actual feedback resource.
     * @param value Value to set for the feedbackResource property.
     */
    public set feedbackResource(value: EducationResource | undefined) {
        this._feedbackResource = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "feedbackResource": n => { this.feedbackResource = n.getObjectValue<EducationResource>(createEducationResourceFromDiscriminatorValue); },
            "resourceStatus": n => { this.resourceStatus = n.getEnumValue<EducationFeedbackResourceOutcomeStatus>(EducationFeedbackResourceOutcomeStatus); },
        };
    };
    /**
     * Gets the resourceStatus property value. The status of the feedback resource. The possible values are: notPublished, pendingPublish, published, failedPublish, unknownFutureValue.
     * @returns a educationFeedbackResourceOutcomeStatus
     */
    public get resourceStatus() {
        return this._resourceStatus;
    };
    /**
     * Sets the resourceStatus property value. The status of the feedback resource. The possible values are: notPublished, pendingPublish, published, failedPublish, unknownFutureValue.
     * @param value Value to set for the resourceStatus property.
     */
    public set resourceStatus(value: EducationFeedbackResourceOutcomeStatus | undefined) {
        this._resourceStatus = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<EducationResource>("feedbackResource", this.feedbackResource);
        writer.writeEnumValue<EducationFeedbackResourceOutcomeStatus>("resourceStatus", this.resourceStatus);
    };
}
