/** Provides operations to manage the collection of agreement entities. */
export enum AccessPackageAssignmentState {
    Delivering = "delivering",
    PartiallyDelivered = "partiallyDelivered",
    Delivered = "delivered",
    Expired = "expired",
    DeliveryFailed = "deliveryFailed",
    UnknownFutureValue = "unknownFutureValue",
}
