import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessApplications(conditionalAccessApplications: ConditionalAccessApplications | undefined = {} as ConditionalAccessApplications) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeApplications": n => { conditionalAccessApplications.excludeApplications = n.getCollectionOfPrimitiveValues<string>(); },
        "includeApplications": n => { conditionalAccessApplications.includeApplications = n.getCollectionOfPrimitiveValues<string>(); },
        "includeAuthenticationContextClassReferences": n => { conditionalAccessApplications.includeAuthenticationContextClassReferences = n.getCollectionOfPrimitiveValues<string>(); },
        "includeUserActions": n => { conditionalAccessApplications.includeUserActions = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { conditionalAccessApplications.odataType = n.getStringValue(); },
    }
}
