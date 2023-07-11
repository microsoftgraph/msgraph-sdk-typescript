import {Entity} from './entity';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplate extends Entity, Parsable {
    /**
     * Branding Options for the Message Template. Branding is defined in the Intune Admin Console.
     */
    brandingOptions?: NotificationTemplateBrandingOptions | undefined;
    /**
     * The default locale to fallback onto when the requested locale is not available.
     */
    defaultLocale?: string | undefined;
    /**
     * Display name for the Notification Message Template.
     */
    displayName?: string | undefined;
    /**
     * DateTime the object was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The list of localized messages for this Notification Message Template.
     */
    localizedNotificationMessages?: LocalizedNotificationMessage[] | undefined;
    /**
     * List of Scope Tags for this Entity instance.
     */
    roleScopeTagIds?: string[] | undefined;
}
