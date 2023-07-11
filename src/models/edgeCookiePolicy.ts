/**
 * Possible values to specify which cookies are allowed in Microsoft Edge.
 */
export enum EdgeCookiePolicy {
    /** Allow the user to set. */
    UserDefined = "userDefined",
    /** Allow. */
    Allow = "allow",
    /** Block only third party cookies. */
    BlockThirdParty = "blockThirdParty",
    /** Block all cookies. */
    BlockAll = "blockAll",
}
