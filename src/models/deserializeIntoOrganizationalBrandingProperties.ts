import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingProperties(organizationalBrandingProperties: OrganizationalBrandingProperties | undefined = {} as OrganizationalBrandingProperties) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(organizationalBrandingProperties),
        "backgroundColor": n => { organizationalBrandingProperties.backgroundColor = n.getStringValue(); },
        "backgroundImage": n => { organizationalBrandingProperties.backgroundImage = n.getStringValue(); },
        "backgroundImageRelativeUrl": n => { organizationalBrandingProperties.backgroundImageRelativeUrl = n.getStringValue(); },
        "bannerLogo": n => { organizationalBrandingProperties.bannerLogo = n.getStringValue(); },
        "bannerLogoRelativeUrl": n => { organizationalBrandingProperties.bannerLogoRelativeUrl = n.getStringValue(); },
        "cdnList": n => { organizationalBrandingProperties.cdnList = n.getCollectionOfPrimitiveValues<string>(); },
        "signInPageText": n => { organizationalBrandingProperties.signInPageText = n.getStringValue(); },
        "squareLogo": n => { organizationalBrandingProperties.squareLogo = n.getStringValue(); },
        "squareLogoRelativeUrl": n => { organizationalBrandingProperties.squareLogoRelativeUrl = n.getStringValue(); },
        "usernameHintText": n => { organizationalBrandingProperties.usernameHintText = n.getStringValue(); },
    }
}
