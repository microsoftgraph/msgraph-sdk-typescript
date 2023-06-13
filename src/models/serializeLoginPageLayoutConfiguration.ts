import {LayoutTemplateType} from './layoutTemplateType';
import {LoginPageLayoutConfiguration} from './loginPageLayoutConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLoginPageLayoutConfiguration(writer: SerializationWriter, loginPageLayoutConfiguration: LoginPageLayoutConfiguration | undefined = {} as LoginPageLayoutConfiguration) : void {
        writer.writeBooleanValue("isFooterShown", loginPageLayoutConfiguration.isFooterShown);
        writer.writeBooleanValue("isHeaderShown", loginPageLayoutConfiguration.isHeaderShown);
        writer.writeEnumValue<LayoutTemplateType>("layoutTemplateType", loginPageLayoutConfiguration.layoutTemplateType);
        writer.writeStringValue("@odata.type", loginPageLayoutConfiguration.odataType);
        writer.writeAdditionalData(loginPageLayoutConfiguration.additionalData);
}
