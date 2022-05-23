import {GiphyRatingType} from './giphyRatingType';
import {TeamFunSettings} from './teamFunSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamFunSettingsImpl implements AdditionalDataHolder, Parsable, TeamFunSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If set to true, enables users to include custom memes. */
    public allowCustomMemes?: boolean | undefined;
    /** If set to true, enables Giphy use. */
    public allowGiphy?: boolean | undefined;
    /** If set to true, enables users to include stickers and memes. */
    public allowStickersAndMemes?: boolean | undefined;
    /** Giphy content rating. Possible values are: moderate, strict. */
    public giphyContentRating?: GiphyRatingType | undefined;
    /**
     * Instantiates a new teamFunSettings and sets the default values.
     * @param teamFunSettingsParameterValue 
     */
    public constructor(teamFunSettingsParameterValue?: TeamFunSettings | undefined) {
        this.additionalData = teamFunSettingsParameterValue?.additionalData ? teamFunSettingsParameterValue?.additionalData! : {}
        this.allowCustomMemes = teamFunSettingsParameterValue?.allowCustomMemes ;
        this.allowGiphy = teamFunSettingsParameterValue?.allowGiphy ;
        this.allowStickersAndMemes = teamFunSettingsParameterValue?.allowStickersAndMemes ;
        this.giphyContentRating = teamFunSettingsParameterValue?.giphyContentRating ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCustomMemes": n => { this.allowCustomMemes = n.getBooleanValue(); },
            "allowGiphy": n => { this.allowGiphy = n.getBooleanValue(); },
            "allowStickersAndMemes": n => { this.allowStickersAndMemes = n.getBooleanValue(); },
            "giphyContentRating": n => { this.giphyContentRating = n.getEnumValue<GiphyRatingType>(GiphyRatingType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowCustomMemes){
        writer.writeBooleanValue("allowCustomMemes", this.allowCustomMemes);
        }
        if(this.allowGiphy){
        writer.writeBooleanValue("allowGiphy", this.allowGiphy);
        }
        if(this.allowStickersAndMemes){
        writer.writeBooleanValue("allowStickersAndMemes", this.allowStickersAndMemes);
        }
        if(this.giphyContentRating){
        writer.writeEnumValue<GiphyRatingType>("giphyContentRating", this.giphyContentRating);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
