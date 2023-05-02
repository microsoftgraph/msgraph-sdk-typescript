import {createUserFlowLanguagePageFromDiscriminatorValue} from './createUserFlowLanguagePageFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserFlowLanguagePage} from './serializeUserFlowLanguagePage';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguageConfiguration(userFlowLanguageConfiguration: UserFlowLanguageConfiguration | undefined = {} as UserFlowLanguageConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userFlowLanguageConfiguration),
        "defaultPages": n => { userFlowLanguageConfiguration.defaultPages = n.getCollectionOfObjectValues<UserFlowLanguagePage>(createUserFlowLanguagePageFromDiscriminatorValue); },
        "displayName": n => { userFlowLanguageConfiguration.displayName = n.getStringValue(); },
        "isEnabled": n => { userFlowLanguageConfiguration.isEnabled = n.getBooleanValue(); },
        "overridesPages": n => { userFlowLanguageConfiguration.overridesPages = n.getCollectionOfObjectValues<UserFlowLanguagePage>(createUserFlowLanguagePageFromDiscriminatorValue); },
    }
}
