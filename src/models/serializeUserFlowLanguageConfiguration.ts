import {serializeEntity} from './serializeEntity';
import {serializeUserFlowLanguagePage} from './serializeUserFlowLanguagePage';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguageConfiguration(writer: SerializationWriter, userFlowLanguageConfiguration: UserFlowLanguageConfiguration | undefined = {} as UserFlowLanguageConfiguration) : void {
        serializeEntity(writer, userFlowLanguageConfiguration)
        writer.writeCollectionOfObjectValues<UserFlowLanguagePage>("defaultPages", userFlowLanguageConfiguration.defaultPages, serializeUserFlowLanguagePage);
        writer.writeStringValue("displayName", userFlowLanguageConfiguration.displayName);
        writer.writeBooleanValue("isEnabled", userFlowLanguageConfiguration.isEnabled);
        writer.writeCollectionOfObjectValues<UserFlowLanguagePage>("overridesPages", userFlowLanguageConfiguration.overridesPages, serializeUserFlowLanguagePage);
}
