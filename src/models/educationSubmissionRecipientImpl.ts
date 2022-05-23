import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSubmissionRecipientImpl implements AdditionalDataHolder, EducationSubmissionRecipient, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new educationSubmissionRecipient and sets the default values.
     * @param educationSubmissionRecipientParameterValue 
     */
    public constructor(educationSubmissionRecipientParameterValue?: EducationSubmissionRecipient | undefined) {
        this.additionalData = educationSubmissionRecipientParameterValue?.additionalData ? educationSubmissionRecipientParameterValue?.additionalData! : {}
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
}
