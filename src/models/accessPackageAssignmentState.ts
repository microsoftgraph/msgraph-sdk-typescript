/** Provides operations to manage the auditLogRoot singleton. */
export enum AccessPackageAssignmentState {
    Delivering = "delivering",
    PartiallyDelivered = "partiallyDelivered",
    Delivered = "delivered",
    Expired = "expired",
    DeliveryFailed = "deliveryFailed",
    UnknownFutureValue = "unknownFutureValue",
}
