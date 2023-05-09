import {OrganizationalBrandingProperties} from './organizationalBrandingProperties';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBrandingProperties(writer: SerializationWriter, organizationalBrandingProperties: OrganizationalBrandingProperties | undefined = {} as OrganizationalBrandingProperties) : void {
        serializeEntity(writer, organizationalBrandingProperties)
        writer.writeStringValue("backgroundColor", organizationalBrandingProperties.backgroundColor);
        writer.writeStringValue("backgroundImage", organizationalBrandingProperties.backgroundImage);
        writer.writeStringValue("backgroundImageRelativeUrl", organizationalBrandingProperties.backgroundImageRelativeUrl);
        writer.writeStringValue("bannerLogo", organizationalBrandingProperties.bannerLogo);
        writer.writeStringValue("bannerLogoRelativeUrl", organizationalBrandingProperties.bannerLogoRelativeUrl);
        writer.writeCollectionOfPrimitiveValues<string>("cdnList", organizationalBrandingProperties.cdnList);
        writer.writeStringValue("signInPageText", organizationalBrandingProperties.signInPageText);
        writer.writeStringValue("squareLogo", organizationalBrandingProperties.squareLogo);
        writer.writeStringValue("squareLogoRelativeUrl", organizationalBrandingProperties.squareLogoRelativeUrl);
        writer.writeStringValue("usernameHintText", organizationalBrandingProperties.usernameHintText);
}
