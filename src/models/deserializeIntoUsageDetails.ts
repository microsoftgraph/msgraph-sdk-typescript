import { type UsageDetails } from './usageDetails';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUsageDetails(usageDetails: UsageDetails | undefined = {} as UsageDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "lastAccessedDateTime": n => { usageDetails.lastAccessedDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { usageDetails.lastModifiedDateTime = n.getDateValue(); },
        "@odata.type": n => { usageDetails.odataType = n.getStringValue(); },
    }
}
