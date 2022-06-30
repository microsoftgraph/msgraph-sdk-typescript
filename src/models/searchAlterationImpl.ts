import {AlteredQueryToken} from './alteredQueryToken';
import {createAlteredQueryTokenFromDiscriminatorValue} from './createAlteredQueryTokenFromDiscriminatorValue';
import {AlteredQueryTokenImpl} from './index';
import {SearchAlteration} from './searchAlteration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAlterationImpl implements SearchAlteration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is (/ue000, /ue001) */
    private _alteredHighlightedQueryString?: string | undefined;
    /** Defines the altered query string with spelling correction. */
    private _alteredQueryString?: string | undefined;
    /** Represents changed segments with respect to original query. */
    private _alteredQueryTokens?: AlteredQueryToken[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the alteredHighlightedQueryString property value. Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is (/ue000, /ue001)
     * @returns a string
     */
    public get alteredHighlightedQueryString() {
        return this._alteredHighlightedQueryString;
    };
    /**
     * Sets the alteredHighlightedQueryString property value. Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is (/ue000, /ue001)
     * @param value Value to set for the alteredHighlightedQueryString property.
     */
    public set alteredHighlightedQueryString(value: string | undefined) {
        if(value) {
            this._alteredHighlightedQueryString = value;
        }
    };
    /**
     * Gets the alteredQueryString property value. Defines the altered query string with spelling correction.
     * @returns a string
     */
    public get alteredQueryString() {
        return this._alteredQueryString;
    };
    /**
     * Sets the alteredQueryString property value. Defines the altered query string with spelling correction.
     * @param value Value to set for the alteredQueryString property.
     */
    public set alteredQueryString(value: string | undefined) {
        if(value) {
            this._alteredQueryString = value;
        }
    };
    /**
     * Gets the alteredQueryTokens property value. Represents changed segments with respect to original query.
     * @returns a AlteredQueryTokenInterface
     */
    public get alteredQueryTokens() {
        return this._alteredQueryTokens;
    };
    /**
     * Sets the alteredQueryTokens property value. Represents changed segments with respect to original query.
     * @param value Value to set for the alteredQueryTokens property.
     */
    public set alteredQueryTokens(value: AlteredQueryToken[] | undefined) {
        if(value) {
            const alteredQueryTokensArrValue: AlteredQueryTokenImpl[] = [];
            this.alteredQueryTokens?.forEach(element => {
                alteredQueryTokensArrValue.push((element instanceof AlteredQueryTokenImpl? element:new AlteredQueryTokenImpl(element)));
            });
            this._alteredQueryTokens = alteredQueryTokensArrValue;
        }
    };
    /**
     * Instantiates a new searchAlteration and sets the default values.
     * @param searchAlterationParameterValue 
     */
    public constructor(searchAlterationParameterValue?: SearchAlteration | undefined) {
        this._additionalData = searchAlterationParameterValue?.additionalData ? searchAlterationParameterValue?.additionalData! : {};
        this._alteredHighlightedQueryString = searchAlterationParameterValue?.alteredHighlightedQueryString;
        this._alteredQueryString = searchAlterationParameterValue?.alteredQueryString;
        this._alteredQueryTokens = searchAlterationParameterValue?.alteredQueryTokens;
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
        if(this.alteredQueryTokens && this.alteredQueryTokens.length != 0){        const alteredQueryTokensArrValue: AlteredQueryTokenImpl[] = [];
        this.alteredQueryTokens?.forEach(element => {
            alteredQueryTokensArrValue.push((element instanceof AlteredQueryTokenImpl? element:new AlteredQueryTokenImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AlteredQueryTokenImpl>("alteredQueryTokens", alteredQueryTokensArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
