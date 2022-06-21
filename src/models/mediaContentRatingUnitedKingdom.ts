import {RatingUnitedKingdomMoviesType} from './ratingUnitedKingdomMoviesType';
import {RatingUnitedKingdomTelevisionType} from './ratingUnitedKingdomTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaContentRatingUnitedKingdom implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Movies rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, general, universalChildren, parentalGuidance, agesAbove12Video, agesAbove12Cinema, agesAbove15, adults. */
    private _movieRating?: RatingUnitedKingdomMoviesType | undefined;
    /** TV rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, caution. */
    private _tvRating?: RatingUnitedKingdomTelevisionType | undefined;
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
     * Instantiates a new mediaContentRatingUnitedKingdom and sets the default values.
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
            "movieRating": n => { this.movieRating = n.getEnumValue<RatingUnitedKingdomMoviesType>(RatingUnitedKingdomMoviesType); },
            "tvRating": n => { this.tvRating = n.getEnumValue<RatingUnitedKingdomTelevisionType>(RatingUnitedKingdomTelevisionType); },
        };
    };
    /**
     * Gets the movieRating property value. Movies rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, general, universalChildren, parentalGuidance, agesAbove12Video, agesAbove12Cinema, agesAbove15, adults.
     * @returns a ratingUnitedKingdomMoviesType
     */
    public get movieRating() {
        return this._movieRating;
    };
    /**
     * Sets the movieRating property value. Movies rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, general, universalChildren, parentalGuidance, agesAbove12Video, agesAbove12Cinema, agesAbove15, adults.
     * @param value Value to set for the movieRating property.
     */
    public set movieRating(value: RatingUnitedKingdomMoviesType | undefined) {
        this._movieRating = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<RatingUnitedKingdomMoviesType>("movieRating", this.movieRating);
        writer.writeEnumValue<RatingUnitedKingdomTelevisionType>("tvRating", this.tvRating);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tvRating property value. TV rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, caution.
     * @returns a ratingUnitedKingdomTelevisionType
     */
    public get tvRating() {
        return this._tvRating;
    };
    /**
     * Sets the tvRating property value. TV rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, caution.
     * @param value Value to set for the tvRating property.
     */
    public set tvRating(value: RatingUnitedKingdomTelevisionType | undefined) {
        this._tvRating = value;
    };
}
