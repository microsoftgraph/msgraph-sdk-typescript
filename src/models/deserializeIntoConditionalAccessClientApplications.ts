import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessClientApplications(conditionalAccessClientApplications: ConditionalAccessClientApplications | undefined = {} as ConditionalAccessClientApplications) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeServicePrincipals": n => { conditionalAccessClientApplications.excludeServicePrincipals = n.getCollectionOfPrimitiveValues<string>(); },
        "includeServicePrincipals": n => { conditionalAccessClientApplications.includeServicePrincipals = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { conditionalAccessClientApplications.odataType = n.getStringValue(); },
    }
}
