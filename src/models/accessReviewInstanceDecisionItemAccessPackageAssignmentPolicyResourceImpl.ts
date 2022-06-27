import {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource';
import {AccessReviewInstanceDecisionItemResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceImpl extends AccessReviewInstanceDecisionItemResourceImpl implements AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource {
    /** Display name of the access package to which access has been granted. */
    public accessPackageDisplayName?: string | undefined;
    /** Identifier of the access package to which access has been granted. */
    public accessPackageId?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource and sets the default values.
     * @param accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceParameterValue 
     */
    public constructor(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceParameterValue?: AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource | undefined) {
        super(accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceParameterValue);
        this.accessPackageDisplayName = accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceParameterValue?.accessPackageDisplayName;
        this.accessPackageId = accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceParameterValue?.accessPackageId;
        this.additionalData = accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceParameterValue?.additionalData ? accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResourceParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackageDisplayName": n => { this.accessPackageDisplayName = n.getStringValue(); },
            "accessPackageId": n => { this.accessPackageId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackageDisplayName){
            writer.writeStringValue("accessPackageDisplayName", this.accessPackageDisplayName);
        }
        if(this.accessPackageId){
            writer.writeStringValue("accessPackageId", this.accessPackageId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
