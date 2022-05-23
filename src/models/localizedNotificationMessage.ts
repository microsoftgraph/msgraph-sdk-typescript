import {Entity} from './entity';

export interface LocalizedNotificationMessage extends Entity{
    /** Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message. */
    isDefault?:boolean | undefined;
    /** DateTime the object was last modified. */
    lastModifiedDateTime?:Date | undefined;
    /** The Locale for which this message is destined. */
    locale?:string | undefined;
    /** The Message Template content. */
    messageTemplate?:string | undefined;
    /** The Message Template Subject. */
    subject?:string | undefined;
}
