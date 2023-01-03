/** Provides operations to manage the appCatalogs singleton. */
export enum RiskState {
    None = "none",
    ConfirmedSafe = "confirmedSafe",
    Remediated = "remediated",
    Dismissed = "dismissed",
    AtRisk = "atRisk",
    ConfirmedCompromised = "confirmedCompromised",
    UnknownFutureValue = "unknownFutureValue",
}
