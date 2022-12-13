/** Provides operations to manage the deviceAppManagement singleton. */
export enum MobileAppPublishingState {
    /** The app is not yet published. */
    NotPublished = "notPublished",
    /** The app is pending service-side processing. */
    Processing = "processing",
    /** The app is published. */
    Published = "published",
}
