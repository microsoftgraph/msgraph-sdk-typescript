import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewReviewerScopeImpl implements AccessReviewReviewerScope, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The query specifying who will be the reviewer. See table for examples. */
    public query?: string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions. */
    public queryRoot?: string | undefined;
    /** The type of query. Examples include MicrosoftGraph and ARM. */
    public queryType?: string | undefined;
    /**
     * Instantiates a new accessReviewReviewerScope and sets the default values.
     * @param accessReviewReviewerScopeParameterValue 
     */
    public constructor(accessReviewReviewerScopeParameterValue?: AccessReviewReviewerScope | undefined) {
        this.additionalData = accessReviewReviewerScopeParameterValue?.additionalData ? accessReviewReviewerScopeParameterValue?.additionalData! : {}
        this.query = accessReviewReviewerScopeParameterValue?.query ;
        this.queryRoot = accessReviewReviewerScopeParameterValue?.queryRoot ;
        this.queryType = accessReviewReviewerScopeParameterValue?.queryType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
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
