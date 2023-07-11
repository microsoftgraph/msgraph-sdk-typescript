import {DirectoryObject} from './directoryObject';
import {SettingTemplateValue} from './settingTemplateValue';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupSettingTemplate extends DirectoryObject, Parsable {
    /**
     * Description of the template.
     */
    description?: string | undefined;
    /**
     * Display name of the template. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
     */
    displayName?: string | undefined;
    /**
     * Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template.
     */
    values?: SettingTemplateValue[] | undefined;
}
