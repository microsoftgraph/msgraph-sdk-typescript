/** Provides operations to manage the collection of applicationTemplate entities. */
export enum MobileAppPublishingState {
    /** The app is not yet published. */
    NotPublished = "notPublished",
    /** The app is pending service-side processing. */
    Processing = "processing",
    /** The app is published. */
    Published = "published",
}
