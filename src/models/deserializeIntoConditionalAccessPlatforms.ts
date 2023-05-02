import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPlatforms(conditionalAccessPlatforms: ConditionalAccessPlatforms | undefined = {} as ConditionalAccessPlatforms) : Record<string, (node: ParseNode) => void> {
    return {
        "excludePlatforms": n => { conditionalAccessPlatforms.excludePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); },
        "includePlatforms": n => { conditionalAccessPlatforms.includePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform); },
        "@odata.type": n => { conditionalAccessPlatforms.odataType = n.getStringValue(); },
    }
}
