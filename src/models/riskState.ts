/** Provides operations to manage the collection of agreement entities. */
export enum RiskState {
    None = "none",
    ConfirmedSafe = "confirmedSafe",
    Remediated = "remediated",
    Dismissed = "dismissed",
    AtRisk = "atRisk",
    ConfirmedCompromised = "confirmedCompromised",
    UnknownFutureValue = "unknownFutureValue",
}
