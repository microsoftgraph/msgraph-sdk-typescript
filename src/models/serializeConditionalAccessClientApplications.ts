import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessClientApplications(writer: SerializationWriter, conditionalAccessClientApplications: ConditionalAccessClientApplications | undefined = {} as ConditionalAccessClientApplications) : void {
        writer.writeCollectionOfPrimitiveValues<string>("excludeServicePrincipals", conditionalAccessClientApplications.excludeServicePrincipals);
        writer.writeCollectionOfPrimitiveValues<string>("includeServicePrincipals", conditionalAccessClientApplications.includeServicePrincipals);
        writer.writeStringValue("@odata.type", conditionalAccessClientApplications.odataType);
        writer.writeAdditionalData(conditionalAccessClientApplications.additionalData);
}
