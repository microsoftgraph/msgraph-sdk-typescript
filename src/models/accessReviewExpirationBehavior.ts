/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export enum AccessReviewExpirationBehavior {
    KeepAccess = "keepAccess",
    RemoveAccess = "removeAccess",
    AcceptAccessRecommendation = "acceptAccessRecommendation",
    UnknownFutureValue = "unknownFutureValue",
}
