import { type ApplicationTemplate } from './applicationTemplate';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplicationTemplate(writer: SerializationWriter, applicationTemplate: ApplicationTemplate | undefined = {} as ApplicationTemplate) : void {
        serializeEntity(writer, applicationTemplate)
        writer.writeCollectionOfPrimitiveValues<string>("categories", applicationTemplate.categories);
        writer.writeStringValue("description", applicationTemplate.description);
        writer.writeStringValue("displayName", applicationTemplate.displayName);
        writer.writeStringValue("homePageUrl", applicationTemplate.homePageUrl);
        writer.writeStringValue("logoUrl", applicationTemplate.logoUrl);
        writer.writeStringValue("publisher", applicationTemplate.publisher);
        writer.writeCollectionOfPrimitiveValues<string>("supportedProvisioningTypes", applicationTemplate.supportedProvisioningTypes);
        writer.writeCollectionOfPrimitiveValues<string>("supportedSingleSignOnModes", applicationTemplate.supportedSingleSignOnModes);
}
