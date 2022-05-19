import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchAlterationOptions implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether spelling modifications are enabled. If enabled, user will get the search results for corrected query when there are no results for the original query with typos and get the spelling modification information in queryAlterationResponse property of the response. Optional. */
    private _enableModification?: boolean | undefined;
    /** Indicates whether spelling suggestions are enabled. If enabled, the user will get the search results for the original search query and suggestions for spelling correction in the queryAlterationResponse property of the response for the typos in the query. Optional. */
    private _enableSuggestion?: boolean | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new searchAlterationOptions and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enableModification property value. Indicates whether spelling modifications are enabled. If enabled, user will get the search results for corrected query when there are no results for the original query with typos and get the spelling modification information in queryAlterationResponse property of the response. Optional.
     * @returns a boolean
     */
    public get enableModification() {
        return this._enableModification;
    };
    /**
     * Sets the enableModification property value. Indicates whether spelling modifications are enabled. If enabled, user will get the search results for corrected query when there are no results for the original query with typos and get the spelling modification information in queryAlterationResponse property of the response. Optional.
     * @param value Value to set for the enableModification property.
     */
    public set enableModification(value: boolean | undefined) {
        this._enableModification = value;
    };
    /**
     * Gets the enableSuggestion property value. Indicates whether spelling suggestions are enabled. If enabled, the user will get the search results for the original search query and suggestions for spelling correction in the queryAlterationResponse property of the response for the typos in the query. Optional.
     * @returns a boolean
     */
    public get enableSuggestion() {
        return this._enableSuggestion;
    };
    /**
     * Sets the enableSuggestion property value. Indicates whether spelling suggestions are enabled. If enabled, the user will get the search results for the original search query and suggestions for spelling correction in the queryAlterationResponse property of the response for the typos in the query. Optional.
     * @param value Value to set for the enableSuggestion property.
     */
    public set enableSuggestion(value: boolean | undefined) {
        this._enableSuggestion = value;
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
        writer.writeBooleanValue("enableModification", this.enableModification);
        writer.writeBooleanValue("enableSuggestion", this.enableSuggestion);
        writer.writeAdditionalData(this.additionalData);
    };
}
