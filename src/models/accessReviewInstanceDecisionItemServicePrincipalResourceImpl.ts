import {AccessReviewInstanceDecisionItemServicePrincipalResource} from './accessReviewInstanceDecisionItemServicePrincipalResource';
import {AccessReviewInstanceDecisionItemResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemServicePrincipalResourceImpl extends AccessReviewInstanceDecisionItemResourceImpl implements AccessReviewInstanceDecisionItemServicePrincipalResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The appId property */
    public appId?: string | undefined;
    /**
     * Instantiates a new AccessReviewInstanceDecisionItemServicePrincipalResource and sets the default values.
     * @param accessReviewInstanceDecisionItemServicePrincipalResourceParameterValue 
     */
    public constructor(accessReviewInstanceDecisionItemServicePrincipalResourceParameterValue?: AccessReviewInstanceDecisionItemServicePrincipalResource | undefined) {
        super(accessReviewInstanceDecisionItemServicePrincipalResourceParameterValue);
        this.additionalData = accessReviewInstanceDecisionItemServicePrincipalResourceParameterValue?.additionalData ? accessReviewInstanceDecisionItemServicePrincipalResourceParameterValue?.additionalData! : {};
        this.appId = accessReviewInstanceDecisionItemServicePrincipalResourceParameterValue?.appId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appId": n => { this.appId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appId){
            writer.writeStringValue("appId", this.appId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
