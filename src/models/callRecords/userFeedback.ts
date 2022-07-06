import {createFeedbackTokenSetFromDiscriminatorValue} from './createFeedbackTokenSetFromDiscriminatorValue';
import {FeedbackTokenSet} from './index';
import {UserFeedbackRating} from './userFeedbackRating';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFeedback implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The rating provided by the user of this endpoint about the quality of this Session. Possible values are: notRated, bad, poor, fair, good, excellent, unknownFutureValue. */
    private _rating?: UserFeedbackRating | undefined;
    /** The feedback text provided by the user of this endpoint for the session. */
    private _text?: string | undefined;
    /** The set of feedback tokens provided by the user of this endpoint for the session. This is a set of Boolean properties. The property names should not be relied upon since they may change depending on what tokens are offered to the user. */
    private _tokens?: FeedbackTokenSet | undefined;
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
     * Instantiates a new userFeedback and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "rating": n => { this.rating = n.getEnumValue<UserFeedbackRating>(UserFeedbackRating); },
            "text": n => { this.text = n.getStringValue(); },
            "tokens": n => { this.tokens = n.getObjectValue<FeedbackTokenSet>(createFeedbackTokenSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the rating property value. The rating provided by the user of this endpoint about the quality of this Session. Possible values are: notRated, bad, poor, fair, good, excellent, unknownFutureValue.
     * @returns a userFeedbackRating
     */
    public get rating() {
        return this._rating;
    };
    /**
     * Sets the rating property value. The rating provided by the user of this endpoint about the quality of this Session. Possible values are: notRated, bad, poor, fair, good, excellent, unknownFutureValue.
     * @param value Value to set for the rating property.
     */
    public set rating(value: UserFeedbackRating | undefined) {
        this._rating = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<UserFeedbackRating>("rating", this.rating);
        writer.writeStringValue("text", this.text);
        writer.writeObjectValue<FeedbackTokenSet>("tokens", this.tokens);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text property value. The feedback text provided by the user of this endpoint for the session.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. The feedback text provided by the user of this endpoint for the session.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
    /**
     * Gets the tokens property value. The set of feedback tokens provided by the user of this endpoint for the session. This is a set of Boolean properties. The property names should not be relied upon since they may change depending on what tokens are offered to the user.
     * @returns a feedbackTokenSet
     */
    public get tokens() {
        return this._tokens;
    };
    /**
     * Sets the tokens property value. The set of feedback tokens provided by the user of this endpoint for the session. This is a set of Boolean properties. The property names should not be relied upon since they may change depending on what tokens are offered to the user.
     * @param value Value to set for the tokens property.
     */
    public set tokens(value: FeedbackTokenSet | undefined) {
        this._tokens = value;
    };
}
