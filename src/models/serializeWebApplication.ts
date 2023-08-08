import type {ImplicitGrantSettings} from './implicitGrantSettings';
import type {RedirectUriSettings} from './redirectUriSettings';
import {serializeImplicitGrantSettings} from './serializeImplicitGrantSettings';
import {serializeRedirectUriSettings} from './serializeRedirectUriSettings';
import type {WebApplication} from './webApplication';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebApplication(writer: SerializationWriter, webApplication: WebApplication | undefined = {} as WebApplication) : void {
        writer.writeStringValue("homePageUrl", webApplication.homePageUrl);
        writer.writeObjectValue<ImplicitGrantSettings>("implicitGrantSettings", webApplication.implicitGrantSettings, serializeImplicitGrantSettings);
        writer.writeStringValue("logoutUrl", webApplication.logoutUrl);
        writer.writeStringValue("@odata.type", webApplication.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("redirectUris", webApplication.redirectUris);
        writer.writeCollectionOfObjectValues<RedirectUriSettings>("redirectUriSettings", webApplication.redirectUriSettings, serializeRedirectUriSettings);
        writer.writeAdditionalData(webApplication.additionalData);
}
