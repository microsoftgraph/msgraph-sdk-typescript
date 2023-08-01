import {createImplicitGrantSettingsFromDiscriminatorValue} from './createImplicitGrantSettingsFromDiscriminatorValue';
import {createRedirectUriSettingsFromDiscriminatorValue} from './createRedirectUriSettingsFromDiscriminatorValue';
import type {ImplicitGrantSettings} from './implicitGrantSettings';
import type {RedirectUriSettings} from './redirectUriSettings';
import {serializeImplicitGrantSettings} from './serializeImplicitGrantSettings';
import {serializeRedirectUriSettings} from './serializeRedirectUriSettings';
import type {WebApplication} from './webApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebApplication(webApplication: WebApplication | undefined = {} as WebApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "homePageUrl": n => { webApplication.homePageUrl = n.getStringValue(); },
        "implicitGrantSettings": n => { webApplication.implicitGrantSettings = n.getObjectValue<ImplicitGrantSettings>(createImplicitGrantSettingsFromDiscriminatorValue); },
        "logoutUrl": n => { webApplication.logoutUrl = n.getStringValue(); },
        "@odata.type": n => { webApplication.odataType = n.getStringValue(); },
        "redirectUris": n => { webApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
        "redirectUriSettings": n => { webApplication.redirectUriSettings = n.getCollectionOfObjectValues<RedirectUriSettings>(createRedirectUriSettingsFromDiscriminatorValue); },
    }
}
