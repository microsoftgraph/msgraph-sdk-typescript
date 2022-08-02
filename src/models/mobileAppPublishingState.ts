/** Provides operations to manage the admin singleton. */
export enum MobileAppPublishingState {
    /** The app is not yet published. */
    NotPublished = "notPublished",
    /** The app is pending service-side processing. */
    Processing = "processing",
    /** The app is published. */
    Published = "published",
}
