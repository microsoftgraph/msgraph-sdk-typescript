import {EducationAssignmentGroupRecipient} from './educationAssignmentGroupRecipient';
import {EducationAssignmentRecipientImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentGroupRecipientImpl extends EducationAssignmentRecipientImpl implements EducationAssignmentGroupRecipient {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new EducationAssignmentGroupRecipient and sets the default values.
     * @param educationAssignmentGroupRecipientParameterValue 
     */
    public constructor(educationAssignmentGroupRecipientParameterValue?: EducationAssignmentGroupRecipient | undefined) {
        super(educationAssignmentGroupRecipientParameterValue);
        this.additionalData = educationAssignmentGroupRecipientParameterValue?.additionalData ? educationAssignmentGroupRecipientParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
