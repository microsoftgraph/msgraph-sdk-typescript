import {Entity} from './entity';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';

export interface NotificationMessageTemplate extends Entity{
    /** The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation, includeCompanyPortalLink. */
    brandingOptions?:NotificationTemplateBrandingOptions | undefined;
    /** The default locale to fallback onto when the requested locale is not available. */
    defaultLocale?:string | undefined;
    /** Display name for the Notification Message Template. */
    displayName?:string | undefined;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?:Date | undefined;
    /** The list of localized messages for this Notification Message Template. */
    localizedNotificationMessages?:LocalizedNotificationMessage[] | undefined;
}
