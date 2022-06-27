import {createFeedbackTokenSetFromDiscriminatorValue} from './createFeedbackTokenSetFromDiscriminatorValue';
import {FeedbackTokenSet} from './feedbackTokenSet';
import {FeedbackTokenSetImpl} from './index';
import {UserFeedback} from './userFeedback';
import {UserFeedbackRating} from './userFeedbackRating';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFeedbackImpl implements UserFeedback {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The rating provided by the user of this endpoint about the quality of this Session. Possible values are: notRated, bad, poor, fair, good, excellent, unknownFutureValue. */
    public rating?: UserFeedbackRating | undefined;
    /** The feedback text provided by the user of this endpoint for the session. */
    public text?: string | undefined;
    /** The set of feedback tokens provided by the user of this endpoint for the session. This is a set of Boolean properties. The property names should not be relied upon since they may change depending on what tokens are offered to the user. */
    public tokens?: FeedbackTokenSet | undefined;
    /**
     * Instantiates a new userFeedback and sets the default values.
     * @param userFeedbackParameterValue 
     */
    public constructor(userFeedbackParameterValue?: UserFeedback | undefined) {
        this.additionalData = userFeedbackParameterValue?.additionalData ? userFeedbackParameterValue?.additionalData! : {};
        this.rating = userFeedbackParameterValue?.rating;
        this.text = userFeedbackParameterValue?.text;
        this.tokens = userFeedbackParameterValue?.tokens instanceof FeedbackTokenSetImpl? userFeedbackParameterValue?.tokens:new FeedbackTokenSetImpl(userFeedbackParameterValue?.tokens);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "rating": n => { this.rating = n.getEnumValue<UserFeedbackRating>(UserFeedbackRating); },
            "text": n => { this.text = n.getStringValue(); },
            "tokens": n => { this.tokens = n.getObjectValue<FeedbackTokenSetImpl>(createFeedbackTokenSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.rating){
            writer.writeEnumValue<UserFeedbackRating>("rating", this.rating);
        }
        if(this.text){
            writer.writeStringValue("text", this.text);
        }
        if(this.tokens){
            writer.writeObjectValue<FeedbackTokenSetImpl>("tokens", new FeedbackTokenSetImpl(this.tokens));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
