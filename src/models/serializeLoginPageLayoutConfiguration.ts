import { LayoutTemplateType } from './layoutTemplateType';
import { type LoginPageLayoutConfiguration } from './loginPageLayoutConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLoginPageLayoutConfiguration(writer: SerializationWriter, loginPageLayoutConfiguration: LoginPageLayoutConfiguration | undefined = {} as LoginPageLayoutConfiguration) : void {
        writer.writeBooleanValue("isFooterShown", loginPageLayoutConfiguration.isFooterShown);
        writer.writeBooleanValue("isHeaderShown", loginPageLayoutConfiguration.isHeaderShown);
        writer.writeEnumValue<LayoutTemplateType>("layoutTemplateType", loginPageLayoutConfiguration.layoutTemplateType);
        writer.writeStringValue("@odata.type", loginPageLayoutConfiguration.odataType);
        writer.writeAdditionalData(loginPageLayoutConfiguration.additionalData);
}
