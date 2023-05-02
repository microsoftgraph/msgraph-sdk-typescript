import {ApplicationTemplate} from './applicationTemplate';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationTemplate(applicationTemplate: ApplicationTemplate | undefined = {} as ApplicationTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(applicationTemplate),
        "categories": n => { applicationTemplate.categories = n.getCollectionOfPrimitiveValues<string>(); },
        "description": n => { applicationTemplate.description = n.getStringValue(); },
        "displayName": n => { applicationTemplate.displayName = n.getStringValue(); },
        "homePageUrl": n => { applicationTemplate.homePageUrl = n.getStringValue(); },
        "logoUrl": n => { applicationTemplate.logoUrl = n.getStringValue(); },
        "publisher": n => { applicationTemplate.publisher = n.getStringValue(); },
        "supportedProvisioningTypes": n => { applicationTemplate.supportedProvisioningTypes = n.getCollectionOfPrimitiveValues<string>(); },
        "supportedSingleSignOnModes": n => { applicationTemplate.supportedSingleSignOnModes = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
