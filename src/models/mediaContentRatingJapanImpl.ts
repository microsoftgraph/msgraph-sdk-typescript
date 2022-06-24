import {MediaContentRatingJapan} from './mediaContentRatingJapan';
import {RatingJapanMoviesType} from './ratingJapanMoviesType';
import {RatingJapanTelevisionType} from './ratingJapanTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingJapanImpl implements MediaContentRatingJapan {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Movies rating selected for Japan. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove15, agesAbove18. */
    public movieRating?: RatingJapanMoviesType | undefined;
    /** TV rating selected for Japan. Possible values are: allAllowed, allBlocked, explicitAllowed. */
    public tvRating?: RatingJapanTelevisionType | undefined;
    /**
     * Instantiates a new mediaContentRatingJapan and sets the default values.
     * @param mediaContentRatingJapanParameterValue 
     */
    public constructor(mediaContentRatingJapanParameterValue?: MediaContentRatingJapan | undefined) {
        this.additionalData = mediaContentRatingJapanParameterValue?.additionalData ? mediaContentRatingJapanParameterValue?.additionalData! : {};
        this.movieRating = mediaContentRatingJapanParameterValue?.movieRating;
        this.tvRating = mediaContentRatingJapanParameterValue?.tvRating;
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
}
