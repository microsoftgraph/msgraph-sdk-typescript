import {Entity} from './entity';
import {SettingValue} from './settingValue';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GroupSetting extends Entity, Parsable {
    /**
     * Display name of this group of settings, which comes from the associated template.
     */
    displayName?: string | undefined;
    /**
     * Unique identifier for the tenant-level groupSettingTemplates object that's been customized for this group-level settings object. Read-only.
     */
    templateId?: string | undefined;
    /**
     * Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced groupSettingTemplates object.
     */
    values?: SettingValue[] | undefined;
}
