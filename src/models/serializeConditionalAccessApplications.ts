import { type ConditionalAccessApplications } from './conditionalAccessApplications';
import { type ConditionalAccessFilter } from './conditionalAccessFilter';
import { serializeConditionalAccessFilter } from './serializeConditionalAccessFilter';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessApplications(writer: SerializationWriter, conditionalAccessApplications: ConditionalAccessApplications | undefined = {} as ConditionalAccessApplications) : void {
        writer.writeObjectValue<ConditionalAccessFilter>("applicationFilter", conditionalAccessApplications.applicationFilter, serializeConditionalAccessFilter);
        writer.writeCollectionOfPrimitiveValues<string>("excludeApplications", conditionalAccessApplications.excludeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeApplications", conditionalAccessApplications.includeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeAuthenticationContextClassReferences", conditionalAccessApplications.includeAuthenticationContextClassReferences);
        writer.writeCollectionOfPrimitiveValues<string>("includeUserActions", conditionalAccessApplications.includeUserActions);
        writer.writeStringValue("@odata.type", conditionalAccessApplications.odataType);
        writer.writeAdditionalData(conditionalAccessApplications.additionalData);
}
