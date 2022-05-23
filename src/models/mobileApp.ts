import {Entity} from './entity';
import {MimeContent} from './mimeContent';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppCategory} from './mobileAppCategory';
import {MobileAppPublishingState} from './mobileAppPublishingState';

export interface MobileApp extends Entity{
    /** The list of group assignments for this mobile app. */
    assignments?:MobileAppAssignment[] | undefined;
    /** The list of categories for this app. */
    categories?:MobileAppCategory[] | undefined;
    /** The date and time the app was created. */
    createdDateTime?:Date | undefined;
    /** The description of the app. */
    description?:string | undefined;
    /** The developer of the app. */
    developer?:string | undefined;
    /** The admin provided or imported title of the app. */
    displayName?:string | undefined;
    /** The more information Url. */
    informationUrl?:string | undefined;
    /** The value indicating whether the app is marked as featured by the admin. */
    isFeatured?:boolean | undefined;
    /** The large icon, to be displayed in the app details and used for upload of the icon. */
    largeIcon?:MimeContent | undefined;
    /** The date and time the app was last modified. */
    lastModifiedDateTime?:Date | undefined;
    /** Notes for the app. */
    notes?:string | undefined;
    /** The owner of the app. */
    owner?:string | undefined;
    /** The privacy statement Url. */
    privacyInformationUrl?:string | undefined;
    /** The publisher of the app. */
    publisher?:string | undefined;
    /** The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are: notPublished, processing, published. */
    publishingState?:MobileAppPublishingState | undefined;
}
