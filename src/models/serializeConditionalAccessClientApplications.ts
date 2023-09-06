import { type ConditionalAccessClientApplications } from './conditionalAccessClientApplications';
import { type ConditionalAccessFilter } from './conditionalAccessFilter';
import { serializeConditionalAccessFilter } from './serializeConditionalAccessFilter';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessClientApplications(writer: SerializationWriter, conditionalAccessClientApplications: ConditionalAccessClientApplications | undefined = {} as ConditionalAccessClientApplications) : void {
        writer.writeCollectionOfPrimitiveValues<string>("excludeServicePrincipals", conditionalAccessClientApplications.excludeServicePrincipals);
        writer.writeCollectionOfPrimitiveValues<string>("includeServicePrincipals", conditionalAccessClientApplications.includeServicePrincipals);
        writer.writeStringValue("@odata.type", conditionalAccessClientApplications.odataType);
        writer.writeObjectValue<ConditionalAccessFilter>("servicePrincipalFilter", conditionalAccessClientApplications.servicePrincipalFilter, serializeConditionalAccessFilter);
        writer.writeAdditionalData(conditionalAccessClientApplications.additionalData);
}
