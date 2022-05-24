import {SearchQuery} from './searchQuery';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchQueryImpl implements AdditionalDataHolder, Parsable, SearchQuery {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The search query containing the search terms. Required. */
    public queryString?: string | undefined;
    /**
     * Instantiates a new searchQuery and sets the default values.
     * @param searchQueryParameterValue 
     */
    public constructor(searchQueryParameterValue?: SearchQuery | undefined) {
        this.additionalData = searchQueryParameterValue?.additionalData ? searchQueryParameterValue?.additionalData! : {}
        this.queryString = searchQueryParameterValue?.queryString ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "queryString": n => { this.queryString = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.queryString){
        writer.writeStringValue("queryString", this.queryString);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
