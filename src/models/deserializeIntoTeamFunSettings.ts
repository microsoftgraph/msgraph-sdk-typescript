import {GiphyRatingType} from './giphyRatingType';
import {TeamFunSettings} from './teamFunSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamFunSettings(teamFunSettings: TeamFunSettings | undefined = {} as TeamFunSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCustomMemes": n => { teamFunSettings.allowCustomMemes = n.getBooleanValue(); },
        "allowGiphy": n => { teamFunSettings.allowGiphy = n.getBooleanValue(); },
        "allowStickersAndMemes": n => { teamFunSettings.allowStickersAndMemes = n.getBooleanValue(); },
        "giphyContentRating": n => { teamFunSettings.giphyContentRating = n.getEnumValue<GiphyRatingType>(GiphyRatingType); },
        "@odata.type": n => { teamFunSettings.odataType = n.getStringValue(); },
    }
}
