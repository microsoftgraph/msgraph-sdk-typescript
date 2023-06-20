import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessClientApplications(conditionalAccessClientApplications: ConditionalAccessClientApplications | undefined = {} as ConditionalAccessClientApplications, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("excludeServicePrincipals", conditionalAccessClientApplications.excludeServicePrincipals);
        writer.writeCollectionOfPrimitiveValues<string>("includeServicePrincipals", conditionalAccessClientApplications.includeServicePrincipals);
        writer.writeStringValue("@odata.type", conditionalAccessClientApplications.odataType);
        writer.writeAdditionalData(conditionalAccessClientApplications.additionalData);
}
