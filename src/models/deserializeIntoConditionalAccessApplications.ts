import { type ConditionalAccessApplications } from './conditionalAccessApplications';
import { type ConditionalAccessFilter } from './conditionalAccessFilter';
import { createConditionalAccessFilterFromDiscriminatorValue } from './createConditionalAccessFilterFromDiscriminatorValue';
import { serializeConditionalAccessFilter } from './serializeConditionalAccessFilter';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessApplications(conditionalAccessApplications: ConditionalAccessApplications | undefined = {} as ConditionalAccessApplications) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationFilter": n => { conditionalAccessApplications.applicationFilter = n.getObjectValue<ConditionalAccessFilter>(createConditionalAccessFilterFromDiscriminatorValue); },
        "excludeApplications": n => { conditionalAccessApplications.excludeApplications = n.getCollectionOfPrimitiveValues<string>(); },
        "includeApplications": n => { conditionalAccessApplications.includeApplications = n.getCollectionOfPrimitiveValues<string>(); },
        "includeAuthenticationContextClassReferences": n => { conditionalAccessApplications.includeAuthenticationContextClassReferences = n.getCollectionOfPrimitiveValues<string>(); },
        "includeUserActions": n => { conditionalAccessApplications.includeUserActions = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { conditionalAccessApplications.odataType = n.getStringValue(); },
    }
}
