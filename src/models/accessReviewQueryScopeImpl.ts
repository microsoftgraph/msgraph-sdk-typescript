import {AccessReviewQueryScope} from './accessReviewQueryScope';
import {AccessReviewScopeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewQueryScopeImpl extends AccessReviewScopeImpl implements AccessReviewQueryScope {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The query representing what will be reviewed in an access review. */
    public query?: string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query is specified. For example, ./manager. */
    public queryRoot?: string | undefined;
    /** Indicates the type of query. Types include MicrosoftGraph and ARM. */
    public queryType?: string | undefined;
    /**
     * Instantiates a new AccessReviewQueryScope and sets the default values.
     * @param accessReviewQueryScopeParameterValue 
     */
    public constructor(accessReviewQueryScopeParameterValue?: AccessReviewQueryScope | undefined) {
        super(accessReviewQueryScopeParameterValue);
        this.additionalData = accessReviewQueryScopeParameterValue?.additionalData ? accessReviewQueryScopeParameterValue?.additionalData! : {};
        this.query = accessReviewQueryScopeParameterValue?.query;
        this.queryRoot = accessReviewQueryScopeParameterValue?.queryRoot;
        this.queryType = accessReviewQueryScopeParameterValue?.queryType;
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
