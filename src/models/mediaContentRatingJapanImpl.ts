import {MediaContentRatingJapan} from './mediaContentRatingJapan';
import {RatingJapanMoviesType} from './ratingJapanMoviesType';
import {RatingJapanTelevisionType} from './ratingJapanTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingJapanImpl implements MediaContentRatingJapan {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Movies rating selected for Japan. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove15, agesAbove18. */
    private _movieRating?: RatingJapanMoviesType | undefined;
    /** TV rating selected for Japan. Possible values are: allAllowed, allBlocked, explicitAllowed. */
    private _tvRating?: RatingJapanTelevisionType | undefined;
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
     * Instantiates a new mediaContentRatingJapan and sets the default values.
     * @param mediaContentRatingJapanParameterValue 
     */
    public constructor(mediaContentRatingJapanParameterValue?: MediaContentRatingJapan | undefined) {
        this._additionalData = mediaContentRatingJapanParameterValue?.additionalData ? mediaContentRatingJapanParameterValue?.additionalData! : {};
        this._movieRating = mediaContentRatingJapanParameterValue?.movieRating;
        this._tvRating = mediaContentRatingJapanParameterValue?.tvRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingJapanMoviesType>(RatingJapanMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingJapanTelevisionType>(RatingJapanTelevisionType); },
        };
    };
    /**
     * Gets the movieRating property value. Movies rating selected for Japan. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove15, agesAbove18.
     * @returns a ratingJapanMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating selected for Japan. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove15, agesAbove18.
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingJapanMoviesType | undefined) {
        if(value) {
            this._movieRating = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.movieRating){
            writer.writeEnumValue<RatingJapanMoviesType>("movieRating", this.movieRating);
        }
        if(this.tvRating){
            writer.writeEnumValue<RatingJapanTelevisionType>("tvRating", this.tvRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tvRating property value. TV rating selected for Japan. Possible values are: allAllowed, allBlocked, explicitAllowed.
     * @returns a ratingJapanTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV rating selected for Japan. Possible values are: allAllowed, allBlocked, explicitAllowed.
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingJapanTelevisionType | undefined) {
        if(value) {
            this._tvRating = value;
        }
    };
}
