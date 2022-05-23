import {SearchAlterationOptions} from './searchAlterationOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAlterationOptionsImpl implements AdditionalDataHolder, Parsable, SearchAlterationOptions {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether spelling modifications are enabled. If enabled, user will get the search results for corrected query when there are no results for the original query with typos and get the spelling modification information in queryAlterationResponse property of the response. Optional. */
    public enableModification?: boolean | undefined;
    /** Indicates whether spelling suggestions are enabled. If enabled, the user will get the search results for the original search query and suggestions for spelling correction in the queryAlterationResponse property of the response for the typos in the query. Optional. */
    public enableSuggestion?: boolean | undefined;
    /**
     * Instantiates a new searchAlterationOptions and sets the default values.
     * @param searchAlterationOptionsParameterValue 
     */
    public constructor(searchAlterationOptionsParameterValue?: SearchAlterationOptions | undefined) {
        this.additionalData = searchAlterationOptionsParameterValue?.additionalData ? searchAlterationOptionsParameterValue?.additionalData! : {}
        this.enableModification = searchAlterationOptionsParameterValue?.enableModification ;
        this.enableSuggestion = searchAlterationOptionsParameterValue?.enableSuggestion ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enableModification": n => { this.enableModification = n.getBooleanValue(); },
            "enableSuggestion": n => { this.enableSuggestion = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.enableModification){
        writer.writeBooleanValue("enableModification", this.enableModification);
        }
        if(this.enableSuggestion){
        writer.writeBooleanValue("enableSuggestion", this.enableSuggestion);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
