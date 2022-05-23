import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemResourceImpl implements AccessReviewInstanceDecisionItemResource, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Display name of the resource */
    public displayName?: string | undefined;
    /** Resource ID */
    public id?: string | undefined;
    /** Type of resource. Types include: Group, ServicePrincipal, DirectoryRole, AzureRole, AccessPackageAssignmentPolicy. */
    public type?: string | undefined;
    /**
     * Instantiates a new accessReviewInstanceDecisionItemResource and sets the default values.
     * @param accessReviewInstanceDecisionItemResourceParameterValue 
     */
    public constructor(accessReviewInstanceDecisionItemResourceParameterValue?: AccessReviewInstanceDecisionItemResource | undefined) {
        this.additionalData = accessReviewInstanceDecisionItemResourceParameterValue?.additionalData ? accessReviewInstanceDecisionItemResourceParameterValue?.additionalData! : {}
        this.displayName = accessReviewInstanceDecisionItemResourceParameterValue?.displayName ;
        this.id = accessReviewInstanceDecisionItemResourceParameterValue?.id ;
        this.type = accessReviewInstanceDecisionItemResourceParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
