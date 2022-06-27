import {AccessReviewInstanceDecisionItemAzureRoleResource} from './accessReviewInstanceDecisionItemAzureRoleResource';
import {AccessReviewInstanceDecisionItemResource} from './accessReviewInstanceDecisionItemResource';
import {createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue';
import {AccessReviewInstanceDecisionItemResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemAzureRoleResourceImpl extends AccessReviewInstanceDecisionItemResourceImpl implements AccessReviewInstanceDecisionItemAzureRoleResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Details of the scope this role is associated with. */
    public scope?: AccessReviewInstanceDecisionItemResource | undefined;
    /**
     * Instantiates a new AccessReviewInstanceDecisionItemAzureRoleResource and sets the default values.
     * @param accessReviewInstanceDecisionItemAzureRoleResourceParameterValue 
     */
    public constructor(accessReviewInstanceDecisionItemAzureRoleResourceParameterValue?: AccessReviewInstanceDecisionItemAzureRoleResource | undefined) {
        super(accessReviewInstanceDecisionItemAzureRoleResourceParameterValue);
        this.additionalData = accessReviewInstanceDecisionItemAzureRoleResourceParameterValue?.additionalData ? accessReviewInstanceDecisionItemAzureRoleResourceParameterValue?.additionalData! : {};
        this.scope = accessReviewInstanceDecisionItemAzureRoleResourceParameterValue?.scope instanceof AccessReviewInstanceDecisionItemResourceImpl? accessReviewInstanceDecisionItemAzureRoleResourceParameterValue?.scope:new AccessReviewInstanceDecisionItemResourceImpl(accessReviewInstanceDecisionItemAzureRoleResourceParameterValue?.scope);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "scope": n => { this.scope = n.getObjectValue<AccessReviewInstanceDecisionItemResourceImpl>(createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.scope){
            writer.writeObjectValue<AccessReviewInstanceDecisionItemResourceImpl>("scope", new AccessReviewInstanceDecisionItemResourceImpl(this.scope));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
