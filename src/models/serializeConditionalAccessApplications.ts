import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessApplications(conditionalAccessApplications: ConditionalAccessApplications | undefined = {} as ConditionalAccessApplications, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("excludeApplications", conditionalAccessApplications.excludeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeApplications", conditionalAccessApplications.includeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeAuthenticationContextClassReferences", conditionalAccessApplications.includeAuthenticationContextClassReferences);
        writer.writeCollectionOfPrimitiveValues<string>("includeUserActions", conditionalAccessApplications.includeUserActions);
        writer.writeStringValue("@odata.type", conditionalAccessApplications.odataType);
        writer.writeAdditionalData(conditionalAccessApplications.additionalData);
}
