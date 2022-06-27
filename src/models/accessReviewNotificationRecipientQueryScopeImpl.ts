import {AccessReviewNotificationRecipientQueryScope} from './accessReviewNotificationRecipientQueryScope';
import {AccessReviewNotificationRecipientScopeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewNotificationRecipientQueryScopeImpl extends AccessReviewNotificationRecipientScopeImpl implements AccessReviewNotificationRecipientQueryScope {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** This represents the query for who the recipients are. For example, /groups/{group id}/members for group members and /users/{user id} for a specific user. */
    public query?: string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query that is, ./manager) is specified. */
    public queryRoot?: string | undefined;
    /** Indicates the type of query. Allowed value is MicrosoftGraph. */
    public queryType?: string | undefined;
    /**
     * Instantiates a new AccessReviewNotificationRecipientQueryScope and sets the default values.
     * @param accessReviewNotificationRecipientQueryScopeParameterValue 
     */
    public constructor(accessReviewNotificationRecipientQueryScopeParameterValue?: AccessReviewNotificationRecipientQueryScope | undefined) {
        super(accessReviewNotificationRecipientQueryScopeParameterValue);
        this.additionalData = accessReviewNotificationRecipientQueryScopeParameterValue?.additionalData ? accessReviewNotificationRecipientQueryScopeParameterValue?.additionalData! : {};
        this.query = accessReviewNotificationRecipientQueryScopeParameterValue?.query;
        this.queryRoot = accessReviewNotificationRecipientQueryScopeParameterValue?.queryRoot;
        this.queryType = accessReviewNotificationRecipientQueryScopeParameterValue?.queryType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "query": n => { this.query = n.getStringValue(); },
            "queryRoot": n => { this.queryRoot = n.getStringValue(); },
            "queryType": n => { this.queryType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.query){
            writer.writeStringValue("query", this.query);
        }
        if(this.queryRoot){
            writer.writeStringValue("queryRoot", this.queryRoot);
        }
        if(this.queryType){
            writer.writeStringValue("queryType", this.queryType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
