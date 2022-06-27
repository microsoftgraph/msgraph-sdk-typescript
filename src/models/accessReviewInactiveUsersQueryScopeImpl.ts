import {AccessReviewInactiveUsersQueryScope} from './accessReviewInactiveUsersQueryScope';
import {AccessReviewQueryScopeImpl} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInactiveUsersQueryScopeImpl extends AccessReviewQueryScopeImpl implements AccessReviewInactiveUsersQueryScope {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines the duration of inactivity. Inactivity is based on the last sign in date of the user compared to the access review instance's start date. If this property is not specified, it's assigned the default value PT0S. */
    public inactiveDuration?: Duration | undefined;
    /**
     * Instantiates a new AccessReviewInactiveUsersQueryScope and sets the default values.
     * @param accessReviewInactiveUsersQueryScopeParameterValue 
     */
    public constructor(accessReviewInactiveUsersQueryScopeParameterValue?: AccessReviewInactiveUsersQueryScope | undefined) {
        super(accessReviewInactiveUsersQueryScopeParameterValue);
        this.additionalData = accessReviewInactiveUsersQueryScopeParameterValue?.additionalData ? accessReviewInactiveUsersQueryScopeParameterValue?.additionalData! : {};
        this.inactiveDuration = accessReviewInactiveUsersQueryScopeParameterValue?.inactiveDuration;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "inactiveDuration": n => { this.inactiveDuration = n.getDurationValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.inactiveDuration){
            writer.writeDurationValue("inactiveDuration", this.inactiveDuration);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
