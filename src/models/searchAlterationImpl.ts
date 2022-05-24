import {AlteredQueryToken} from './alteredQueryToken';
import {createAlteredQueryTokenFromDiscriminatorValue} from './createAlteredQueryTokenFromDiscriminatorValue';
import {AlteredQueryTokenImpl} from './index';
import {SearchAlteration} from './searchAlteration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAlterationImpl implements AdditionalDataHolder, Parsable, SearchAlteration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is (/ue000, /ue001) */
    public alteredHighlightedQueryString?: string | undefined;
    /** Defines the altered query string with spelling correction. */
    public alteredQueryString?: string | undefined;
    /** Represents changed segments with respect to original query. */
    public alteredQueryTokens?: AlteredQueryToken[] | undefined;
    /**
     * Instantiates a new searchAlteration and sets the default values.
     * @param searchAlterationParameterValue 
     */
    public constructor(searchAlterationParameterValue?: SearchAlteration | undefined) {
        this.additionalData = searchAlterationParameterValue?.additionalData ? searchAlterationParameterValue?.additionalData! : {}
        this.alteredHighlightedQueryString = searchAlterationParameterValue?.alteredHighlightedQueryString ;
        this.alteredQueryString = searchAlterationParameterValue?.alteredQueryString ;
        this.alteredQueryTokens = searchAlterationParameterValue?.alteredQueryTokens ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "alteredHighlightedQueryString": n => { this.alteredHighlightedQueryString = n.getStringValue(); },
            "alteredQueryString": n => { this.alteredQueryString = n.getStringValue(); },
            "alteredQueryTokens": n => { this.alteredQueryTokens = n.getCollectionOfObjectValues<AlteredQueryTokenImpl>(createAlteredQueryTokenFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.alteredHighlightedQueryString){
        writer.writeStringValue("alteredHighlightedQueryString", this.alteredHighlightedQueryString);
        }
        if(this.alteredQueryString){
        writer.writeStringValue("alteredQueryString", this.alteredQueryString);
        }
        if(this.alteredQueryTokens && this.alteredQueryTokens.length != 0){        const alteredQueryTokensArrValue: AlteredQueryTokenImpl[] = []; this.alteredQueryTokens?.forEach(element => {alteredQueryTokensArrValue.push(new AlteredQueryTokenImpl(element));});
        writer.writeCollectionOfObjectValues<AlteredQueryTokenImpl>("alteredQueryTokens", alteredQueryTokensArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
