import {GiphyRatingType} from './giphyRatingType';
import type {TeamFunSettings} from './teamFunSettings';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamFunSettings(writer: SerializationWriter, teamFunSettings: TeamFunSettings | undefined = {} as TeamFunSettings) : void {
        writer.writeBooleanValue("allowCustomMemes", teamFunSettings.allowCustomMemes);
        writer.writeBooleanValue("allowGiphy", teamFunSettings.allowGiphy);
        writer.writeBooleanValue("allowStickersAndMemes", teamFunSettings.allowStickersAndMemes);
        writer.writeEnumValue<GiphyRatingType>("giphyContentRating", teamFunSettings.giphyContentRating);
        writer.writeStringValue("@odata.type", teamFunSettings.odataType);
        writer.writeAdditionalData(teamFunSettings.additionalData);
}
