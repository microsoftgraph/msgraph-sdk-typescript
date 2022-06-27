import {EducationSubmissionIndividualRecipient} from './educationSubmissionIndividualRecipient';
import {EducationSubmissionRecipientImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSubmissionIndividualRecipientImpl extends EducationSubmissionRecipientImpl implements EducationSubmissionIndividualRecipient {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** User ID of the user to whom the submission is assigned. */
    public userId?: string | undefined;
    /**
     * Instantiates a new EducationSubmissionIndividualRecipient and sets the default values.
     * @param educationSubmissionIndividualRecipientParameterValue 
     */
    public constructor(educationSubmissionIndividualRecipientParameterValue?: EducationSubmissionIndividualRecipient | undefined) {
        super(educationSubmissionIndividualRecipientParameterValue);
        this.additionalData = educationSubmissionIndividualRecipientParameterValue?.additionalData ? educationSubmissionIndividualRecipientParameterValue?.additionalData! : {};
        this.userId = educationSubmissionIndividualRecipientParameterValue?.userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
