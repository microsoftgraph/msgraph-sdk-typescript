import {EducationAssignmentIndividualRecipient} from './educationAssignmentIndividualRecipient';
import {EducationAssignmentRecipientImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentIndividualRecipientImpl extends EducationAssignmentRecipientImpl implements EducationAssignmentIndividualRecipient {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A collection of ids of the recipients. */
    public recipients?: string[] | undefined;
    /**
     * Instantiates a new EducationAssignmentIndividualRecipient and sets the default values.
     * @param educationAssignmentIndividualRecipientParameterValue 
     */
    public constructor(educationAssignmentIndividualRecipientParameterValue?: EducationAssignmentIndividualRecipient | undefined) {
        super(educationAssignmentIndividualRecipientParameterValue);
        this.additionalData = educationAssignmentIndividualRecipientParameterValue?.additionalData ? educationAssignmentIndividualRecipientParameterValue?.additionalData! : {};
        this.recipients = educationAssignmentIndividualRecipientParameterValue?.recipients;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "recipients": n => { this.recipients = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.recipients){
            writer.writeCollectionOfPrimitiveValues<string>("recipients", this.recipients);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
