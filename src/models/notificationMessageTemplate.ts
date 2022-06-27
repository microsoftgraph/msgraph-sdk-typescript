import {Entity} from './entity';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {NotificationTemplateBrandingOptions} from './notificationTemplateBrandingOptions';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplate extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation, includeCompanyPortalLink. */
    brandingOptions?: NotificationTemplateBrandingOptions | undefined;
    /** The default locale to fallback onto when the requested locale is not available. */
    defaultLocale?: string | undefined;
    /** Display name for the Notification Message Template. */
    displayName?: string | undefined;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?: Date | undefined;
    /** The list of localized messages for this Notification Message Template. */
    localizedNotificationMessages?: LocalizedNotificationMessage[] | undefined;
}
