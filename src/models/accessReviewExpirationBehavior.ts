/** Provides operations to manage the admin singleton. */
export enum AccessReviewExpirationBehavior {
    KeepAccess = "keepAccess",
    RemoveAccess = "removeAccess",
    AcceptAccessRecommendation = "acceptAccessRecommendation",
    UnknownFutureValue = "unknownFutureValue",
}
