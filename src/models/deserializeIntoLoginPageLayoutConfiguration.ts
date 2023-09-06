import { LayoutTemplateType } from './layoutTemplateType';
import { type LoginPageLayoutConfiguration } from './loginPageLayoutConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLoginPageLayoutConfiguration(loginPageLayoutConfiguration: LoginPageLayoutConfiguration | undefined = {} as LoginPageLayoutConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "isFooterShown": n => { loginPageLayoutConfiguration.isFooterShown = n.getBooleanValue(); },
        "isHeaderShown": n => { loginPageLayoutConfiguration.isHeaderShown = n.getBooleanValue(); },
        "layoutTemplateType": n => { loginPageLayoutConfiguration.layoutTemplateType = n.getEnumValue<LayoutTemplateType>(LayoutTemplateType); },
        "@odata.type": n => { loginPageLayoutConfiguration.odataType = n.getStringValue(); },
    }
}
