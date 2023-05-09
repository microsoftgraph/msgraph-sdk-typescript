import {UsageDetails} from './usageDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsageDetails(writer: SerializationWriter, usageDetails: UsageDetails | undefined = {} as UsageDetails) : void {
        writer.writeDateValue("lastAccessedDateTime", usageDetails.lastAccessedDateTime);
        writer.writeDateValue("lastModifiedDateTime", usageDetails.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", usageDetails.odataType);
        writer.writeAdditionalData(usageDetails.additionalData);
}
